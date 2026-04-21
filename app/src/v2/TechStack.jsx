import { motion } from "framer-motion";

const stacks = {
  Frontend: ["React", "Next.js", "Vue", "Astro", "Flutter", "React Native"],
  Backend:  ["Node.js", "Go", "Python", "Django", "NestJS", "PostgreSQL"],
  Cloud:    ["AWS", "GCP", "Azure", "Terraform", "Kubernetes", "Docker"],
  Datos:    ["BigQuery", "Snowflake", "dbt", "Airflow", "Metabase", "Kafka"],
};

const col = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function TechStack() {
  return (
    <section className="border-y border-navy-100 bg-navy-50/50 dark:border-navy-800 dark:bg-navy-950/50">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="font-mono text-xs uppercase tracking-[0.24em] text-violet">— Stack tecnológico</span>
          <h2 className="font-poppins mt-4 text-3xl font-bold text-navy-900 dark:text-white sm:text-4xl">
            Elegimos las herramientas correctas para cada reto
          </h2>
        </motion.div>

        <motion.div
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {Object.entries(stacks).map(([cat, items]) => (
            <motion.div key={cat} variants={col}>
              <h3 className="font-poppins text-sm font-bold uppercase tracking-wider text-navy-900 dark:text-white">
                {cat}
              </h3>
              <ul className="mt-4 space-y-2">
                {items.map((t, idx) => (
                  <motion.li
                    key={t}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + idx * 0.04 }}
                    whileHover={{ x: 4, color: "#6C55E0" }}
                    className="font-poppins text-navy-700 dark:text-navy-100 cursor-default"
                  >
                    {t}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
