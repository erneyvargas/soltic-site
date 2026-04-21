import SEO from "../components/SEO";
import PageHero from "./_PageHero";
import Services from "../v2/Services";
import TechStack from "../v2/TechStack";
import Process from "../v2/Process";
import FAQ from "../v2/FAQ";

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Servicios"
        description="Full Product Development, Product Discovery y Staff Augmentation. Construimos con equipos senior, stacks modernos y procesos probados en +120 proyectos."
        path="/servicios"
      />
      <PageHero
        eyebrow="Servicios"
        title="Tres formas de trabajar"
        highlight="con nosotros"
        subtitle="Elige el modelo de colaboración que mejor se ajusta a la etapa y al riesgo de tu iniciativa."
      />
      <Services />
      <TechStack />
      <Process />
      <FAQ />
    </>
  );
}
