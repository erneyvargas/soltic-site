const stacks = {
  Frontend: ["React", "Next.js", "Vue", "Astro", "Flutter", "React Native"],
  Backend:  ["Node.js", "Go", "Python", "Django", "NestJS", "PostgreSQL"],
  Cloud:    ["AWS", "GCP", "Azure", "Terraform", "Kubernetes", "Docker"],
  Datos:    ["BigQuery", "Snowflake", "dbt", "Airflow", "Metabase", "Kafka"],
};

export default function TechStack() {
  return (
    <section className="border-y border-navy-100 bg-navy-50/50 dark:border-navy-800 dark:bg-navy-950/50">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-mono text-xs uppercase tracking-[0.24em] text-violet">
            — Stack tecnológico
          </span>
          <h2 className="font-poppins mt-4 text-3xl font-bold text-navy-900 dark:text-white sm:text-4xl">
            Elegimos las herramientas correctas para cada reto
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {Object.entries(stacks).map(([cat, items]) => (
            <div key={cat}>
              <h3 className="font-poppins text-sm font-bold uppercase tracking-wider text-navy-900 dark:text-white">
                {cat}
              </h3>
              <ul className="mt-4 space-y-2">
                {items.map((t) => (
                  <li
                    key={t}
                    className="font-poppins text-navy-700 dark:text-navy-100"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
