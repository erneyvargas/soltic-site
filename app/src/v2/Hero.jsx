import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-28 sm:pt-28 sm:pb-36">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400"
        >
          <span className="size-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400" />
          <span className="font-mono">Soltic S.A.S. — est. 2026</span>
          <span className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
          <span className="font-mono">Bogotá · Colombia</span>
        </motion.div>

        <div className="grid gap-16 md:grid-cols-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-editorial col-span-12 text-[56px] leading-[0.95] tracking-tight text-zinc-950 dark:text-white sm:text-[84px] md:text-[108px] lg:text-[132px]"
          >
            Hacemos <em className="font-editorial italic text-emerald-700 dark:text-emerald-400">tecnología</em>
            <br />
            con <em className="font-editorial italic text-emerald-700 dark:text-emerald-400">criterio</em>.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="col-span-12 flex flex-col justify-between gap-10 border-t border-zinc-200 pt-10 dark:border-zinc-800 md:col-span-8 md:col-start-5"
          >
            <p className="max-w-xl text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
              Estudio de ingeniería de software, nube y datos. Trabajamos con
              pocas empresas al año, cada una con acceso directo a los
              fundadores. Sin intermediarios, sin filas, sin teatro.
            </p>

            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
              >
                Iniciar conversación
                <ArrowUpRight size={16} strokeWidth={2} />
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center gap-2 px-2 py-3.5 text-sm font-medium text-zinc-700 underline underline-offset-4 transition hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
              >
                Ver qué hacemos
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
