import { motion } from "framer-motion";
import PageHero from "./_PageHero";

const values = [
  { t: "Criterio técnico",  d: "Decisiones de arquitectura explicables y argumentadas, no modas." },
  { t: "Transparencia",     d: "Reporte semanal, código del cliente desde día 1, estimaciones con rango." },
  { t: "Impacto medible",   d: "Cada iniciativa con KPIs y tablero. Nada de ‘entregado pero sin resultado’." },
  { t: "Bienestar del equipo", d: "Gente descansada rinde mejor. Horarios humanos y decisiones con sentido." },
];

const team = [
  { n: "Laura Jiménez",  r: "CEO · Co-founder",    img: "/images/team-01.jpg" },
  { n: "Andrés Torres",  r: "CTO · Co-founder",    img: "/images/team-02.jpg" },
  { n: "Valentina Ríos", r: "Head of Design",      img: "/images/team-03.jpg" },
  { n: "Diego Méndez",   r: "Head of Engineering", img: "/images/team-04.jpg" },
  { n: "Camila Ortiz",   r: "Data Lead",           img: "/images/team-05.jpg" },
  { n: "Juan Pablo V.",  r: "Cloud Architect",     img: "/images/team-06.jpg" },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Nosotros"
        title="Un estudio hecho por ingenieros"
        highlight="para empresas con ambición"
        subtitle="Soltic S.A.S. nació en 2020 con una idea simple: construir software que resuelve, no software que impresiona."
      />

      {/* Foto del equipo en acción */}
      <section className="mx-auto -mt-6 max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden rounded-3xl shadow-2xl shadow-navy-900/20"
        >
          <img
            src="/images/about-hero.jpg"
            alt="Equipo Soltic colaborando"
            className="aspect-[16/7] w-full object-cover"
          />
        </motion.div>
      </section>

      {/* Historia */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-poppins text-3xl font-bold text-navy-900 dark:text-white sm:text-4xl"
        >
          Nuestra historia
        </motion.h2>
        <div className="mt-6 space-y-5 text-navy-700 dark:text-navy-100">
          <p>
            Empezamos como un equipo de 4 ingenieros cansados de ver proyectos
            millonarios terminar en nada. Veníamos de banca, retail y salud —
            industrias donde el software crítico no puede fallar.
          </p>
          <p>
            Cinco años después somos 40 personas entre Bogotá, Medellín y
            Ciudad de México. Hemos entregado <strong>más de 120 proyectos</strong>,
            desde MVPs de startups Y Combinator hasta modernizaciones de core
            bancario. El método no ha cambiado: gente senior, procesos simples,
            cero BS.
          </p>
          <p>
            No queremos ser la agencia más grande. Queremos ser la agencia a
            la que un CTO llama cuando el proyecto no puede fallar.
          </p>
        </div>
      </section>

      {/* Valores */}
      <section className="border-y border-navy-100 bg-navy-50/50 dark:border-navy-800 dark:bg-navy-950/50">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="text-center">
            <span className="font-mono text-xs uppercase tracking-[0.24em] text-violet">— Principios</span>
            <h2 className="font-poppins mt-4 text-4xl font-bold text-navy-900 dark:text-white sm:text-5xl">
              Lo que nos guía
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <motion.div
                key={v.t}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-navy-100 bg-white p-6 dark:border-navy-800 dark:bg-navy-900/40"
              >
                <div className="size-10 rounded-xl bg-gradient-to-br from-violet to-teal" />
                <h3 className="font-poppins mt-4 text-lg font-bold text-navy-900 dark:text-white">{v.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-700 dark:text-navy-100">{v.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <span className="font-mono text-xs uppercase tracking-[0.24em] text-violet">— Equipo</span>
          <h2 className="font-poppins mt-4 text-4xl font-bold text-navy-900 dark:text-white sm:text-5xl">
            Personas detrás del código
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {team.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group text-center"
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-violet/20 to-teal/20">
                <img
                  src={p.img}
                  alt={p.n}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:saturate-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              </div>
              <p className="font-poppins mt-4 font-semibold text-navy-900 dark:text-white">{p.n}</p>
              <p className="mt-1 text-xs text-navy-500 dark:text-navy-200">{p.r}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
