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

const container = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show:   { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function Industries() {
  return (
    <section id="industrias" className="border-y border-navy-100 bg-white dark:border-navy-800 dark:bg-navy-950">
      <div className="mx-auto max-w-7xl px-6 py-28 sm:py-36">
        <div className="grid gap-8 md:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5"
          >
            <span className="font-mono text-xs uppercase tracking-[0.24em] text-violet">— Industrias</span>
            <h2 className="font-poppins mt-5 text-4xl font-bold leading-[1.1] text-navy-900 dark:text-white sm:text-5xl">
              Expertos en los sectores que mueven la economía digital
            </h2>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="md:col-span-7"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {industries.map((ind) => {
                const I = ind.icon;
                return (
                  <motion.div
                    key={ind.t}
                    variants={item}
                    whileHover={{ y: -4, transition: { type: "spring", stiffness: 300 } }}
                    className="group relative overflow-hidden rounded-2xl border border-navy-100 bg-white p-6 transition-shadow hover:shadow-xl hover:shadow-violet/10 dark:border-navy-800 dark:bg-navy-900/40"
                  >
                    <div className="pointer-events-none absolute -inset-x-10 -bottom-10 h-24 bg-gradient-to-t from-violet/20 to-transparent opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
                    <motion.div
                      whileHover={{ rotate: -10 }}
                      className="relative inline-flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet to-teal text-white"
                    >
                      <I size={18} strokeWidth={2} />
                    </motion.div>
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
