import { motion } from "framer-motion";
import { Rocket, Search, Users, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Rocket,
    tag: "Full Product Development",
    title: "Construimos tu producto de cero a producción",
    desc: "Equipo end-to-end de producto, diseño e ingeniería. Entregamos un MVP en 8-12 semanas y acompañamos la evolución con releases semanales.",
    bullets: ["Discovery + UX", "Ingeniería full-stack", "DevOps y cloud", "Analítica de producto"],
  },
  {
    icon: Search,
    tag: "Product Discovery",
    title: "Valida antes de construir",
    desc: "Sprints de 2-4 semanas para aterrizar visión, investigar usuarios, priorizar hipótesis y entregar un prototipo funcional.",
    bullets: ["Entrevistas de usuario", "Mapas de oportunidad", "Prototipo navegable", "Plan de MVP"],
  },
  {
    icon: Users,
    tag: "Staff Augmentation",
    title: "Squads senior a la medida",
    desc: "Inyectamos talento senior dentro de tu equipo. Perfiles cuidadosamente seleccionados disponibles en 10 días.",
    bullets: ["Frontend · Backend", "Mobile (Flutter/RN)", "Data & ML", "DevOps/SRE"],
  },
];

const container = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};
const card = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  show:   { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Services() {
  return (
    <section id="servicios" className="mx-auto max-w-7xl px-6 py-28 sm:py-36">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl text-center"
      >
        <span className="font-mono text-xs uppercase tracking-[0.24em] text-violet">— Lo que hacemos</span>
        <h2 className="font-poppins mt-5 text-4xl font-bold leading-[1.1] text-navy-900 dark:text-white sm:text-5xl md:text-6xl">
          Servicios diseñados para{" "}
          <span className="bg-[linear-gradient(90deg,#6C55E0,#0DD1C8,#6C55E0)] [background-size:200%_100%] bg-clip-text text-transparent animate-[gradient-x_6s_linear_infinite]">
            escalar
          </span>{" "}
          con tu negocio
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-navy-700 dark:text-navy-100">
          Desde la primera idea hasta la operación en producción con miles de
          usuarios — elige el modelo que mejor se ajusta a tu etapa.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3"
      >
        {services.map((s) => {
          const Icon = s.icon;
          return (
            <motion.article
              key={s.title}
              variants={card}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-navy-100 bg-white p-8 transition-shadow hover:shadow-2xl hover:shadow-violet/20 dark:border-navy-800 dark:bg-navy-900/40"
            >
              {/* Shimmer border effect on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 [background:linear-gradient(135deg,rgba(108,85,224,0.35),rgba(13,209,200,0.35))_border-box] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] [padding:1px]" />
              <div className="pointer-events-none absolute -inset-x-8 -top-8 h-40 bg-gradient-to-b from-violet/20 to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

              <motion.div
                whileHover={{ rotate: -8, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative inline-flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet to-teal text-white shadow-md"
              >
                <Icon size={22} strokeWidth={2} />
                <span className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-violet/30 opacity-0 animate-[pulse-ring_2.5s_cubic-bezier(0.215,0.61,0.355,1)_infinite] group-hover:opacity-100" />
              </motion.div>

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
                {s.bullets.map((b, idx) => (
                  <motion.li
                    key={b}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + idx * 0.05 }}
                    className="flex items-center gap-2 text-navy-700 dark:text-navy-100"
                  >
                    <span className="size-1.5 rounded-full bg-gradient-to-br from-violet to-teal" />
                    {b}
                  </motion.li>
                ))}
              </ul>

              <a
                href="#contacto"
                className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 transition group-hover:text-violet dark:text-white dark:group-hover:text-teal"
              >
                Conocer más
                <ArrowRight size={14} strokeWidth={2.5} className="transition duration-300 group-hover:translate-x-2" />
              </a>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}
