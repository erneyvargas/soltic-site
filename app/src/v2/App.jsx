import Navbar from "./Navbar";
import Hero from "./Hero";
import Stats from "./Stats";
import Services from "./Services";
import Manifesto from "./Manifesto";
import Testimonial from "./Testimonial";
import FAQ from "./FAQ";
import Contact from "./Contact";
import Footer from "./Footer";

export default function AppV2() {
  return (
    <div className="font-plex bg-white text-zinc-950 dark:bg-zinc-950 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Manifesto />
        <Testimonial />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
