export default function Logo({ className = "" }) {
  return (
    <a href="#top" className={`group inline-flex items-center gap-2.5 ${className}`}>
      <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition group-hover:rotate-12">
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#F5D182" />
            <stop offset="1" stopColor="#B8902F" />
          </linearGradient>
        </defs>
        <circle cx="20" cy="20" r="9" fill="url(#g)" />
        {[...Array(8)].map((_, i) => {
          const angle = (i * 360) / 8;
          return (
            <rect
              key={i}
              x="19"
              y="2"
              width="2"
              height="6"
              rx="1"
              fill="url(#g)"
              transform={`rotate(${angle} 20 20)`}
            />
          );
        })}
      </svg>
      <span className="text-[15px] font-semibold tracking-tight text-ink">
        Soltic<span className="text-gold">.</span>
      </span>
    </a>
  );
}
