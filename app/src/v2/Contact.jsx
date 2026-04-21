import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contacto" className="mx-auto max-w-7xl px-6 py-28 sm:py-36">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            — Contacto
          </span>
          <h2 className="font-editorial mt-6 text-5xl leading-[1.05] text-zinc-950 dark:text-white sm:text-6xl md:text-7xl">
            Empecemos.
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-zinc-600 dark:text-zinc-400">
            Respondemos en menos de 24 horas hábiles con una propuesta inicial y
            rangos de inversión realistas.
          </p>

          <dl className="mt-12 space-y-6 text-sm">
            {[
              ["Correo", "hola@soltic.com.co", "mailto:hola@soltic.com.co"],
              ["Teléfono", "+57 300 000 0000", "tel:+5730000000000"],
              ["Oficina", "Bogotá · Colombia"],
            ].map(([k, v, href]) => (
              <div key={k} className="flex items-baseline justify-between border-b border-zinc-200 pb-4 dark:border-zinc-800">
                <dt className="font-mono text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  {k}
                </dt>
                {href ? (
                  <a
                    href={href}
                    className="font-editorial text-lg italic text-zinc-950 hover:underline dark:text-white"
                  >
                    {v}
                  </a>
                ) : (
                  <dd className="font-editorial text-lg italic text-zinc-950 dark:text-white">
                    {v}
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Gracias, nos pondremos en contacto pronto.");
          }}
          className="md:col-span-7"
        >
          <div className="grid grid-cols-1 gap-px bg-zinc-200 dark:bg-zinc-800">
            <Field label="Nombre" name="name" required />
            <Field label="Empresa" name="company" />
            <Field label="Correo" name="email" type="email" required />
            <Field label="Teléfono" name="phone" />
            <Field label="Cuéntanos sobre el reto" name="msg" textarea />
          </div>
          <button
            type="submit"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-zinc-950 px-6 py-4 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
          >
            Enviar mensaje
            <ArrowUpRight size={16} strokeWidth={2} />
          </button>
          <p className="mt-4 text-xs text-zinc-500 dark:text-zinc-400">
            Al enviar aceptas nuestra política de tratamiento de datos.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", textarea, required }) {
  const base =
    "w-full bg-white px-6 py-5 text-base text-zinc-950 placeholder-zinc-400 outline-none transition focus:bg-zinc-50 dark:bg-zinc-950 dark:text-white dark:placeholder-zinc-600 dark:focus:bg-zinc-900";
  return (
    <label className="block">
      <span className="block bg-white px-6 pt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500 dark:bg-zinc-950 dark:text-zinc-400">
        {label}
      </span>
      {textarea ? (
        <textarea name={name} rows={4} required={required} className={base + " pb-6"} />
      ) : (
        <input name={name} type={type} required={required} className={base + " pb-5"} />
      )}
    </label>
  );
}
