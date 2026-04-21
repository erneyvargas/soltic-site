import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const word = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show:   { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};
const parent = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-brand-radial dark:opacity-80" />

      {/* Blobs flotantes infinitos */}
      {!reduce && (
        <>
          <motion.div
            aria-hidden
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: [1, 1.08, 1],
              y: [0, -18, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-violet/20 blur-3xl"
          />
          <motion.div
            aria-hidden
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: [-60, 30, -60], y: [0, 30, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute top-24 -left-24 -z-10 h-[360px] w-[360px] rounded-full bg-teal/25 blur-3xl"
          />
          <motion.div
            aria-hidden
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: [60, -30, 60], y: [0, -30, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute top-40 -right-24 -z-10 h-[360px] w-[360px] rounded-full bg-violet/25 blur-3xl"
          />
        </>
      )}

      {/* Anillos rotando */}
      <motion.svg
        aria-hidden
        animate={reduce ? {} : { rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute top-10 left-1/2 -z-10 -translate-x-1/2 opacity-25 dark:opacity-35"
        style={{ width: 900, height: 900, transformOrigin: "center center" }}
        viewBox="0 0 900 900"
        fill="none"
      >
        {[180, 260, 340, 420].map((r, i) => (
          <circle key={r} cx="450" cy="450" r={r} stroke="url(#ring-g)" strokeDasharray={i % 2 ? "4 8" : "2 10"} strokeOpacity="0.7" />
        ))}
        <defs>
          <linearGradient id="ring-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#6C55E0" />
            <stop offset="1" stopColor="#0DD1C8" />
          </linearGradient>
        </defs>
      </motion.svg>

      {/* Partículas flotantes */}
      {!reduce && (
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          {[...Array(14)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute size-1.5 rounded-full bg-gradient-to-br from-violet to-teal"
              style={{
                left: `${(i * 7.3) % 100}%`,
                top:  `${(i * 11.7) % 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.9, 0.3],
              }}
              transition={{
                duration: 4 + (i % 5),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      )}

      <motion.div
        variants={parent}
        initial="hidden"
        animate="show"
        className="container mx-auto max-w-7xl px-6 pt-24 pb-28 text-center sm:pt-32 sm:pb-36"
      >
        <motion.span
          variants={word}
          className="inline-flex items-center gap-2 rounded-full border border-navy-100 bg-white/80 px-4 py-1.5 text-xs font-semibold text-navy-700 shadow-sm backdrop-blur dark:border-navy-700 dark:bg-navy-900/70 dark:text-navy-100"
        >
          <motion.span
            animate={reduce ? {} : { scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block size-1.5 rounded-full bg-teal"
          />
          Agencia de producto digital · Bogotá
        </motion.span>

        <motion.h1
          variants={parent}
          className="font-poppins mx-auto mt-8 max-w-5xl text-5xl font-bold leading-[1.05] tracking-tight text-navy-900 dark:text-white sm:text-6xl md:text-7xl lg:text-[88px]"
        >
          {["Producto", "digital", "que", "crece"].map((w, i) => (
            <motion.span key={i} variants={word} className="mr-[0.25em] inline-block">
              {w}
            </motion.span>
          ))}
          <motion.span variants={word} className="mr-[0.25em] inline-block">
            <span className="bg-[linear-gradient(90deg,#6C55E0,#8B5CF6,#0DD1C8,#6C55E0)] [background-size:200%_100%] bg-clip-text text-transparent animate-[gradient-x_6s_linear_infinite]">
              con tu empresa
            </span>
          </motion.span>
          <motion.span variants={word} className="inline-block">.</motion.span>
        </motion.h1>

        <motion.p
          variants={word}
          className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-navy-700 dark:text-navy-100 sm:text-xl"
        >
          Diseñamos, construimos y escalamos productos digitales para startups
          y empresas que quieren moverse rápido sin romper el criterio.
        </motion.p>

        <motion.div variants={word} className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <motion.a
            href="#contacto"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-navy-900 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-navy-900/20 transition dark:bg-white dark:text-navy-900"
          >
            <span className="absolute inset-0 -z-10 bg-gradient-to-r from-violet to-teal opacity-0 transition-opacity group-hover:opacity-100" />
            Iniciar proyecto
            <ArrowRight size={16} strokeWidth={2.5} className="transition group-hover:translate-x-1" />
          </motion.a>
          <motion.a
            href="#servicios"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-full border-2 border-navy-900/15 bg-white/60 px-7 py-4 text-sm font-semibold text-navy-900 backdrop-blur transition hover:border-violet hover:text-violet dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:border-teal dark:hover:text-teal"
          >
            Ver nuestro trabajo
          </motion.a>
        </motion.div>

        {/* Scroll cue */}
        {!reduce && (
          <motion.div
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-20 flex justify-center"
          >
            <div className="relative h-10 w-6 rounded-full border-2 border-navy-900/30 dark:border-white/30">
              <motion.span
                className="absolute left-1/2 top-2 -translate-x-1/2 size-1.5 rounded-full bg-navy-900 dark:bg-white"
                animate={{ y: [0, 14, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
