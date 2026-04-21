import { useEffect, useState } from "react";

// V1 (dark gold premium)
import NavbarV1 from "./components/Navbar";
import HeroV1 from "./components/Hero";
import MarqueeV1 from "./components/Marquee";
import ServicesV1 from "./components/Services";
import ApproachV1 from "./components/Approach";
import StatsV1 from "./components/Stats";
import ContactV1 from "./components/Contact";
import FooterV1 from "./components/Footer";

// V2 (editorial light/dark)
import AppV2 from "./v2/App";

function AppV1() {
  return (
    <div className="bg-bg text-ink font-sans">
      <NavbarV1 />
      <main className="relative">
        <HeroV1 />
        <MarqueeV1 />
        <ServicesV1 />
        <ApproachV1 />
        <StatsV1 />
        <ContactV1 />
      </main>
      <FooterV1 />
    </div>
  );
}

function getInitialDesign() {
  if (typeof window === "undefined") return "v2";
  const fromUrl = new URLSearchParams(window.location.search).get("design");
  if (fromUrl === "v1" || fromUrl === "v2") return fromUrl;
  return localStorage.getItem("soltic-design") || "v2";
}

export default function App() {
  const [design, setDesign] = useState(getInitialDesign);

  useEffect(() => {
    localStorage.setItem("soltic-design", design);
  }, [design]);

  return (
    <>
      <DesignSwitcher design={design} setDesign={setDesign} />
      {design === "v1" ? <AppV1 /> : <AppV2 />}
    </>
  );
}

function DesignSwitcher({ design, setDesign }) {
  return (
    <div className="fixed bottom-4 left-4 z-[100] flex items-center gap-1 rounded-full border border-zinc-300 bg-white/90 p-1 text-xs font-medium backdrop-blur dark:border-zinc-700 dark:bg-zinc-900/90">
      {["v1", "v2"].map((v) => (
        <button
          key={v}
          onClick={() => setDesign(v)}
          className={`rounded-full px-3 py-1 transition ${
            design === v
              ? "bg-zinc-950 text-white dark:bg-white dark:text-zinc-950"
              : "text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
          }`}
        >
          {v === "v1" ? "Premium dark" : "Editorial"}
        </button>
      ))}
    </div>
  );
}
