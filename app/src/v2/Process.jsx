import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const phases = [
  { n: "01", t: "Descubrir",  d: "Workshops con stakeholders, entrevistas a usuarios y análisis competitivo." },
  { n: "02", t: "Diseñar",    d: "Arquitectura técnica, UX/UI, prototipado navegable y roadmap estimado." },
  { n: "03", t: "Construir",  d: "Sprints quincenales con demos, código propio del cliente desde el día uno." },
  { n: "04", t: "Lanzar",     d: "CI/CD, observabilidad, pruebas de carga y hand-off completo de operación." },
  { n: "05", t: "Escalar",    d: "Soporte continuo, iteración basada en datos y optimización de costos cloud." },
];

export default function Process() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.4"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="proceso" className="mx-auto max-w-7xl px-6 py-28 sm:py-36">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl text-center"
      >
        <span className="font-mono text-xs uppercase tracking-[0.24em] text-violet">— Cómo trabajamos</span>
        <h2 className="font-poppins mt-5 text-4xl font-bold text-navy-900 dark:text-white sm:text-5xl md:text-6xl">
          Un proceso probado en{" "}
          <span className="bg-[linear-gradient(90deg,#6C55E0,#0DD1C8,#6C55E0)] [background-size:200%_100%] bg-clip-text text-transparent animate-[gradient-x_6s_linear_infinite]">
            120+ proyectos
          </span>
        </h2>
      </motion.div>

      <div ref={ref} className="relative mt-20">
        {/* Línea base gris */}
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-navy-100 dark:bg-navy-800 md:block" />
        {/* Línea progresiva gradient (crece con scroll) */}
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-1/2 top-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-violet to-teal md:block"
        />

        <div className="space-y-16 md:space-y-28">
          {phases.map((p, i) => {
            const left = i % 2 === 0;
            return (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`grid md:grid-cols-2 md:gap-16 ${left ? "" : "md:[&>*:first-child]:order-2"}`}
              >
                <div className={left ? "md:text-right" : ""}>
                  <motion.span
                    initial={{ scale: 0.6, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, damping: 18, delay: 0.2 }}
                    className="font-poppins inline-block text-7xl font-bold bg-gradient-to-br from-violet to-teal bg-clip-text text-transparent md:text-8xl"
                  >
                    {p.n}
                  </motion.span>
                </div>
                <div className="relative mt-4 md:mt-0">
                  {/* Dot con pulse ring */}
                  <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.35 }}
                    className="absolute top-3 hidden size-4 -translate-y-1/2 md:block"
                    style={{ left: left ? "-34px" : "-38px" }}
                  >
                    <span className="absolute inset-0 rounded-full bg-gradient-to-br from-violet to-teal" />
                    <span className="absolute inset-0 rounded-full bg-violet animate-[pulse-ring_2.5s_cubic-bezier(0.215,0.61,0.355,1)_infinite]" />
                  </motion.span>
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
