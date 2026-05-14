import { useEffect, useState } from "react";
import { useLenis } from "./hooks/useLenis";
import { useScrollProgress } from "./hooks/useScrollProgress";
import { Preloader } from "./components/Preloader";
import { ScrollProgress } from "./components/ScrollProgress";
import { Grain } from "./components/Grain";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { Projects } from "./components/Projects";
import { WhyMe } from "./components/WhyMe";
import { Stack } from "./components/Stack";
import { Audience } from "./components/Audience";
import { Manifesto } from "./components/Manifesto";
import { FinalCTA } from "./components/FinalCTA";
import { Contacts } from "./components/Contacts";

export default function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const progress = useScrollProgress();
  useLenis();

  useEffect(() => {
    const minHold = window.setTimeout(() => setShowPreloader(false), 1650);
    return () => window.clearTimeout(minHold);
  }, []);

  useEffect(() => {
    document.body.style.overflow = showPreloader ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showPreloader]);

  return (
    <>
      <Preloader show={showPreloader} />
      {!showPreloader && <ScrollProgress progress={progress} />}
      <Grain />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[110] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-void"
      >
        К основному содержимому
      </a>
      <main id="main" className="relative z-10">
        <Hero />
        <About />
        <Services />
        <Process />
        <Projects />
        <WhyMe />
        <Stack />
        <Audience />
        <Manifesto />
        <FinalCTA />
        <Contacts />
      </main>
    </>
  );
}
