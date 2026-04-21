import { motion } from "framer-motion";
import { HeartPulse, Banknote, Film, Plane, ShoppingBag, GraduationCap } from "lucide-react";

const industries = [
  { icon: HeartPulse, t: "Salud digital",  d: "Plataformas HIPAA-ready, telemedicina, EHR y device integration." },
  { icon: Banknote,   t: "Fintech",         d: "Onboarding KYC/AML, open banking, pagos y core banking moderno." },
  { icon: Film,       t: "Media & OTT",     d: "Plataformas de streaming, paywalls, analítica de contenido." },
  { icon: Plane,      t: "Viajes & Hospitality", d: "Motores de reserva, revenue management, experiencias omnicanal." },
  { icon: ShoppingBag,t: "Retail & E-commerce",  d: "Storefronts headless, logística, personalización con IA." },
  { icon: GraduationCap, t: "Educación",    d: "LMS modernos, asistentes IA, evaluación adaptativa." },
];

export default function Industries() {
  return (
    <section id="industrias" className="border-y border-navy-100 bg-white dark:border-navy-800 dark:bg-navy-950">
      <div className="mx-auto max-w-7xl px-6 py-28 sm:py-36">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <span className="font-mono text-xs uppercase tracking-[0.24em] text-violet">
              — Industrias
            </span>
            <h2 className="font-poppins mt-5 text-4xl font-bold leading-[1.1] text-navy-900 dark:text-white sm:text-5xl">
              Expertos en los sectores que mueven la economía digital
            </h2>
          </div>

          <div className="md:col-span-7">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {industries.map((ind, i) => {
                const I = ind.icon;
                return (
                  <motion.div
                    key={ind.t}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="group rounded-2xl border border-navy-100 bg-white p-6 transition hover:-translate-y-0.5 hover:border-violet/40 hover:shadow-lg hover:shadow-violet/10 dark:border-navy-800 dark:bg-navy-900/40"
                  >
                    <div className="inline-flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet to-teal text-white">
                      <I size={18} strokeWidth={2} />
                    </div>
                    <h3 className="font-poppins mt-4 text-lg font-bold text-navy-900 dark:text-white">
                      {ind.t}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-navy-700 dark:text-navy-100">
                      {ind.d}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
