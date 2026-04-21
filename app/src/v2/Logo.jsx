export default function Logo() {
  return (
    <a href="#top" className="inline-flex items-center gap-2.5 group">
      <svg width="32" height="32" viewBox="0 0 40 40" className="transition group-hover:scale-110">
        <defs>
          <linearGradient id="soltic-logo-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#6C55E0" />
            <stop offset="0.5" stopColor="#0DD1C8" />
            <stop offset="1" stopColor="#0F1B4C" />
          </linearGradient>
        </defs>
        <circle cx="20" cy="20" r="16" fill="url(#soltic-logo-g)" />
        <circle cx="20" cy="20" r="7" fill="#fff" />
      </svg>
      <span className="font-poppins text-[18px] font-bold text-navy-900 dark:text-white">
        Soltic
      </span>
    </a>
  );
}
