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
  },
  {
    slug: "arquitectura-core-bancario",
    date: "2026-02-28",
    read: "12 min",
    tag: "Arquitectura",
    title: "Diseñando un core bancario event-driven desde cero",
    desc: "Decisiones de arquitectura, trade-offs y aprendizajes de migrar 3M+ transacciones diarias.",
  },
  {
    slug: "llm-procesos-internos",
    date: "2026-02-04",
    read: "9 min",
    tag: "IA",
    title: "5 procesos internos donde un LLM paga su operación en un mes",
    desc: "No es hype: casos reales de automatización con Claude y GPT-4 con ROI medido.",
  },
  {
    slug: "diseno-api-rest",
    date: "2026-01-20",
    read: "6 min",
    tag: "Backend",
    title: "APIs REST que envejecen bien: 12 reglas no negociables",
    desc: "Lecciones de 10 años diseñando APIs públicas que siguen vivas.",
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

      <section className="mx-auto max-w-5xl px-6 pb-28">
        <div className="divide-y divide-navy-100 dark:divide-navy-800">
          {posts.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group"
            >
              <Link
                to={`/blog/${p.slug}`}
                className="grid items-baseline gap-6 py-10 md:grid-cols-12"
              >
                <div className="md:col-span-3">
                  <p className="font-mono text-xs text-navy-500 dark:text-navy-200">{p.date}</p>
                  <span className="mt-2 inline-block rounded-full border border-navy-100 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-violet dark:border-navy-700">
                    {p.tag}
                  </span>
                </div>
                <div className="md:col-span-8">
                  <h2 className="font-poppins text-2xl font-bold leading-snug text-navy-900 transition group-hover:text-violet dark:text-white dark:group-hover:text-teal sm:text-3xl">
                    {p.title}
                  </h2>
                  <p className="mt-3 max-w-2xl text-navy-700 dark:text-navy-100">{p.desc}</p>
                  <p className="mt-3 font-mono text-xs text-navy-500 dark:text-navy-200">{p.read}</p>
                </div>
                <div className="flex justify-end md:col-span-1">
                  <ArrowUpRight size={22} strokeWidth={1.5} className="text-navy-400 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet" />
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
}
