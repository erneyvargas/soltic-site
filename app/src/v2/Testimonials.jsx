import { useState } from "react";
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

export default function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  const next = () => setI((i + 1) % testimonials.length);
  const prev = () => setI((i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative overflow-hidden bg-brand-gradient">
      {/* pattern decorativo */}
      <div className="absolute inset-0 opacity-10 [background:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" />

      <div className="relative mx-auto max-w-5xl px-6 py-28 text-center sm:py-36">
        <Quote size={48} className="mx-auto text-white/40" />
        <blockquote
          key={i}
          className="font-poppins mt-8 text-2xl font-medium leading-relaxed text-white sm:text-3xl md:text-4xl"
        >
          "{t.q}"
        </blockquote>
        <div className="mt-10">
          <p className="font-poppins text-lg font-semibold text-white">{t.name}</p>
          <p className="mt-1 text-sm text-white/80">
            {t.role} · {t.company}
          </p>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          <button
            onClick={prev}
            aria-label="Anterior"
            className="grid size-11 place-items-center rounded-full border border-white/30 bg-white/10 text-white transition hover:bg-white/20"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-1.5">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`testimonio ${idx + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === idx ? "w-8 bg-white" : "w-2 bg-white/40"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Siguiente"
            className="grid size-11 place-items-center rounded-full border border-white/30 bg-white/10 text-white transition hover:bg-white/20"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
