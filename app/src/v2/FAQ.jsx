import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "¿Trabajan por proyecto cerrado o por tiempo y materiales?",
    a: "Ambos. Proyectos con alcance claro van por precio cerrado con hitos. Iniciativas abiertas o squads dedicados trabajan por sprint a tarifa fija semanal.",
  },
  {
    q: "¿En qué tecnologías son más fuertes?",
    a: "Stacks modernos: React/Next en frontend; Node, Go y Python en backend; AWS como nube principal (también GCP y Azure); PostgreSQL y tooling de datos moderno (dbt, Snowflake, BigQuery).",
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
    a: "Sí. Cerca del 40% de nuestros clientes están en EE. UU., México y España. Trabajamos en zona horaria del cliente.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section
      id="preguntas"
      className="border-y border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950"
    >
      <div className="mx-auto max-w-7xl px-6 py-28 sm:py-36">
        <div className="mb-20 grid gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              — Preguntas frecuentes
            </span>
          </div>
          <h2 className="font-editorial col-span-12 text-4xl leading-[1.05] text-zinc-950 dark:text-white sm:text-5xl md:col-span-8 md:text-6xl">
            Lo que normalmente nos preguntan antes de firmar.
          </h2>
        </div>

        <div className="divide-y divide-zinc-200 border-y border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
          {faqs.map((f, i) => (
            <div key={f.q}>
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="font-editorial text-xl text-zinc-950 dark:text-white sm:text-2xl">
                  {f.q}
                </span>
                {open === i ? (
                  <Minus size={20} className="shrink-0 text-zinc-500" />
                ) : (
                  <Plus size={20} className="shrink-0 text-zinc-500" />
                )}
              </button>
              <div
                className={`grid overflow-hidden transition-all duration-300 ${
                  open === i ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
                }`}
              >
                <p className="min-h-0 max-w-3xl leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {f.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
