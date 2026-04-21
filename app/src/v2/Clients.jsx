const clients = [
  "Acme Corp",
  "Globex",
  "Initech",
  "Umbrella",
  "Hooli",
  "Stark Industries",
  "Wayne Ent.",
  "Pied Piper",
  "Cyberdyne",
  "Tyrell Corp",
];

export default function Clients() {
  const row = [...clients, ...clients];
  return (
    <section className="group relative border-y border-navy-100 bg-white py-12 dark:border-navy-800 dark:bg-navy-950">
      <p className="mb-8 text-center font-mono text-xs uppercase tracking-[0.28em] text-navy-500 dark:text-navy-200">
        Empresas que han confiado en nosotros
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee gap-16 group-hover:[animation-play-state:paused]">
          {row.map((b, i) => (
            <span
              key={i}
              className="font-poppins whitespace-nowrap text-2xl font-semibold text-navy-300 transition-all duration-300 hover:scale-110 hover:text-navy-900 hover:bg-gradient-to-r hover:from-violet hover:to-teal hover:bg-clip-text hover:text-transparent dark:text-navy-500 dark:hover:text-white"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
