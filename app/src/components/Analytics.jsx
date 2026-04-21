import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Reemplaza SITE_CODE por el tuyo tras crear cuenta gratis en https://goatcounter.com
// (si lo dejas vacío no pasa nada — las llamadas se caen en silencio)
const GOATCOUNTER_SITE = import.meta.env.VITE_GOATCOUNTER_SITE || "";

export default function Analytics() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    if (!GOATCOUNTER_SITE || import.meta.env.DEV) return;
    const gc = window.goatcounter;
    if (gc && typeof gc.count === "function") {
      gc.count({ path: pathname + search });
    }
  }, [pathname, search]);

  if (!GOATCOUNTER_SITE || import.meta.env.DEV) return null;

  return (
    <script
      data-goatcounter={`https://${GOATCOUNTER_SITE}.goatcounter.com/count`}
      async
      src="//gc.zgo.at/count.js"
    />
  );
}
