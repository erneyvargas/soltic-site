import { Link } from "react-router-dom";
import Logo from "./Logo";

const SocialIcon = {
  Linkedin: (p) => (<svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.4v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.11 2.06 2.06 0 0 1 0 4.11zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.21 24 24 23.23 24 22.28V1.72C24 .77 23.21 0 22.23 0z"/></svg>),
  Github:   (p) => (<svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.58.11.79-.25.79-.56v-1.95c-3.2.7-3.87-1.55-3.87-1.55-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a10.9 10.9 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.73.8 1.18 1.82 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.11v3.13c0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"/></svg>),
  Instagram:(p) => (<svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.73 3.73 0 0 1-1.38-.9 3.73 3.73 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 5.77.13 4.9.33 4.14.63a6 6 0 0 0-2.17 1.41A6 6 0 0 0 .56 4.2c-.3.76-.5 1.63-.56 2.91C-.06 8.4 0 8.8 0 12s.01 3.6.07 4.88c.06 1.28.26 2.15.56 2.91.31.8.73 1.48 1.41 2.17a6 6 0 0 0 2.17 1.41c.76.3 1.63.5 2.91.56C8.4 23.99 8.8 24 12 24s3.6-.01 4.88-.07c1.28-.06 2.15-.26 2.91-.56a6 6 0 0 0 2.17-1.41 6 6 0 0 0 1.41-2.17c.3-.76.5-1.63.56-2.91.06-1.28.07-1.68.07-4.88s-.01-3.6-.07-4.88c-.06-1.28-.26-2.15-.56-2.91a6 6 0 0 0-1.41-2.17A6 6 0 0 0 19.79.63c-.76-.3-1.63-.5-2.91-.56C15.6.01 15.2 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>),
};

const cols = [
  {
    title: "Servicios",
    links: [
      ["Full Product Development", "/servicios"],
      ["Product Discovery",        "/servicios"],
      ["Staff Augmentation",       "/servicios"],
      ["Consultoría digital",      "/servicios"],
    ],
  },
  {
    title: "Empresa",
    links: [
      ["Nosotros",  "/nosotros"],
      ["Trabajo",   "/trabajo"],
      ["Blog",      "/blog"],
      ["Contacto",  "/contacto"],
    ],
  },
  {
    title: "Recursos",
    links: [
      ["Blog",              "/blog"],
      ["Casos de estudio",  "/trabajo"],
      ["Guías técnicas",    "/blog"],
      ["Newsletter",        "/contacto"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-100">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-navy-200">
              Agencia digital que diseña, construye y escala productos
              tecnológicos con criterio. Bogotá · Colombia.
            </p>
            <div className="mt-8 flex gap-3">
              {[
                { I: SocialIcon.Linkedin, label: "LinkedIn" },
                { I: SocialIcon.Github, label: "GitHub" },
                { I: SocialIcon.Instagram, label: "Instagram" },
              ].map(({ I, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid size-10 place-items-center rounded-full border border-navy-700 bg-navy-900 text-navy-200 transition hover:border-violet hover:text-white"
                >
                  <I width="15" height="15" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <nav key={c.title} className="md:col-span-2">
              <h4 className="font-poppins text-sm font-bold uppercase tracking-wider text-white">
                {c.title}
              </h4>
              <ul className="mt-5 space-y-3 text-sm">
                {c.links.map(([l, h]) => (
                  <li key={l}>
                    <Link to={h} className="text-navy-200 hover:text-white">
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="md:col-span-2">
            <h4 className="font-poppins text-sm font-bold uppercase tracking-wider text-white">
              Contacto
            </h4>
            <address className="mt-5 space-y-3 text-sm not-italic text-navy-200">
              <a href="mailto:erneyvargasdev@gmail.com" className="block hover:text-white">
                erneyvargasdev@gmail.com
              </a>
              <a href="tel:+573006782549" className="block hover:text-white">
                +57 300 678 2549
              </a>
              <p>Bogotá, Colombia</p>
            </address>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-navy-800 pt-8 font-mono text-xs text-navy-200 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Soltic S.A.S. · NIT 000.000.000-0 · Todos los derechos reservados.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">Privacidad</a>
            <a href="#" className="hover:text-white">Términos</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
