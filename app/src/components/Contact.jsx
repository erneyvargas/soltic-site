import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contacto" className="relative py-28">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl border border-line/60 bg-surface/70 p-10 sm:p-16">
          <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-gold/15 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <span className="eyebrow">
                <span className="size-1.5 rounded-full bg-gold" /> Hablemos
              </span>
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="display mt-5 text-4xl text-ink sm:text-5xl md:text-6xl"
              >
                Construyamos algo{" "}
                <span className="gold-text italic">extraordinario</span>.
              </motion.h2>
              <p className="mt-5 max-w-md text-mute">
                Cuéntenos su reto. Respondemos en menos de 24 horas hábiles con
                una propuesta inicial sin compromiso.
              </p>

              <div className="mt-10 space-y-4 text-sm">
                <a
                  href="mailto:hola@soltic.com.co"
                  className="flex items-center gap-3 text-ink transition hover:text-gold"
                >
                  <Mail size={16} className="text-gold" />
                  hola@soltic.com.co
                </a>
                <a
                  href="tel:+5730000000000"
                  className="flex items-center gap-3 text-ink transition hover:text-gold"
                >
                  <Phone size={16} className="text-gold" />
                  +57 300 000 0000
                </a>
                <div className="flex items-center gap-3 text-ink">
                  <MapPin size={16} className="text-gold" />
                  Bogotá · Colombia
                </div>
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Gracias, nos pondremos en contacto pronto.");
              }}
              className="flex flex-col gap-4"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Nombre" name="name" required />
                <Field label="Empresa" name="company" />
              </div>
              <Field label="Correo" name="email" type="email" required />
              <Field label="Teléfono" name="phone" />
              <Field label="Cuéntenos del proyecto" name="msg" textarea />
              <button type="submit" className="btn-primary mt-2 self-start">
                Enviar mensaje <ArrowUpRight size={16} strokeWidth={2.5} />
              </button>
              <p className="text-xs text-mute">
                Al enviar acepta nuestra política de tratamiento de datos.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", textarea, required }) {
  const base =
    "w-full rounded-xl border border-line/80 bg-bg/50 px-4 py-3 text-sm text-ink placeholder-mute outline-none transition focus:border-gold/60 focus:bg-bg";
  return (
    <label className="block">
      <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-mute">
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
