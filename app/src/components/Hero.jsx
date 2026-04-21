import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-40 pb-24 sm:pt-48 sm:pb-32">
      <div className="absolute inset-0 -z-10 bg-mesh-hero" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* orbita decorativa */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[720px] w-[720px] -translate-x-1/2 rounded-full border border-gold/10"
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.1 }}
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full border border-gold/15"
      />

      <div className="container-x">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">
              <Sparkles size={12} className="text-gold" /> Soltic S.A.S. · 2026
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="display mt-6 text-5xl leading-[1.02] text-ink sm:text-6xl md:text-7xl lg:text-[88px]"
          >
            Tecnología con propósito.{" "}
            <span className="gold-text italic">Soluciones</span> que
            <br className="hidden sm:block" /> transforman su empresa.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-mute sm:text-xl"
          >
            Ingeniería de software, infraestructura en la nube y consultoría
            estratégica para organizaciones que no aceptan lo promedio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a href="#contacto" className="btn-primary">
              Conversemos de su proyecto <ArrowUpRight size={16} strokeWidth={2.5} />
            </a>
            <a href="#servicios" className="btn-ghost">
              Ver servicios
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16 flex items-center justify-center gap-6 text-xs uppercase tracking-[0.2em] text-mute"
          >
            <span className="inline-flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-emerald-400" />
              Aceptando nuevos proyectos
            </span>
            <span className="h-3 w-px bg-line" />
            <span>AWS · GCP · Azure</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
