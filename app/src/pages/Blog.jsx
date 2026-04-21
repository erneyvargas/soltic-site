import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import PageHero from "./_PageHero";

const posts = [
  {
    slug: "reducir-costos-aws",
    date: "2026-03-12",
    read: "7 min",
    tag: "Cloud",
    title: "Cómo redujimos un bill de AWS 42% en dos meses (sin romper nada)",
    desc: "Guía práctica paso a paso para auditar, optimizar y automatizar gasto cloud en cargas productivas.",
    cover: "/images/blog-aws-costs.jpg",
  },
  {
    slug: "arquitectura-core-bancario",
    date: "2026-02-28",
    read: "12 min",
    tag: "Arquitectura",
    title: "Diseñando un core bancario event-driven desde cero",
    desc: "Decisiones de arquitectura, trade-offs y aprendizajes de migrar 3M+ transacciones diarias.",
    cover: "/images/blog-arquitectura.jpg",
  },
  {
    slug: "llm-procesos-internos",
    date: "2026-02-04",
    read: "9 min",
    tag: "IA",
    title: "5 procesos internos donde un LLM paga su operación en un mes",
    desc: "No es hype: casos reales de automatización con Claude y GPT-4 con ROI medido.",
    cover: "/images/blog-llm.jpg",
  },
  {
    slug: "diseno-api-rest",
    date: "2026-01-20",
    read: "6 min",
    tag: "Backend",
    title: "APIs REST que envejecen bien: 12 reglas no negociables",
    desc: "Lecciones de 10 años diseñando APIs públicas que siguen vivas.",
    cover: "/images/blog-api.jpg",
  },
];

export default function Blog() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Notas técnicas de"
        highlight="nuestro equipo"
        subtitle="Lecciones aprendidas, patrones que funcionan, experimentos que no. Sin marketing hablando."
      />

      <section className="mx-auto max-w-6xl px-6 pb-28">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {posts.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <Link to={`/blog/${p.slug}`} className="block">
                <div className="relative aspect-[16/10] overflow-hidden rounded-3xl">
                  <img
                    src={p.cover}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-violet backdrop-blur">
                    {p.tag}
                  </span>
                </div>
                <div className="mt-5">
                  <p className="font-mono text-xs text-navy-500 dark:text-navy-200">
                    {p.date} · {p.read}
                  </p>
                  <h2 className="font-poppins mt-2 text-2xl font-bold leading-snug text-navy-900 transition group-hover:text-violet dark:text-white dark:group-hover:text-teal">
                    {p.title}
                  </h2>
                  <p className="mt-3 text-navy-700 dark:text-navy-100">{p.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 transition group-hover:text-violet dark:text-white dark:group-hover:text-teal">
                    Leer artículo <ArrowUpRight size={14} strokeWidth={2.5} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
}
