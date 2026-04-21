import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SEO from "../components/SEO";
import PageHero from "./_PageHero";
import { cases } from "../data/cases";

export default function Work() {
  return (
    <>
      <SEO
        title="Nuestro trabajo"
        description="Casos seleccionados en fintech, healthtech, OTT, retail y educación. Resultados medibles: uptimes 99.99%, reducciones de costos, cierres de ronda."
        path="/trabajo"
      />
      <PageHero
        eyebrow="Nuestro trabajo"
        title="Casos que prefieren"
        highlight="hablar por nosotros"
        subtitle="Una selección de proyectos representativos. Algunos bajo NDA — te contamos los detalles en una llamada."
      />

      <section className="mx-auto max-w-7xl px-6 pb-28">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((c, i) => (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
            >
              <Link
                to={`/trabajo/${c.slug}`}
                className="group relative block overflow-hidden rounded-3xl border border-navy-100 bg-white p-7 transition-shadow hover:shadow-2xl hover:shadow-violet/10 dark:border-navy-800 dark:bg-navy-900/40"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <img
                    src={c.image}
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
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
