import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-brand-radial" />
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-violet">Error 404</p>
        <h1 className="font-poppins mt-5 text-6xl font-bold text-navy-900 dark:text-white sm:text-7xl">
          Esta página{" "}
          <span className="bg-gradient-to-r from-violet to-teal bg-clip-text text-transparent">no existe</span>
        </h1>
        <p className="mt-6 text-lg text-navy-700 dark:text-navy-100">
          La URL que buscas no está disponible o fue removida.
        </p>
        <Link
          to="/"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white hover:bg-violet dark:bg-white dark:text-navy-900 dark:hover:bg-teal dark:hover:text-navy-900"
        >
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}
