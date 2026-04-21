export const cases = [
  {
    slug: "fintech-core-bancario",
    client: "Fintech · Banca digital",
    title: "Core bancario event-driven en 18 meses",
    tags: ["Microservicios", "AWS", "Event-driven"],
    kpi: "3M+ transacciones/día",
    image: "/images/case-fintech.jpg",
    year: "2024-2025",
    duration: "18 meses",
    team: "12 personas",
    challenge:
      "El cliente operaba un core bancario legacy en mainframe que procesaba 800k transacciones diarias con ventanas de mantenimiento nocturnas. El crecimiento esperado de 4x en 2 años requería rediseñar la arquitectura sin afectar la operación continua.",
    solution:
      "Diseñamos un core event-driven usando Kafka como bus central, con microservicios en Go y PostgreSQL como fuente de verdad. Migración por bounded contexts en strangler-fig: cada mes movimos un dominio (cuentas → pagos → créditos → cobranzas) sin downtime. Autenticación OAuth2/OIDC, cumplimiento PCI-DSS, observabilidad con OpenTelemetry.",
    results: [
      { k: "3.2M", v: "transacciones/día procesadas en producción" },
      { k: "99.99%", v: "uptime en 12 meses post-migración" },
      { k: "p95 < 80ms", v: "latencia de APIs críticas de pago" },
      { k: "-58%", v: "costo operativo vs mainframe anterior" },
    ],
    stack: ["Go", "Kafka", "PostgreSQL", "Kubernetes (EKS)", "Terraform", "OpenTelemetry", "Grafana"],
    testimonial: {
      q: "Migrar un core bancario sin caerse suena imposible. Soltic lo hizo mes a mes durante 18 meses sin un solo incidente mayor. El equipo es excepcional.",
      name: "Ana Restrepo",
      role: "VP Technology · Fintech cliente",
      avatar: "/images/testimonial-01.jpg",
    },
  },
  {
    slug: "healthtech-telemedicina",
    client: "Healthtech · Telemedicina",
    title: "Plataforma HIPAA-ready con 1M+ pacientes",
    tags: ["React Native", "GCP", "WebRTC"],
    kpi: "45% reducción tiempo de consulta",
    image: "/images/case-healthtech.jpg",
    year: "2023-2024",
    duration: "10 meses",
    team: "8 personas",
    challenge:
      "Red de clínicas necesitaba digitalizar consultas virtuales con historia clínica electrónica (EHR), receta electrónica y video HD de baja latencia para 1M+ afiliados.",
    solution:
      "App móvil React Native + web Next.js, backend Node.js en GCP con Cloud Run. Video WebRTC con selectivo forwarding (SFU) propio. EHR modelado en FHIR. Auditoría completa para cumplimiento HIPAA.",
    results: [
      { k: "1.2M", v: "pacientes activos en 12 meses" },
      { k: "-45%", v: "tiempo de consulta promedio" },
      { k: "98%", v: "satisfacción (NPS)" },
      { k: "0", v: "incidentes de seguridad" },
    ],
    stack: ["React Native", "Next.js", "Node.js", "GCP Cloud Run", "Firestore", "WebRTC"],
    testimonial: {
      q: "Pasamos de una agenda en papel a una operación 100% digital en menos de un año. La plataforma aguanta picos de 10x sin pestañear.",
      name: "Carlos Medina",
      role: "CTO · Healthtech cliente",
      avatar: "/images/testimonial-02.jpg",
    },
  },
  {
    slug: "marketplace-logistica",
    client: "Marketplace · Logística",
    title: "MVP a Serie A en 10 semanas",
    tags: ["Next.js", "PostgreSQL", "Stripe"],
    kpi: "Cierre Serie A: USD 8M",
    image: "/images/case-marketplace.jpg",
    year: "2025",
    duration: "10 semanas",
    team: "5 personas",
    challenge:
      "Founders con tracción orgánica pero sin producto construido. Necesitaban validar unit economics ante inversionistas de Serie A en 3 meses.",
    solution:
      "MVP con Next.js + Stripe Connect + PostgreSQL. Marketplace bi-lateral con matching algoritmo simple pero efectivo. Tablero de métricas en Metabase desde día 1 para argumentar ante VCs con datos reales.",
    results: [
      { k: "10 sem.", v: "MVP en producción con pagos" },
      { k: "USD 8M", v: "ronda Serie A cerrada con nuestro tablero" },
      { k: "450", v: "merchants en los primeros 90 días" },
      { k: "$1.2M", v: "GMV procesado en 3 meses" },
    ],
    stack: ["Next.js", "PostgreSQL", "Stripe Connect", "Metabase", "Vercel"],
    testimonial: {
      q: "Soltic entendió que nuestro enemigo era el tiempo, no la deuda técnica. El MVP fue el tablero perfecto para cerrar la ronda.",
      name: "María Gómez",
      role: "Founder & CEO · Marketplace",
      avatar: "/images/testimonial-03.jpg",
    },
  },
  {
    slug: "ott-streaming-deportivo",
    client: "OTT · Streaming deportivo",
    title: "Streaming en vivo para 500k concurrentes",
    tags: ["HLS", "CloudFront", "Kubernetes"],
    kpi: "99.99% uptime en finales",
    image: "/images/case-streaming.jpg",
    year: "2024",
    duration: "6 meses",
    team: "6 personas",
    challenge:
      "Plataforma OTT con derechos de fútbol necesitaba soportar 500k usuarios concurrentes en finales nacionales. La infra existente colapsaba a 80k.",
    solution:
      "Pipeline HLS con transcoding en MediaLive, distribución CloudFront con shields regionales. Backend en Kubernetes auto-escalable (HPA por RPS). Paywall con suscripciones recurrentes y control de sesiones concurrentes.",
    results: [
      { k: "500k", v: "viewers concurrentes en final" },
      { k: "99.99%", v: "uptime durante temporada" },
      { k: "-38%", v: "costo por viewer-hora" },
      { k: "p99 < 4s", v: "buffer time promedio" },
    ],
    stack: ["AWS MediaLive", "CloudFront", "Kubernetes (EKS)", "Node.js", "Redis"],
  },
  {
    slug: "edtech-lms-ai",
    client: "EdTech · Educación corporativa",
    title: "LMS con IA generativa para evaluación",
    tags: ["Anthropic Claude", "RAG", "Python"],
    kpi: "80% reducción tiempo de evaluación",
    image: "/images/case-edtech.jpg",
    year: "2024-2025",
    duration: "8 meses",
    team: "7 personas",
    challenge:
      "Universidad corporativa evaluaba manualmente 15k exámenes escritos/mes. Los profesores gastaban más tiempo corrigiendo que enseñando.",
    solution:
      "LMS custom con evaluación asistida por Claude: el modelo sugiere nota + feedback, el profesor revisa/ajusta en segundos. RAG sobre rubricas institucionales. Detección de plagio con embeddings.",
    results: [
      { k: "-80%", v: "tiempo promedio de evaluación" },
      { k: "15k", v: "exámenes procesados/mes" },
      { k: "+94%", v: "concordancia con evaluación humana original" },
      { k: "ROI 6 meses", v: "en licencia y ahorro operativo" },
    ],
    stack: ["Python", "FastAPI", "Anthropic Claude", "pgvector", "Next.js"],
  },
  {
    slug: "retail-omnicanal",
    client: "Retail · Omnicanal",
    title: "Headless commerce con 120 tiendas",
    tags: ["Shopify Hydrogen", "Algolia", "Contentful"],
    kpi: "+62% conversión móvil",
    image: "/images/case-retail.jpg",
    year: "2024",
    duration: "7 meses",
    team: "9 personas",
    challenge:
      "Retailer con 120 tiendas físicas y un e-commerce legacy que convertía mal en móvil. Tiempo de carga sobre 8 segundos en redes 4G.",
    solution:
      "Migración a Shopify Hydrogen headless. Búsqueda con Algolia, CMS Contentful, CDN edge. Integración con SAP para inventario en tiempo real. PWA con offline-first.",
    results: [
      { k: "+62%", v: "conversión en móvil vs versión anterior" },
      { k: "1.8s", v: "LCP en p75 (antes 8s+)" },
      { k: "+34%", v: "ticket promedio online" },
      { k: "98/100", v: "Lighthouse mobile" },
    ],
    stack: ["Shopify Hydrogen", "Algolia", "Contentful", "Node.js", "Fastly"],
  },
];

export function getCase(slug) {
  return cases.find((c) => c.slug === slug);
}
