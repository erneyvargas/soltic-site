import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#industrias", label: "Industrias" },
  { href: "#preguntas", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 10);
    f();
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl shadow-[0_1px_0_rgba(15,27,76,0.08)] dark:bg-navy-950/85 dark:shadow-[0_1px_0_rgba(255,255,255,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-navy-700 transition hover:text-violet dark:text-navy-100 dark:hover:text-teal"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#contacto"
            className="hidden md:inline-flex items-center rounded-full bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-violet dark:bg-white dark:text-navy-900 dark:hover:bg-teal dark:hover:text-navy-900"
          >
            Hablemos
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden grid size-10 place-items-center rounded-full border border-navy-100 bg-white text-navy-900 dark:border-navy-700 dark:bg-navy-900 dark:text-white"
            aria-label="menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-navy-100 bg-white p-4 dark:border-navy-800 dark:bg-navy-950">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-3 text-sm font-medium text-navy-700 hover:bg-navy-50 dark:text-navy-100 dark:hover:bg-navy-900"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-2 flex justify-center rounded-full bg-navy-900 px-5 py-3 text-sm font-semibold text-white dark:bg-white dark:text-navy-900"
          >
            Hablemos
          </a>
        </div>
      )}
    </header>
  );
}
