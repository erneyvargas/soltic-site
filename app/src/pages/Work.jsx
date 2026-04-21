import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import PageHero from "./_PageHero";

const cases = [
  {
    client: "Fintech · Banca digital",
    title: "Core bancario moderno en 18 meses",
    tags: ["Microservicios", "AWS", "Event-driven"],
    kpi: "3M+ transacciones/día",
    img: "/images/case-fintech.jpg",
  },
  {
    client: "Healthtech · Telemedicina",
    title: "Plataforma HIPAA-ready con 1M+ pacientes",
    tags: ["React Native", "GCP", "WebRTC"],
    kpi: "45% reducción tiempo de consulta",
    img: "/images/case-healthtech.jpg",
  },
  {
    client: "Marketplace · Logística",
    title: "MVP a Serie A en 10 semanas",
    tags: ["Next.js", "PostgreSQL", "Stripe"],
    kpi: "Cierre de Serie A: USD 8M",
    img: "/images/case-marketplace.jpg",
  },
  {
    client: "OTT · Streaming deportivo",
    title: "Plataforma de streaming en vivo para 500k usuarios concurrentes",
    tags: ["HLS", "CloudFront", "Kubernetes"],
    kpi: "99.99% uptime en finales",
    img: "/images/case-streaming.jpg",
  },
  {
    client: "EdTech · Educación corporativa",
    title: "LMS con IA generativa para evaluación",
    tags: ["Anthropic Claude", "RAG", "Python"],
    kpi: "80% reducción en tiempo de evaluación",
    img: "/images/case-edtech.jpg",
  },
  {
    client: "Retail · Omnicanal",
    title: "Headless commerce para cadena con 120 tiendas",
    tags: ["Shopify Hydrogen", "Algolia", "Contentful"],
    kpi: "+62% conversión móvil",
    img: "/images/case-retail.jpg",
  },
];

export default function Work() {
  return (
    <>
      <PageHero
        eyebrow="Nuestro trabajo"
        title="Casos que prefieren"
        highlight="hablar por nosotros"
        subtitle="Una selección de proyectos representativos. Algunos bajo NDA — te contamos los detalles en una llamada."
      />

      <section className="mx-auto max-w-7xl px-6 pb-28">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((c, i) => (
            <motion.a
              key={c.title}
              href="#contacto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-navy-100 bg-white p-7 transition-shadow hover:shadow-2xl hover:shadow-violet/10 dark:border-navy-800 dark:bg-navy-900/40"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 via-navy-900/10 to-transparent" />
              </div>
              <div className="mt-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-violet">{c.client}</p>
                <h3 className="font-poppins mt-2 text-xl font-bold leading-snug text-navy-900 dark:text-white">
                  {c.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {c.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-navy-100 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-navy-500 dark:border-navy-700 dark:text-navy-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <p className="font-poppins text-sm font-semibold text-navy-900 dark:text-white">
                    {c.kpi}
                  </p>
                  <ArrowUpRight size={20} strokeWidth={2} className="shrink-0 text-navy-400 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>
    </>
  );
}
