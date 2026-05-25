import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Technologies from "./components/Technologies";
import Hobbies from "./components/Hobbies";
import Education from "./components/Education";
import About from "./components/About";
import CustomCursor from "./components/CustomCursor";
import CyberBackground from "./components/CyberBackground";
import { useEffect, useState } from "react";
import { lenisInstance } from "./main";

function App() {
  const [currentView, setCurrentView] = useState("home");
  const [pendingScrollTarget, setPendingScrollTarget] = useState(null);

  const handleNavigateHomeSection = (sectionId) => {
    setPendingScrollTarget(sectionId);
    setCurrentView("home");
  };

  useEffect(() => {
    if (currentView !== "home" || !pendingScrollTarget) return;

    const target = pendingScrollTarget;
    const frameId = window.requestAnimationFrame(() => {
      if (target === "#home") {
        if (lenisInstance) {
          lenisInstance.scrollTo(0, { duration: 0 });
        } else {
          window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        }
      } else {
        const el = document.querySelector(target);
        if (el && lenisInstance) {
          lenisInstance.scrollTo(el, { offset: -80, duration: 1.2 });
        }
      }
      setPendingScrollTarget(null);
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [currentView, pendingScrollTarget]);

  const shellClass =
    "relative overflow-x-hidden text-stone-300 antialiased min-h-screen font-mono";

  if (currentView === "about") {
    return (
      <div className={shellClass}>
        <CyberBackground />
        <CustomCursor />
        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
          <header id="home">
            <Navbar
              onOpenAbout={() => setCurrentView("about")}
              onNavigateHomeSection={handleNavigateHomeSection}
              currentView={currentView}
            />
          </header>
          <About
            onBackHome={() => handleNavigateHomeSection("#home")}
            onNavigateHomeSection={handleNavigateHomeSection}
          />
          <SiteFooter />
        </div>
      </div>
    );
  }

  return (
    <div className={shellClass}>
      <CyberBackground />
      <CustomCursor />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
        <header id="home">
          <Navbar
            onOpenAbout={() => setCurrentView("about")}
            onNavigateHomeSection={handleNavigateHomeSection}
            currentView={currentView}
          />
        </header>

        <main>
          <section aria-label="Hero section" className="scroll-mt-24">
            <Hero />
          </section>

          <section id="technologies" aria-label="Technologies" className="scroll-mt-28">
            <Technologies />
          </section>

          <section id="projects" aria-label="Projects" className="scroll-mt-28">
            <Project />
          </section>

          <section id="experience" aria-label="Experience" className="scroll-mt-28">
            <Experience />
          </section>

          <section id="education" aria-label="Education" className="scroll-mt-28">
            <Education />
          </section>

          <section id="hobbies" aria-label="Hobbies" className="scroll-mt-28">
            <Hobbies />
          </section>

          <section id="contact" aria-label="Contact" className="scroll-mt-28">
            <Contact />
          </section>
        </main>

        <SiteFooter />
      </div>
    </div>
  );
}

function SiteFooter() {
  return (
    <footer className="cyber-footer mt-16 mb-8 relative z-10">
      <p>
        © {new Date().getFullYear()}{" "}
        <span>RAJAN_MANDAL</span> — SYSTEM.BUILD(
        <span>REACT</span>+<span>TAILWIND</span>)
      </p>
      <p className="mt-2 text-stone-600">// END_OF_FILE — CRAFTED_WITH_PRECISION</p>
    </footer>
  );
}

export default App;
