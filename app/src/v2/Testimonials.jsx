import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    q: "Soltic se comporta como un CTO externo: entiende el negocio, escribe el código y te dice cuándo estás pidiendo algo que no deberías.",
    name: "Ana Restrepo",
    role: "VP Technology",
    company: "Fintech cliente",
  },
  {
    q: "Redujeron nuestro bill de AWS 42% en dos meses y el equipo aprendió el proceso en paralelo. Muy pocos consultores hacen eso.",
    name: "Carlos Medina",
    role: "CTO",
    company: "SaaS B2B",
  },
  {
    q: "El MVP salió en 10 semanas, pasó los tests de carga al primer intento y nos permitió cerrar la siguiente ronda con tracción real.",
    name: "María Gómez",
    role: "Founder & CEO",
    company: "Marketplace",
  },
];

const variants = {
  enter:   (d) => ({ opacity: 0, x: d > 0 ? 60 : -60, filter: "blur(6px)" }),
  center:  { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  exit:    (d) => ({ opacity: 0, x: d > 0 ? -60 : 60, filter: "blur(6px)", transition: { duration: 0.4 } }),
};

export default function Testimonials() {
  const [[i, dir], setIdx] = useState([0, 0]);
  const go = (d) => setIdx(([p]) => [(p + d + testimonials.length) % testimonials.length, d]);

  useEffect(() => {
    const id = setInterval(() => go(1), 7000);
    return () => clearInterval(id);
  }, [i]);

  const t = testimonials[i];

  return (
    <section className="relative overflow-hidden bg-brand-gradient">
      <motion.div
        aria-hidden
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px,white 1px,transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-6 py-28 text-center sm:py-36">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Quote size={48} className="mx-auto text-white/40" />
        </motion.div>

        <div className="relative mt-8 min-h-[200px] sm:min-h-[240px]">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={i}
              custom={dir}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-x-0"
            >
              <blockquote className="font-poppins text-2xl font-medium leading-relaxed text-white sm:text-3xl md:text-4xl">
                "{t.q}"
              </blockquote>
              <div className="mt-10">
                <p className="font-poppins text-lg font-semibold text-white">{t.name}</p>
                <p className="mt-1 text-sm text-white/80">{t.role} · {t.company}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-16 flex items-center justify-center gap-3">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => go(-1)}
            aria-label="Anterior"
            className="grid size-11 place-items-center rounded-full border border-white/30 bg-white/10 text-white transition hover:bg-white/20"
          >
            <ChevronLeft size={18} />
          </motion.button>
          <div className="flex gap-1.5">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setIdx([idx, idx > i ? 1 : -1])}
                aria-label={`testimonio ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-500 ${
                  i === idx ? "w-10 bg-white" : "w-2 bg-white/40"
                }`}
              />
            ))}
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => go(1)}
            aria-label="Siguiente"
            className="grid size-11 place-items-center rounded-full border border-white/30 bg-white/10 text-white transition hover:bg-white/20"
          >
            <ChevronRight size={18} />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
