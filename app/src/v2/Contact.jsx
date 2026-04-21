import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin, CheckCircle2, AlertTriangle, Loader2 } from "lucide-react";

const API = import.meta.env.VITE_CONTACT_API || "";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  async function onSubmit(e) {
    e.preventDefault();
    if (status === "sending") return;
    const data = Object.fromEntries(new FormData(e.target));
    setStatus("sending");
    try {
      if (!API) throw new Error("missing API url");
      const res = await fetch(API, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(await res.text());
      setStatus("sent");
      e.target.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <section id="contacto" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-gradient" />
      <div className="absolute inset-0 opacity-20 [background:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:28px_28px]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-28 text-white sm:py-36 md:grid-cols-12">
        <div className="md:col-span-5">
          <span className="font-mono text-xs uppercase tracking-[0.24em] text-teal-soft">— Contacto</span>
          <h2 className="font-poppins mt-5 text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl">
            Hablemos de tu<br />próximo proyecto.
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
                  <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">{k}</dt>
                  {href ? (
                    <a href={href} className="font-poppins text-lg font-medium text-white hover:underline">{v}</a>
                  ) : (
                    <dd className="font-poppins text-lg font-medium text-white">{v}</dd>
                  )}
                </div>
              </div>
            ))}
          </dl>
        </div>

        <form
          onSubmit={onSubmit}
          className="relative rounded-3xl bg-white p-8 shadow-2xl md:col-span-7 md:p-10"
        >
          {/* honeypot: humanos no llenan website */}
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            className="absolute left-[-9999px] top-[-9999px]"
            aria-hidden="true"
          />

          <h3 className="font-poppins text-2xl font-bold text-navy-900">Cuéntanos de tu proyecto</h3>
          <p className="mt-1 text-sm text-navy-700">No compartimos tus datos con nadie.</p>

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
            disabled={status === "sending" || status === "sent"}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy-900 px-7 py-4 text-sm font-semibold text-white transition hover:bg-violet disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "sending" ? (
              <><Loader2 size={16} className="animate-spin" /> Enviando…</>
            ) : status === "sent" ? (
              <><CheckCircle2 size={16} /> Enviado</>
            ) : (
              <>Enviar mensaje <ArrowRight size={16} strokeWidth={2.5} /></>
            )}
          </button>

          <AnimatePresence>
            {status === "sent" && (
              <motion.p
                key="sent"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-4 flex items-center gap-2 rounded-xl bg-emerald-50 p-3 text-sm text-emerald-800"
              >
                <CheckCircle2 size={16} /> Gracias, recibimos tu mensaje. Respondemos en menos de 24h hábiles.
              </motion.p>
            )}
            {status === "error" && (
              <motion.p
                key="err"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-4 flex items-center gap-2 rounded-xl bg-red-50 p-3 text-sm text-red-800"
              >
                <AlertTriangle size={16} /> No pudimos enviar tu mensaje. Escríbenos a hola@soltic.com.co
              </motion.p>
            )}
          </AnimatePresence>

          <p className="mt-4 text-xs text-navy-500">
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
      <span className="mb-1.5 block font-poppins text-xs font-medium text-navy-700">{label}</span>
      {textarea ? (
        <textarea name={name} rows={4} required={required} className={base} />
      ) : (
        <input name={name} type={type} required={required} className={base} />
      )}
    </label>
  );
}
