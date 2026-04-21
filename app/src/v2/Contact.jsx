import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contacto" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-gradient" />
      <div className="absolute inset-0 opacity-20 [background:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:28px_28px]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-28 text-white sm:py-36 md:grid-cols-12">
        <div className="md:col-span-5">
          <span className="font-mono text-xs uppercase tracking-[0.24em] text-teal-soft">
            — Contacto
          </span>
          <h2 className="font-poppins mt-5 text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl">
            Hablemos de tu<br />próximo producto.
          </h2>
          <p className="mt-6 max-w-md text-white/80">
            Respondemos en menos de 24 horas hábiles con una propuesta inicial y
            rangos realistas de inversión.
          </p>

          <dl className="mt-12 space-y-5">
            {[
              { I: Mail, k: "Correo", v: "hola@soltic.com.co", href: "mailto:hola@soltic.com.co" },
              { I: Phone, k: "Teléfono", v: "+57 300 000 0000", href: "tel:+5730000000000" },
              { I: MapPin, k: "Oficina", v: "Bogotá · Colombia" },
            ].map(({ I, k, v, href }) => (
              <div key={k} className="flex items-center gap-4">
                <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/10 text-white">
                  <I size={18} />
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">
                    {k}
                  </dt>
                  {href ? (
                    <a href={href} className="font-poppins text-lg font-medium text-white hover:underline">
                      {v}
                    </a>
                  ) : (
                    <dd className="font-poppins text-lg font-medium text-white">{v}</dd>
                  )}
                </div>
              </div>
            ))}
          </dl>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Gracias, nos pondremos en contacto pronto.");
          }}
          className="rounded-3xl bg-white p-8 shadow-2xl md:col-span-7 md:p-10"
        >
          <h3 className="font-poppins text-2xl font-bold text-navy-900">
            Cuéntanos de tu proyecto
          </h3>
          <p className="mt-1 text-sm text-navy-700">
            No compartimos tus datos con nadie.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Nombre" name="name" required />
            <Field label="Empresa" name="company" />
          </div>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Correo" name="email" type="email" required />
            <Field label="Teléfono" name="phone" />
          </div>
          <div className="mt-4">
            <Field label="Cuéntanos tu reto" name="msg" textarea />
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy-900 px-7 py-4 text-sm font-semibold text-white transition hover:bg-violet"
          >
            Enviar mensaje <ArrowRight size={16} strokeWidth={2.5} />
          </button>
          <p className="mt-3 text-xs text-navy-500">
            Al enviar aceptas nuestra política de tratamiento de datos.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", textarea, required }) {
  const base =
    "w-full rounded-xl border border-navy-100 bg-white px-4 py-3 text-sm text-navy-900 placeholder-navy-300 outline-none transition focus:border-violet focus:ring-2 focus:ring-violet/20";
  return (
    <label className="block">
      <span className="mb-1.5 block font-poppins text-xs font-medium text-navy-700">
        {label}
      </span>
      {textarea ? (
        <textarea name={name} rows={4} required={required} className={base} />
      ) : (
        <input name={name} type={type} required={required} className={base} />
      )}
    </label>
  );
}
