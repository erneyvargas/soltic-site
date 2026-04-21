output "bucket_name" {
  value = aws_s3_bucket.site.id
}

output "cloudfront_domain" {
  value = aws_cloudfront_distribution.site.domain_name
}

output "url" {
  value = "https://${aws_cloudfront_distribution.site.domain_name}"
}

output "distribution_id" {
  value = aws_cloudfront_distribution.site.id
}

output "deploy_cmd" {
  value       = "aws s3 sync ./dist/ s3://${aws_s3_bucket.site.id}/ --delete && aws cloudfront create-invalidation --distribution-id ${aws_cloudfront_distribution.site.id} --paths '/*'"
  description = "Comando para subir dist/ y purgar caché CDN"
}

output "github_deploy_role_arn" {
  value       = aws_iam_role.github_deploy.arn
  description = "ARN del role que GitHub Actions asume vía OIDC"
}

output "github_workflow_env" {
  value = <<EOT
AWS_ROLE_ARN:    ${aws_iam_role.github_deploy.arn}
AWS_REGION:      ${var.region}
S3_BUCKET:       ${aws_s3_bucket.site.id}
CLOUDFRONT_ID:   ${aws_cloudfront_distribution.site.id}
EOT
  description = "Valores para el workflow"
}
