import Navbar from "./Navbar";
import Hero from "./Hero";
import Clients from "./Clients";
import Services from "./Services";
import TechStack from "./TechStack";
import Process from "./Process";
import Industries from "./Industries";
import Testimonials from "./Testimonials";
import FAQ from "./FAQ";
import Contact from "./Contact";
import Footer from "./Footer";

export default function AppV2() {
  return (
    <div className="font-poppins bg-white text-navy-900 dark:bg-navy-950 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <Clients />
        <Services />
        <TechStack />
        <Process />
        <Industries />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
