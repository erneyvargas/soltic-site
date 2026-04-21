import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "¿Trabajan por proyecto cerrado o por tiempo y materiales?",
    a: "Ambos. Proyectos con alcance claro van por precio cerrado con hitos. Iniciativas abiertas o squads dedicados trabajan por sprint a tarifa fija semanal.",
  },
  {
    q: "¿En qué tecnologías son más fuertes?",
    a: "React/Next en frontend, Node/Go/Python en backend, Flutter para mobile, AWS como nube principal (también GCP/Azure), PostgreSQL y el ecosistema moderno de datos (dbt, Snowflake, BigQuery).",
  },
  {
    q: "¿Pueden firmar NDA y trabajar bajo SOW corporativo?",
    a: "Sí. Operamos con clientes regulados en banca, salud y gobierno. Manejamos NDAs, DPA, SOWs y hoja de vida de cada consultor asignado.",
  },
  {
    q: "¿Cuánto tardan en arrancar?",
    a: "Una vez firmado el SOW, equipo asignado en 5-10 días hábiles. Para emergencias tenemos banquillo disponible en 48 horas.",
  },
  {
    q: "¿Atienden clientes fuera de Colombia?",
    a: "Sí. Cerca del 40% están en EE. UU., México y España. Trabajamos en zona horaria del cliente y facturamos en USD si aplica.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="preguntas" className="mx-auto max-w-4xl px-6 py-28 sm:py-36">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <span className="font-mono text-xs uppercase tracking-[0.24em] text-violet">— Preguntas frecuentes</span>
        <h2 className="font-poppins mt-5 text-4xl font-bold text-navy-900 dark:text-white sm:text-5xl">
          Todo lo que normalmente nos preguntan
        </h2>
      </motion.div>

      <div className="mt-14 space-y-3">
        {faqs.map((f, i) => (
          <motion.div
            key={f.q}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="overflow-hidden rounded-2xl border border-navy-100 bg-white transition-colors dark:border-navy-800 dark:bg-navy-900/40"
          >
            <button
              onClick={() => setOpen(open === i ? -1 : i)}
              className="flex w-full items-center justify-between gap-6 p-6 text-left"
            >
              <span className="font-poppins text-lg font-semibold text-navy-900 dark:text-white">
                {f.q}
              </span>
              <motion.span
                animate={{ rotate: open === i ? 45 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="grid size-8 shrink-0 place-items-center rounded-full bg-navy-50 text-navy-700 dark:bg-navy-800 dark:text-white"
              >
                <Plus size={16} />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 leading-relaxed text-navy-700 dark:text-navy-100">
                    {f.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
