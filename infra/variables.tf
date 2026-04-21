variable "region" {
  type    = string
  default = "us-east-1"
}

variable "project" {
  type    = string
  default = "personal-site"
}

variable "bucket_name" {
  type        = string
  description = "Nombre único global del bucket S3 (ej: erneyvargas-personal-site)"
}

variable "price_class" {
  type        = string
  default     = "PriceClass_100"
  description = "PriceClass_100 = NA+EU (más barato); PriceClass_200 = +Asia; PriceClass_All = global"
}

variable "assets_bucket_name" {
  type        = string
  description = "Bucket S3 para imágenes y assets estáticos (único global)"
}

variable "github_owner" {
  type        = string
  description = "GitHub user u org dueño del repo (ej: erneyvargas)"
}

variable "github_repo" {
  type        = string
  description = "Nombre del repo GitHub (ej: soltic-site)"
}

variable "github_branch" {
  type        = string
  default     = "main"
  description = "Branch autorizada a desplegar"
}
