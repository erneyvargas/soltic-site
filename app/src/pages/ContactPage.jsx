import SEO from "../components/SEO";
import Contact from "../v2/Contact";
import PageHero from "./_PageHero";

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contacto"
        description="Conversemos sobre tu próximo proyecto. Respondemos en menos de 24 horas hábiles con propuesta y rangos realistas de inversión."
        path="/contacto"
      />
      <PageHero
        eyebrow="Contacto"
        title="Conversemos de tu"
        highlight="próximo proyecto"
        subtitle="Respondemos en menos de 24 horas hábiles con una propuesta inicial y rangos realistas de inversión."
      />
      <Contact />
    </>
  );
}
