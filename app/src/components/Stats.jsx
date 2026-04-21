import { motion } from "framer-motion";

const stats = [
  { k: "+120", v: "Proyectos entregados" },
  { k: "99.9%", v: "Uptime promedio" },
  { k: "+15", v: "Industrias atendidas" },
  { k: "40%", v: "Reducción de costos cloud" },
];

export default function Stats() {
  return (
    <section id="resultados" className="relative py-28">
      <div className="container-x">
        <div className="rounded-3xl border border-line/60 bg-surface/60 p-8 backdrop-blur sm:p-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.v}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-center md:text-left"
              >
                <div className="display gold-text text-5xl sm:text-6xl">{s.k}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.2em] text-mute">
                  {s.v}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
