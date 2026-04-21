const brands = [
  "Acme Corp",
  "Globex",
  "Initech",
  "Umbrella",
  "Hooli",
  "Stark Ind.",
  "Wayne Ent.",
  "Pied Piper",
];

export default function Marquee() {
  const row = [...brands, ...brands];
  return (
    <section className="relative border-y border-line/50 bg-surface/30 py-10">
      <div className="container-x">
        <p className="mb-6 text-center text-xs uppercase tracking-[0.3em] text-mute">
          Empresas que confían en nosotros
        </p>
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex w-max animate-marquee gap-16">
            {row.map((b, i) => (
              <span
                key={i}
                className="whitespace-nowrap font-display text-3xl text-mute/70 hover:text-ink transition"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
