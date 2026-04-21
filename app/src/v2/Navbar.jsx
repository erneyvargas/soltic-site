import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
    <header className={`fixed inset-x-0 z-50 transition-all duration-300 ${scrolled ? "top-3" : "top-5"}`}>
      <div className="mx-auto w-full max-w-7xl px-6">
        <nav
          className={`flex items-center justify-between rounded-2xl border px-4 py-2.5 transition-all duration-300 ${
            scrolled
              ? "border-navy-100 bg-white/85 shadow-[0_10px_30px_-10px_rgba(15,27,76,0.15)] backdrop-blur-xl dark:border-navy-800 dark:bg-navy-950/80"
              : "border-navy-100/60 bg-white/70 shadow-[0_4px_20px_-8px_rgba(15,27,76,0.08)] backdrop-blur-md dark:border-navy-800/60 dark:bg-navy-950/50"
          }`}
        >
          <div className="pl-2">
            <Logo />
          </div>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-lg px-4 py-1.5 text-sm font-medium text-navy-700 transition hover:bg-navy-50 hover:text-violet dark:text-navy-100 dark:hover:bg-navy-900 dark:hover:text-teal"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1.5">
            <ThemeToggle className="!size-9 !rounded-xl" />
            <a
              href="#contacto"
              className="hidden md:inline-flex items-center rounded-xl bg-navy-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet dark:bg-white dark:text-navy-900 dark:hover:bg-teal dark:hover:text-navy-900"
            >
              Hablemos
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden grid size-9 place-items-center rounded-xl border border-navy-100 bg-white text-navy-900 dark:border-navy-700 dark:bg-navy-900 dark:text-white"
              aria-label="menu"
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="mt-2 overflow-hidden rounded-2xl border border-navy-100 bg-white/95 p-3 shadow-xl backdrop-blur-xl md:hidden dark:border-navy-800 dark:bg-navy-950/95"
            >
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-navy-700 hover:bg-navy-50 dark:text-navy-100 dark:hover:bg-navy-900"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="mt-2 flex justify-center rounded-xl bg-navy-900 px-5 py-3 text-sm font-semibold text-white dark:bg-white dark:text-navy-900"
              >
                Hablemos
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
