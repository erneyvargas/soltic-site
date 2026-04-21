import { Sun, Moon } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export default function ThemeToggle({ className = "" }) {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label={theme === "dark" ? "Modo claro" : "Modo oscuro"}
      className={`grid size-10 place-items-center rounded-full border border-navy-100 bg-white text-navy-700 transition hover:border-violet hover:text-violet dark:border-navy-700 dark:bg-navy-900 dark:text-navy-100 dark:hover:border-teal dark:hover:text-teal ${className}`}
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
