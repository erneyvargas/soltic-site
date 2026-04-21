import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Calendar, X, Sparkles } from "lucide-react";

const WHATSAPP = "https://wa.me/573000000000?text=Hola%20Soltic%2C%20quiero%20cotizar";
const CALENDLY = "https://calendly.com/soltic/discovery";

export default function FloatingCTA() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const f = () => setVisible(window.scrollY > 300);
    f();
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3"
        >
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                className="flex flex-col items-end gap-2"
              >
                <FloatingItem
                  href={WHATSAPP}
                  label="Escribir por WhatsApp"
                  color="bg-[#25D366]"
                  icon={<MessageCircle size={18} />}
                />
                <FloatingItem
                  href={CALENDLY}
                  label="Agendar llamada 30 min"
                  color="bg-violet"
                  icon={<Calendar size={18} />}
                />
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            onClick={() => setOpen((v) => !v)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={open ? "Cerrar contacto rápido" : "Abrir contacto rápido"}
            className="group relative grid size-14 place-items-center rounded-full bg-gradient-to-br from-violet to-teal text-white shadow-lg shadow-violet/40"
          >
            <motion.span
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
            >
              {open ? <X size={22} /> : <Sparkles size={22} />}
            </motion.span>
            {!open && (
              <span className="pointer-events-none absolute inset-0 rounded-full bg-violet/50 animate-[pulse-ring_2.5s_cubic-bezier(0.215,0.61,0.355,1)_infinite]" />
            )}
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function FloatingItem({ href, label, color, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 rounded-full bg-white py-2 pl-2 pr-5 shadow-lg shadow-navy-900/10 transition hover:-translate-x-0.5 dark:bg-navy-900 dark:shadow-navy-950/60"
    >
      <span className={`grid size-10 shrink-0 place-items-center rounded-full text-white ${color}`}>
        {icon}
      </span>
      <span className="text-sm font-medium text-navy-900 dark:text-white">{label}</span>
    </a>
  );
}
