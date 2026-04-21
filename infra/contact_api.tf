# --- SES identity ---
resource "aws_ses_email_identity" "notify" {
  email = var.notify_email
}

# --- IAM role para Lambda ---
data "aws_iam_policy_document" "lambda_assume" {
  statement {
    actions = ["sts:AssumeRole"]
    principals {
      type        = "Service"
      identifiers = ["lambda.amazonaws.com"]
    }
  }
}

resource "aws_iam_role" "contact_lambda" {
  name               = "${var.project}-contact-lambda"
  assume_role_policy = data.aws_iam_policy_document.lambda_assume.json
}

resource "aws_iam_role_policy_attachment" "contact_lambda_logs" {
  role       = aws_iam_role.contact_lambda.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

data "aws_iam_policy_document" "contact_lambda_ses" {
  statement {
    actions   = ["ses:SendEmail", "ses:SendRawEmail"]
    resources = ["*"]
    condition {
      test     = "StringEquals"
      variable = "ses:FromAddress"
      values   = [var.notify_email]
    }
  }
}

resource "aws_iam_role_policy" "contact_lambda_ses" {
  name   = "${var.project}-contact-lambda-ses"
  role   = aws_iam_role.contact_lambda.id
  policy = data.aws_iam_policy_document.contact_lambda_ses.json
}

# --- Zip del código ---
data "archive_file" "contact_lambda" {
  type        = "zip"
  source_dir  = "${path.module}/lambda/contact"
  output_path = "${path.module}/dist/contact.zip"
}

resource "aws_cloudwatch_log_group" "contact_lambda" {
  name              = "/aws/lambda/${var.project}-contact"
  retention_in_days = 14
}

# --- Lambda function ---
resource "aws_lambda_function" "contact" {
  function_name    = "${var.project}-contact"
  role             = aws_iam_role.contact_lambda.arn
  filename         = data.archive_file.contact_lambda.output_path
  source_code_hash = data.archive_file.contact_lambda.output_base64sha256
  handler          = "index.handler"
  runtime          = "nodejs20.x"
  timeout          = 10
  memory_size      = 256

  environment {
    variables = {
      NOTIFY_EMAIL = var.notify_email
    }
  }

  depends_on = [aws_cloudwatch_log_group.contact_lambda]
}

# --- API Gateway HTTP API ---
resource "aws_apigatewayv2_api" "contact" {
  name          = "${var.project}-contact"
  protocol_type = "HTTP"

  cors_configuration {
    allow_origins = ["https://${aws_cloudfront_distribution.site.domain_name}", "http://localhost:5173"]
    allow_methods = ["POST", "OPTIONS"]
    allow_headers = ["content-type"]
    max_age       = 300
  }
}

resource "aws_apigatewayv2_integration" "contact" {
  api_id                 = aws_apigatewayv2_api.contact.id
  integration_type       = "AWS_PROXY"
  integration_uri        = aws_lambda_function.contact.invoke_arn
  payload_format_version = "2.0"
}

resource "aws_apigatewayv2_route" "contact_post" {
  api_id    = aws_apigatewayv2_api.contact.id
  route_key = "POST /contact"
  target    = "integrations/${aws_apigatewayv2_integration.contact.id}"
}

resource "aws_apigatewayv2_stage" "default" {
  api_id      = aws_apigatewayv2_api.contact.id
  name        = "$default"
  auto_deploy = true

  default_route_settings {
    throttling_burst_limit = 5
    throttling_rate_limit  = 2
  }
}

resource "aws_lambda_permission" "apigw" {
  statement_id  = "AllowAPIGWInvoke"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.contact.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_apigatewayv2_api.contact.execution_arn}/*/*"
}
