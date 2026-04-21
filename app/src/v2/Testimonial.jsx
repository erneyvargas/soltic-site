import { motion } from "framer-motion";

export default function Testimonial() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28 sm:py-36">
      <motion.figure
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid gap-8 md:grid-cols-12"
      >
        <div className="md:col-span-2">
          <span className="font-editorial text-8xl italic leading-none text-emerald-700 dark:text-emerald-400">
            "
          </span>
        </div>
        <blockquote className="font-editorial text-3xl leading-snug text-zinc-950 dark:text-white sm:text-4xl md:col-span-8 md:text-5xl">
          Soltic se comporta como un CTO externo: entiende el negocio, escribe
          el código, y te dice cuándo estás pidiendo algo que no deberías.
        </blockquote>
        <figcaption className="flex items-start gap-4 md:col-span-12 md:col-start-3">
          <div className="size-10 shrink-0 rounded-full bg-zinc-200 dark:bg-zinc-800" />
          <div>
            <p className="font-medium text-zinc-950 dark:text-white">
              Ana Restrepo
            </p>
            <p className="font-mono text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              VP Tech · Empresa Cliente
            </p>
          </div>
        </figcaption>
      </motion.figure>
    </section>
  );
}
