import { motion } from "framer-motion";
import {
  Code2,
  Cloud,
  Sparkles,
  ShieldCheck,
  Database,
  Cpu,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Desarrollo de software",
    desc:
      "Aplicaciones web y móviles hechas a medida, con arquitecturas modernas, escalables y fáciles de mantener.",
    tags: ["React", "Node", "Go", "Python"],
    large: true,
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    desc:
      "Infraestructura como código en AWS, GCP y Azure. CI/CD, observabilidad y reducción de costos.",
    tags: ["Terraform", "Kubernetes"],
  },
  {
    icon: Sparkles,
    title: "Inteligencia artificial",
    desc:
      "Integración de modelos LLM, automatizaciones y agentes para procesos de negocio.",
    tags: ["OpenAI", "Anthropic"],
  },
  {
    icon: ShieldCheck,
    title: "Ciberseguridad",
    desc:
      "Auditorías, hardening y cumplimiento. Protegemos lo que su empresa no puede perder.",
    tags: ["ISO 27001", "OWASP"],
  },
  {
    icon: Database,
    title: "Datos & analítica",
    desc:
      "Ingeniería de datos, dashboards en tiempo real y modelos predictivos para decisiones basadas en evidencia.",
  },
  {
    icon: Cpu,
    title: "Transformación digital",
    desc:
      "Roadmaps, rediseño de procesos y acompañamiento C-level para modernizar su operación.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="relative py-28">
      <div className="container-x">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="eyebrow">
              <span className="size-1.5 rounded-full bg-gold" /> Qué hacemos
            </span>
            <h2 className="display mt-5 max-w-2xl text-4xl text-ink sm:text-5xl md:text-6xl">
              Un socio tecnológico <span className="gold-text italic">integral</span>
            </h2>
          </div>
          <p className="max-w-md text-mute">
            Seis líneas de servicio que combinamos para atender desde startups
            hasta grandes compañías con operaciones críticas.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-[auto_auto]">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`card group relative overflow-hidden ${s.large ? "md:col-span-2 md:row-span-1" : ""}`}
              >
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="relative">
                  <div className="inline-flex size-11 items-center justify-center rounded-xl border border-line/80 bg-surface2">
                    <Icon size={20} className="text-gold" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mute">{s.desc}</p>

                  {s.tags && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {s.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-line/60 bg-surface2 px-2.5 py-1 text-xs text-mute"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-6 inline-flex items-center gap-1.5 text-sm text-gold opacity-0 transition group-hover:opacity-100">
                    Saber más <ArrowUpRight size={14} />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
