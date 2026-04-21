import { motion } from "framer-motion";
import { Rocket, Search, Users, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Rocket,
    tag: "Full Product Development",
    title: "Construimos tu producto de cero a producción",
    desc: "Equipo end-to-end de producto, diseño e ingeniería. Entregamos un MVP en 8-12 semanas y acompañamos la evolución con releases semanales.",
    bullets: ["Discovery + UX", "Ingeniería full-stack", "DevOps y cloud", "Analítica de producto"],
    gradient: "from-violet/20 via-violet/5 to-transparent",
  },
  {
    icon: Search,
    tag: "Product Discovery",
    title: "Valida antes de construir",
    desc: "Sprints de 2-4 semanas para aterrizar visión, investigar usuarios, priorizar hipótesis y entregar un prototipo funcional.",
    bullets: ["Entrevistas de usuario", "Mapas de oportunidad", "Prototipo navegable", "Plan de MVP"],
    gradient: "from-teal/20 via-teal/5 to-transparent",
  },
  {
    icon: Users,
    tag: "Staff Augmentation",
    title: "Squads senior a la medida",
    desc: "Inyectamos talento senior dentro de tu equipo. Perfiles cuidadosamente seleccionados disponibles en 10 días.",
    bullets: ["Frontend · Backend", "Mobile (Flutter/React Native)", "Data & ML", "DevOps/SRE"],
    gradient: "from-navy-300/30 via-navy-100/10 to-transparent",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="mx-auto max-w-7xl px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-3xl text-center">
        <span className="font-mono text-xs uppercase tracking-[0.24em] text-violet">
          — Lo que hacemos
        </span>
        <h2 className="font-poppins mt-5 text-4xl font-bold leading-[1.1] text-navy-900 dark:text-white sm:text-5xl md:text-6xl">
          Servicios diseñados para{" "}
          <span className="bg-gradient-to-r from-violet to-teal bg-clip-text text-transparent">
            escalar
          </span>{" "}
          con tu negocio
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-navy-700 dark:text-navy-100">
          Desde la primera idea hasta la operación en producción con miles de
          usuarios — elige el modelo que mejor se ajusta a tu etapa.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative flex flex-col overflow-hidden rounded-3xl border border-navy-100 bg-white p-8 transition hover:-translate-y-1 hover:border-violet/40 hover:shadow-xl hover:shadow-violet/10 dark:border-navy-800 dark:bg-navy-900/40`}
            >
              <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${s.gradient} opacity-0 transition group-hover:opacity-100`} />

              <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet to-teal text-white shadow-md">
                <Icon size={22} strokeWidth={2} />
              </div>

              <span className="mt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-violet">
                {s.tag}
              </span>
              <h3 className="font-poppins mt-3 text-2xl font-bold leading-tight text-navy-900 dark:text-white">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-navy-700 dark:text-navy-100">
                {s.desc}
              </p>

              <ul className="mt-6 space-y-2 text-sm">
                {s.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-2 text-navy-700 dark:text-navy-100"
                  >
                    <span className="size-1.5 rounded-full bg-gradient-to-br from-violet to-teal" />
                    {b}
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 transition group-hover:text-violet dark:text-white dark:group-hover:text-teal"
              >
                Conocer más
                <ArrowRight size={14} strokeWidth={2.5} className="transition group-hover:translate-x-1" />
              </a>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
