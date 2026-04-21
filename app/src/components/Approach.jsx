import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Entender",
    desc:
      "Workshops con stakeholders para traducir objetivos de negocio en requisitos técnicos medibles.",
  },
  {
    n: "02",
    title: "Diseñar",
    desc:
      "Arquitectura, estimaciones y roadmap con entregables por sprint. Sin sorpresas.",
  },
  {
    n: "03",
    title: "Construir",
    desc:
      "Equipos senior, entregas continuas y código propio del cliente desde el día uno.",
  },
  {
    n: "04",
    title: "Operar",
    desc:
      "Soporte post-go-live, SLA y evolución del producto con métricas de impacto real.",
  },
];

export default function Approach() {
  return (
    <section id="enfoque" className="relative py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-line to-transparent" />
      <div className="container-x">
        <div className="mb-14 max-w-3xl">
          <span className="eyebrow">
            <span className="size-1.5 rounded-full bg-gold" /> Nuestro enfoque
          </span>
          <h2 className="display mt-5 text-4xl text-ink sm:text-5xl md:text-6xl">
            Un método probado que{" "}
            <span className="gold-text italic">reduce riesgos</span> y acelera
            resultados.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line/60 bg-line/40 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative bg-bg p-8 transition hover:bg-surface"
            >
              <div className="flex items-baseline justify-between">
                <span className="display text-5xl text-gold">{s.n}</span>
                <span className="size-2 rounded-full bg-line transition group-hover:bg-gold" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mute">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
