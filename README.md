# Sitio Personal React — S3 + CloudFront

Infraestructura Terraform para hostear un sitio estático (React, Vue, Astro, HTML plano) sobre **S3 privado** detrás de **CloudFront** con HTTPS gratuito y CDN global.

## Arquitectura

```
       Usuarios (globales)
              │
              │ HTTPS (443)
              ▼
    ┌───────────────────────┐
    │  CloudFront (CDN)     │  ← HTTPS con cert *.cloudfront.net
    │  300+ edge locations  │  ← Cache: CachingOptimized policy
    │  gzip/brotli auto     │  ← 403/404 → /index.html (SPA)
    └──────────┬────────────┘
               │ sigv4 firmado (OAC)
               ▼
    ┌───────────────────────┐
    │  S3 Bucket (privado)  │  ← PublicAccessBlock: TODO bloqueado
    │  AES256 encryption    │  ← Versionado activado
    │  ./dist/ de tu React  │  ← Solo CloudFront puede leer
    └───────────────────────┘
```

### Flujo petición

1. Usuario pide `https://d123.cloudfront.net/about`.
2. Edge CloudFront más cercano sirve el asset cacheado (si existe).
3. Si no: CloudFront firma una request sigv4 al bucket S3 vía OAC.
4. S3 verifica el OAC + el bucket policy → entrega el objeto.
5. CloudFront cachea en el edge (CachingOptimized policy, TTLs altos).
6. Si la ruta no existe (SPA client-side routing): S3 devuelve 403/404 → CloudFront lo transforma en `200 /index.html` → React Router toma control.

## Componentes

| Recurso | Propósito |
|---|---|
| `aws_s3_bucket.site` | Almacenamiento del build |
| `aws_s3_bucket_public_access_block` | Bloquea TODO acceso público directo al bucket |
| `aws_s3_bucket_versioning` | Versionado — permite recuperar archivos sobrescritos |
| `aws_s3_bucket_server_side_encryption_configuration` | SSE-S3 (AES256) at-rest |
| `aws_s3_bucket_policy` | Permite `s3:GetObject` **solo** a la distribución CloudFront específica (via `AWS:SourceArn`) |
| `aws_cloudfront_origin_access_control` | Mecanismo moderno (reemplaza OAI) — CloudFront firma requests con sigv4 |
| `aws_cloudfront_distribution` | CDN: HTTPS, compresión, cache, SPA fallback |

## Decisiones de diseño

### S3 privado + OAC (no bucket público)
El patrón viejo era "static website hosting" de S3 público. Problemas: solo HTTP, sin CDN, sin HTTPS custom domain fácil. El patrón moderno = bucket privado, CloudFront como único lector autorizado vía **Origin Access Control** (OAC, reemplazó OAI en 2022).

### `CachingOptimized` managed policy
Policy id `658327ea-...` es una managed policy de AWS con TTLs óptimos (min=1s, default=86400s, max=31536000s) + soporte gzip/brotli. No reinventes ruedas.

### SPA routing (403/404 → index.html)
React Router, Vue Router, etc. manejan rutas client-side (`/about`, `/projects/1`). S3 no tiene esas rutas → 404. La regla `custom_error_response` convierte esos 404 en un `200` sirviendo `/index.html`, y React resuelve la ruta en el browser. Sin esto, refrescar una URL profunda rompe.

### PriceClass_100
Edges solo en NA + EU = ~60% del costo vs all-edges. Suficiente para 95% de sitios personales. Cambiar a `PriceClass_All` si tu audiencia está en Asia/Oceanía/Sudamérica lejana.

### Versionado
Si subes `index.html` malo por accidente, recuperas la versión anterior con `aws s3api list-object-versions`. Costa prácticamente cero para un sitio pequeño.

### Sin custom domain (por ahora)
La distribución usa el dominio default `d123.cloudfront.net` + cert ACM default. Agregar dominio propio = 3 recursos extra (ACM en us-east-1, record Route53, `aliases` en distribution). Fácil de añadir cuando tengas dominio.

## Uso

### 1. Requisitos

- Terraform ≥ 1.5
- AWS CLI configurado
- Node.js para React (si aún no tienes el build)

### 2. Crear app React (si no tienes)

```bash
cd /home/erney/development/cloud/aws/react-static-site
npm create vite@latest app -- --template react
cd app
npm install
npm run build
# genera app/dist/
```

