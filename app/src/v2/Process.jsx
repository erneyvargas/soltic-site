import { motion } from "framer-motion";

const phases = [
  { n: "01", t: "Descubrir",  d: "Workshops con stakeholders, entrevistas a usuarios y análisis competitivo." },
  { n: "02", t: "Diseñar",    d: "Arquitectura técnica, UX/UI, prototipado navegable y roadmap estimado." },
  { n: "03", t: "Construir",  d: "Sprints quincenales con demos, código propio del cliente desde el día uno." },
  { n: "04", t: "Lanzar",     d: "CI/CD, observabilidad, pruebas de carga y hand-off completo de operación." },
  { n: "05", t: "Escalar",    d: "Soporte continuo, iteración basada en datos y optimización de costos cloud." },
];

export default function Process() {
  return (
    <section id="proceso" className="mx-auto max-w-7xl px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-3xl text-center">
        <span className="font-mono text-xs uppercase tracking-[0.24em] text-violet">
          — Cómo trabajamos
        </span>
        <h2 className="font-poppins mt-5 text-4xl font-bold text-navy-900 dark:text-white sm:text-5xl md:text-6xl">
          Un proceso probado en{" "}
          <span className="bg-gradient-to-r from-violet to-teal bg-clip-text text-transparent">
            120+ proyectos
          </span>
        </h2>
      </div>

      <div className="relative mt-20">
        {/* línea vertical/horizontal */}
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-violet/40 via-teal/40 to-transparent md:block" />

        <div className="space-y-12 md:space-y-24">
          {phases.map((p, i) => {
            const left = i % 2 === 0;
            return (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className={`grid md:grid-cols-2 md:gap-16 ${left ? "" : "md:[&>*:first-child]:order-2"}`}
              >
                <div className={left ? "md:text-right" : ""}>
                  <span className="font-poppins text-7xl font-bold bg-gradient-to-br from-violet to-teal bg-clip-text text-transparent md:text-8xl">
                    {p.n}
                  </span>
                </div>
                <div className="relative mt-4 md:mt-0">
                  <span className="absolute -left-1.5 top-3 hidden size-3 rounded-full bg-gradient-to-br from-violet to-teal md:block" style={{ left: left ? "-32px" : "-38px" }} />
                  <h3 className="font-poppins text-3xl font-bold text-navy-900 dark:text-white">
                    {p.t}
                  </h3>
                  <p className="mt-3 max-w-md text-navy-700 dark:text-navy-100">
                    {p.d}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
