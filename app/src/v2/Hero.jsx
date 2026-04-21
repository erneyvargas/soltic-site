import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      {/* Decorative shapes estilo Somnio */}
      <div className="absolute inset-0 -z-10 bg-brand-radial dark:opacity-80" />

      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-violet/10 blur-3xl"
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.4, delay: 0.2 }}
        className="pointer-events-none absolute top-24 -left-24 -z-10 h-[360px] w-[360px] rounded-full bg-teal/20 blur-3xl"
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.4, delay: 0.3 }}
        className="pointer-events-none absolute top-40 -right-24 -z-10 h-[360px] w-[360px] rounded-full bg-violet/20 blur-3xl"
      />

      {/* rings SVG decorativos */}
      <svg
        aria-hidden
        className="pointer-events-none absolute top-10 left-1/2 -z-10 -translate-x-1/2 opacity-20 dark:opacity-30"
        width="900"
        height="900"
        viewBox="0 0 900 900"
        fill="none"
      >
        {[180, 260, 340, 420].map((r, i) => (
          <circle
            key={r}
            cx="450"
            cy="450"
            r={r}
            stroke="url(#ring-g)"
            strokeDasharray={i % 2 ? "4 8" : "2 10"}
            strokeOpacity="0.6"
          />
        ))}
        <defs>
          <linearGradient id="ring-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#6C55E0" />
            <stop offset="1" stopColor="#0DD1C8" />
          </linearGradient>
        </defs>
      </svg>

      <div className="container mx-auto max-w-7xl px-6 pt-24 pb-28 text-center sm:pt-32 sm:pb-36">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-navy-100 bg-white/80 px-4 py-1.5 text-xs font-semibold text-navy-700 shadow-sm backdrop-blur dark:border-navy-700 dark:bg-navy-900/70 dark:text-navy-100"
        >
          <span className="inline-block size-1.5 rounded-full bg-teal" />
          Agencia de producto digital · Bogotá
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-poppins mx-auto mt-8 max-w-5xl text-5xl font-bold leading-[1.05] tracking-tight text-navy-900 dark:text-white sm:text-6xl md:text-7xl lg:text-[88px]"
        >
          Producto digital que crece{" "}
          <span className="bg-gradient-to-r from-violet via-violet-soft to-teal bg-clip-text text-transparent">
            con tu empresa
          </span>
          .
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-navy-700 dark:text-navy-100 sm:text-xl"
        >
          Diseñamos, construimos y escalamos productos digitales para startups
          y empresas que quieren moverse rápido sin romper el criterio.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-navy-900/20 transition hover:bg-violet hover:shadow-violet/30 dark:bg-white dark:text-navy-900 dark:hover:bg-teal dark:hover:text-navy-900"
          >
            Iniciar proyecto <ArrowRight size={16} strokeWidth={2.5} />
          </a>
          <a
            href="#servicios"
            className="inline-flex items-center gap-2 rounded-full border-2 border-navy-900/15 bg-white/60 px-7 py-4 text-sm font-semibold text-navy-900 backdrop-blur transition hover:border-violet hover:text-violet dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:border-teal dark:hover:text-teal"
          >
            Ver nuestro trabajo
          </a>
        </motion.div>
      </div>
    </section>
  );
}
