const stats = [
  { k: "120+", v: "proyectos entregados" },
  { k: "99.9%", v: "uptime promedio" },
  { k: "15", v: "industrias atendidas" },
  { k: "8 años", v: "experiencia combinada" },
];

export default function Stats() {
  return (
    <section className="border-y border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-zinc-200 dark:bg-zinc-800 md:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.v}
            className="flex flex-col justify-between gap-6 bg-zinc-50 p-8 dark:bg-zinc-950 sm:p-10"
          >
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
              {s.v}
            </span>
            <span className="font-editorial text-5xl text-zinc-950 dark:text-white sm:text-6xl">
              {s.k}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