O si ya tienes tu proyecto React, copia/symlinkea su carpeta `dist/` (o `build/` para CRA) a la raíz de este proyecto Terraform como `./dist/`.

### 3. Desplegar infra

```bash
cp terraform.tfvars.example terraform.tfvars
# editar bucket_name — debe ser único globalmente en AWS
terraform init
terraform apply
```

**CloudFront tarda 3-5 min en propagarse la primera vez.** Terraform espera a que la distribución quede `Deployed`.

### 4. Subir el build

```bash
# desde ./app/dist/ (vite) o ./build/ (CRA)
aws s3 sync ./app/dist/ s3://$(terraform output -raw bucket_name)/ --delete

# invalidar caché CloudFront para ver cambios YA
aws cloudfront create-invalidation \
  --distribution-id $(terraform output -raw distribution_id) \
  --paths '/*'
```

O usa el output que combina ambos:
```bash
eval "$(terraform output -raw deploy_cmd)"
```

### 5. Abrir

```bash
xdg-open "$(terraform output -raw url)"
# o
curl -I "$(terraform output -raw url)"
```

## Workflow de despliegues siguientes

```bash
cd app
npm run build
aws s3 sync ./dist/ s3://<bucket>/ --delete
aws cloudfront create-invalidation --distribution-id <id> --paths '/*'
```

Automatizable con GitHub Actions (oidc + `aws-actions/configure-aws-credentials`) en ~30 líneas.

## Costos aproximados

| Recurso | USD/mes |
|---|---|
| S3 almacenamiento | ~$0.023/GB (sitio típico <100 MB = ~$0.002) |
| S3 requests | Casi gratis (CloudFront absorbe la mayoría) |
| CloudFront data transfer out | $0.085/GB primeros 10 TB (~$1 por 10 GB servidos) |
| CloudFront requests | $0.0075 por 10 000 HTTPS |
| ACM cert default | $0 |
| **Sitio personal típico** | **<$1/mes** |

Free tier CloudFront (**perpetuo**, no 12 meses): **1 TB de salida + 10M requests/mes gratis**. Un sitio personal real no paga nada.

## Agregar dominio propio más adelante

Tres recursos extra (reutiliza el patrón del proyecto `ecs-fargate` pero cert **obligatoriamente en us-east-1**):

```hcl
# ACM cert — DEBE estar en us-east-1 para CloudFront
resource "aws_acm_certificate" "site" {
  provider          = aws.us_east_1
  domain_name       = var.domain_name
  validation_method = "DNS"
  lifecycle { create_before_destroy = true }
}

# Añadir a aws_cloudfront_distribution.site:
# aliases = [var.domain_name]
# viewer_certificate {
#   acm_certificate_arn      = aws_acm_certificate_validation.site.certificate_arn
#   ssl_support_method       = "sni-only"
#   minimum_protocol_version = "TLSv1.2_2021"
# }

# Route53 A record alias → CloudFront
resource "aws_route53_record" "site" {
  zone_id = data.aws_route53_zone.this.zone_id
  name    = var.domain_name
  type    = "A"
  alias {
    name                   = aws_cloudfront_distribution.site.domain_name
    zone_id                = aws_cloudfront_distribution.site.hosted_zone_id
    evaluate_target_health = false
  }
}
```

## Alternativas consideradas

| Opción | Pro | Contra |
|---|---|---|
| **S3 + CloudFront (este proyecto)** | HTTPS, CDN, barato, control total | Setup inicial más largo |
| S3 website hosting (público) | Setup 1 recurso | Solo HTTP, sin CDN, sin HTTPS con dominio |
| Amplify Hosting | Git → deploy automático, súper fácil | Más caro, menos control |
| Vercel/Netlify | UX de deploy top, free tier generoso | Ya no es AWS, menos integración |
| EC2/ECS sirviendo estáticos | Absurdo | Overkill, $$ |

Para un sitio personal en AWS: **S3 + CloudFront gana** en precio, control y fiabilidad.

## Destruir

```bash
# primero vaciar el bucket (Terraform no lo borra si tiene objetos)
aws s3 rm s3://$(terraform output -raw bucket_name) --recursive

# si versionado activo, borrar versiones también:
aws s3api delete-objects --bucket $(terraform output -raw bucket_name) \
  --delete "$(aws s3api list-object-versions --bucket $(terraform output -raw bucket_name) \
  --query='{Objects: Versions[].{Key:Key,VersionId:VersionId}}')"

terraform destroy
```
