import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar, Users, Clock } from "lucide-react";
import SEO from "../components/SEO";
import { getCase, cases } from "../data/cases";

export default function CaseStudy() {
  const { slug } = useParams();
  const c = getCase(slug);
  if (!c) return <Navigate to="/trabajo" replace />;

  const idx = cases.findIndex((x) => x.slug === slug);
  const next = cases[(idx + 1) % cases.length];

  return (
    <>
      <SEO
        title={c.title}
        description={`${c.client}. ${c.kpi}. Caso de estudio de Soltic S.A.S.`}
        path={`/trabajo/${c.slug}`}
        image={`https://d11b2hq3pithnt.cloudfront.net${c.image}`}
      />

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-brand-radial" />
        <div className="mx-auto max-w-6xl px-6 pt-36 pb-16 sm:pt-44">
          <Link
            to="/trabajo"
            className="inline-flex items-center gap-1.5 text-sm text-navy-500 hover:text-violet dark:text-navy-200"
          >
            <ArrowLeft size={14} /> Volver a casos
          </Link>
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 font-mono text-xs uppercase tracking-[0.24em] text-violet"
          >
            {c.client}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-poppins mt-4 text-4xl font-bold leading-[1.05] text-navy-900 dark:text-white sm:text-5xl md:text-6xl"
          >
            {c.title}
          </motion.h1>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-navy-700 dark:text-navy-100">
            {c.year && <Meta icon={<Calendar size={14} />} k="Periodo" v={c.year} />}
            {c.duration && <Meta icon={<Clock size={14} />} k="Duración" v={c.duration} />}
            {c.team && <Meta icon={<Users size={14} />} k="Equipo" v={c.team} />}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-6xl px-6"
        >
          <img
            src={c.image}
            alt={c.title}
            className="aspect-[16/8] w-full rounded-3xl object-cover shadow-2xl shadow-navy-900/20"
          />
        </motion.div>
      </section>

      {/* KPIs */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-navy-100 bg-navy-100 dark:border-navy-800 dark:bg-navy-800 md:grid-cols-4">
          {c.results.map((r, i) => (
            <motion.div
              key={r.v}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col justify-between gap-4 bg-white p-6 dark:bg-navy-950"
            >
              <span className="font-poppins bg-gradient-to-br from-violet to-teal bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
                {r.k}
              </span>
              <span className="text-xs text-navy-500 dark:text-navy-200">{r.v}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Challenge + Solution */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        <Block title="El reto" body={c.challenge} />
        <div className="mt-14">
          <Block title="La solución" body={c.solution} />
        </div>

        {/* Stack */}
        <div className="mt-14">
          <h2 className="font-mono text-xs uppercase tracking-[0.24em] text-violet">— Stack</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {c.stack.map((t) => (
              <span
                key={t}
                className="rounded-full border border-navy-100 bg-white px-3 py-1 text-sm text-navy-700 dark:border-navy-700 dark:bg-navy-900/40 dark:text-navy-100"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {c.testimonial && (
        <section className="relative overflow-hidden bg-brand-gradient">
          <div className="relative mx-auto max-w-4xl px-6 py-20 text-center text-white">
            <blockquote className="font-poppins text-2xl font-medium leading-snug sm:text-3xl">
              "{c.testimonial.q}"
            </blockquote>
            <div className="mt-8 flex items-center justify-center gap-4">
              <img
                src={c.testimonial.avatar}
                alt={c.testimonial.name}
                className="size-12 rounded-full border-2 border-white/30 object-cover"
              />
              <div className="text-left">
                <p className="font-semibold">{c.testimonial.name}</p>
                <p className="text-sm text-white/80">{c.testimonial.role}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Next case + CTA */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-navy-100 bg-white p-8 dark:border-navy-800 dark:bg-navy-900/40 sm:flex-row sm:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-navy-500 dark:text-navy-200">Siguiente caso</p>
            <p className="font-poppins mt-2 text-xl font-bold text-navy-900 dark:text-white">{next.title}</p>
          </div>
          <Link
            to={`/trabajo/${next.slug}`}
            className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-5 py-3 text-sm font-semibold text-white hover:bg-violet dark:bg-white dark:text-navy-900 dark:hover:bg-teal dark:hover:text-navy-900"
          >
            Ver caso <ArrowRight size={14} />
          </Link>
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 font-poppins text-lg font-semibold text-violet hover:underline"
          >
            ¿Un reto similar? Hablemos <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}

function Meta({ icon, k, v }) {
  return (
    <div className="flex items-center gap-2">
      <span className="grid size-7 place-items-center rounded-lg bg-navy-50 text-navy-700 dark:bg-navy-800 dark:text-navy-100">
        {icon}
      </span>
      <span className="font-mono text-[10px] uppercase tracking-wider text-navy-500 dark:text-navy-200">{k}:</span>
      <span className="font-medium">{v}</span>
    </div>
  );
}

function Block({ title, body }) {
  return (
    <>
      <h2 className="font-mono text-xs uppercase tracking-[0.24em] text-violet">— {title}</h2>
      <p className="font-poppins mt-4 text-lg leading-relaxed text-navy-700 dark:text-navy-100 sm:text-xl">
        {body}
      </p>
    </>
  );
}
