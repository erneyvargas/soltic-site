export default function Logo() {
  return (
    <a href="#top" className="inline-flex items-center gap-2 group">
      <svg width="28" height="28" viewBox="0 0 40 40" className="transition group-hover:-rotate-12">
        <circle cx="20" cy="20" r="18" className="fill-zinc-950 dark:fill-white" />
        <text x="20" y="26" textAnchor="middle" className="fill-white dark:fill-zinc-950 font-editorial" fontSize="20" fontStyle="italic">s</text>
      </svg>
      <span className="font-editorial italic text-[22px] text-zinc-950 dark:text-white tracking-tight">
        soltic
      </span>
    </a>
  );
}
