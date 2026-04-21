import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Soltic S.A.S. — Estudio de ingeniería y consultoría tecnológica.
              Construimos productos digitales con criterio.
            </p>
          </div>

          <nav className="md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
              Navegación
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                ["#servicios", "Servicios"],
                ["#manifiesto", "Manifiesto"],
                ["#preguntas", "Preguntas"],
                ["#contacto", "Contacto"],
              ].map(([h, l]) => (
                <li key={h}>
                  <a href={h} className="text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="md:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
              Legal
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#" className="text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white">
                  Política de privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white">
                  Términos de servicio
                </a>
              </li>
              <li className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
                NIT 000.000.000-0
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-zinc-200 pt-8 font-mono text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-400 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Soltic S.A.S. — Todos los derechos reservados.</p>
          <p>Hecho en Bogotá · Servido desde CloudFront</p>
        </div>
      </div>
    </footer>
  );
}
