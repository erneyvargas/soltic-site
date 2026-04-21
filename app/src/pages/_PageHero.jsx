import { motion } from "framer-motion";

export default function PageHero({ eyebrow, title, highlight, subtitle }) {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-brand-radial dark:opacity-80" />
      <motion.div
        aria-hidden
        animate={{ scale: [1, 1.08, 1], y: [0, -14, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-violet/15 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={{ x: [-40, 40, -40], y: [0, 30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-20 -right-24 -z-10 h-[300px] w-[300px] rounded-full bg-teal/20 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-6 pt-36 pb-20 text-center sm:pt-44 sm:pb-28">
        {eyebrow && (
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-xs uppercase tracking-[0.24em] text-violet"
          >
            — {eyebrow}
          </motion.span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-poppins mx-auto mt-6 max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-navy-900 dark:text-white sm:text-6xl md:text-7xl"
        >
          {title}{" "}
          {highlight && (
            <span className="bg-[linear-gradient(90deg,#6C55E0,#8B5CF6,#0DD1C8,#6C55E0)] [background-size:200%_100%] bg-clip-text text-transparent animate-[gradient-x_6s_linear_infinite]">
              {highlight}
            </span>
          )}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-navy-700 dark:text-navy-100"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
