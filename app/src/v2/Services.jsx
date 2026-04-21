import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    n: "01",
    title: "Ingeniería de software",
    desc: "Aplicaciones web, móviles y APIs. Arquitecturas limpias, pruebas automatizadas, equipos senior.",
    tags: ["React", "Node", "Go", "Python", "Flutter"],
  },
  {
    n: "02",
    title: "Nube & plataforma",
    desc: "AWS, GCP, Azure. Infra como código, CI/CD, observabilidad, reducción de costos hasta 40%.",
    tags: ["Terraform", "Kubernetes", "CloudWatch"],
  },
  {
    n: "03",
    title: "Inteligencia artificial",
    desc: "Integración de LLMs, agentes y automatización de procesos para operación y atención.",
    tags: ["Anthropic", "OpenAI", "Vector DBs"],
  },
  {
    n: "04",
    title: "Datos & analítica",
    desc: "Pipelines, modelado dimensional, dashboards y predicciones accionables para la operación.",
    tags: ["BigQuery", "dbt", "Metabase"],
  },
  {
    n: "05",
    title: "Seguridad",
    desc: "Auditoría, hardening, OWASP, ISO 27001. Protegemos lo que la empresa no puede perder.",
    tags: ["Pentesting", "Compliance"],
  },
  {
    n: "06",
    title: "Consultoría digital",
    desc: "Roadmaps, arquitecturas objetivo y acompañamiento C-level con métricas de impacto.",
    tags: ["Estrategia", "Discovery"],
  },
];

export default function Services() {
  return (
    <section id="servicios" className="mx-auto max-w-7xl px-6 py-28 sm:py-36">
      <div className="mb-20 grid gap-8 md:grid-cols-12">
        <div className="md:col-span-4">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            — Servicios
          </span>
        </div>
        <h2 className="font-editorial col-span-12 text-4xl leading-[1.05] text-zinc-950 dark:text-white sm:text-5xl md:col-span-8 md:text-6xl">
          Seis disciplinas que combinamos a la medida del problema, no del
          catálogo.
        </h2>
      </div>

      <ul className="border-t border-zinc-200 dark:border-zinc-800">
        {services.map((s, i) => (
          <motion.li
            key={s.n}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="group border-b border-zinc-200 dark:border-zinc-800"
          >
            <a
              href="#contacto"
              className="grid items-baseline gap-6 py-10 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900/50 md:grid-cols-12"
            >
              <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400 md:col-span-1">
                ({s.n})
              </span>
              <h3 className="font-editorial text-3xl text-zinc-950 transition group-hover:italic dark:text-white md:col-span-4 md:text-4xl">
                {s.title}
              </h3>
              <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400 md:col-span-5">
                {s.desc}
              </p>
              <div className="flex items-center justify-between gap-4 md:col-span-2 md:justify-end">
                <div className="flex flex-wrap justify-end gap-1.5">
                  {s.tags.slice(0, 2).map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-zinc-200 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-zinc-500 dark:border-zinc-700 dark:text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <ArrowUpRight
                  size={22}
                  strokeWidth={1.5}
                  className="shrink-0 text-zinc-400 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-zinc-950 dark:text-zinc-500 dark:group-hover:text-white"
                />
              </div>
            </a>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
