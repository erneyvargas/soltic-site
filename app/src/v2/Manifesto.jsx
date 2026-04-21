import { motion } from "framer-motion";

const principles = [
  {
    t: "Código que envejece bien.",
    d: "Preferimos soluciones simples que aguanten 10 años a arquitecturas brillantes que colapsen en 2.",
  },
  {
    t: "Pocas decisiones, bien tomadas.",
    d: "Cada elección de stack, proceso o proveedor se argumenta por escrito. No importa el hype.",
  },
  {
    t: "El cliente es dueño.",
    d: "Entregamos repositorio, documentación y credenciales desde el día uno. Cero lock-in.",
  },
  {
    t: "Honestidad sobre fechas.",
    d: "Estimaciones con rango y supuestos explícitos. Mejor sorprender bien que fallar una promesa.",
  },
];

export default function Manifesto() {
  return (
    <section
      id="manifiesto"
      className="relative overflow-hidden border-y border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950"
    >
      <div className="mx-auto max-w-7xl px-6 py-28 sm:py-36">
        <div className="mb-20 grid gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              — Manifiesto
            </span>
          </div>
          <h2 className="font-editorial col-span-12 text-4xl leading-[1.05] text-zinc-950 dark:text-white sm:text-5xl md:col-span-8 md:text-6xl">
            No vendemos <em className="italic text-emerald-700 dark:text-emerald-400">horas</em>. Vendemos{" "}
            <em className="italic text-emerald-700 dark:text-emerald-400">criterio</em> y{" "}
            <em className="italic text-emerald-700 dark:text-emerald-400">resultados</em>.
          </h2>
        </div>

        <div className="grid gap-y-16 gap-x-12 md:grid-cols-2">
          {principles.map((p, i) => (
            <motion.div
              key={p.t}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <p className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
                0{i + 1}
              </p>
              <h3 className="font-editorial mt-3 text-2xl text-zinc-950 dark:text-white sm:text-3xl">
                {p.t}
              </h3>
              <p className="mt-3 max-w-md leading-relaxed text-zinc-600 dark:text-zinc-400">
                {p.d}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
