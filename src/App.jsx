import { useRef, useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navigation from "./components/Navigation";
import Dashboard from "./pages/Dashboard";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import ContactMe from "./pages/ContactMe";
import CoderBoy from "./components/CoderBoy";
import Intro from "./components/Intro";
import TypeMaster from "./components/TypeMaster";

const SECTION_IDS = ["home", "dashboard", "aboutme", "projects", "contactme"];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

function App() {
  const mainRef = useRef(null);
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("home");
  const [showIntro, setShowIntro] = useState(true);
  const finishIntro = useCallback(() => setShowIntro(false), []);

  useEffect(() => {
    const id = location.hash.replace("#", "");
    if (!id) return;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [location.hash]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const id = entry.target.id;
          if (SECTION_IDS.includes(id)) { setActiveSection(id); break; }
        }
      },
      { root: null, rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen w-screen bg-background font-sans text-foreground">
      <AnimatePresence>
        {showIntro ? <Intro onComplete={finishIntro} /> : null}
      </AnimatePresence>

      <Navigation activeSection={activeSection} onNavigate={scrollToSection} />

      <main
        ref={mainRef}
        className="h-screen overflow-x-hidden overflow-y-auto scroll-pt-16 pt-16 lg:scroll-pt-[4.5rem] lg:pt-[4.5rem]"
      >
        <section
          id="home"
          className="flex min-h-[calc(100vh-4rem)] w-full scroll-mt-16 items-center bg-background px-6 py-20 sm:px-8 lg:min-h-[calc(100vh-4.5rem)] lg:scroll-mt-[4.5rem]"
        >
          <motion.div
            className="welcome-container mx-auto flex w-full max-w-6xl flex-col gap-16 lg:gap-20"
            variants={stagger}
            initial="initial"
            animate={showIntro ? "initial" : "animate"}
          >
            <div className="grid w-full items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-20">
              <div>
                <motion.p variants={fadeInUp} className="mb-8 text-sm text-muted">
                  Available for work
                </motion.p>

              <motion.h1
                variants={fadeInUp}
                className="max-w-3xl text-4xl font-semibold leading-[1.15] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
              >
                Christian Alicaba
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="mt-3 text-base text-muted sm:text-lg"
              >
                Software developer — Philippines
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="mt-8 max-w-xl text-[15px] leading-relaxed text-muted sm:text-base"
              >
                I&apos;m a passionate software developer who loves turning ideas into
                modern, scalable, and user-friendly applications. I care about the craft —
                clean interfaces, solid backends, and work that feels good to use.
                React, React Native, and ASP.NET Core are where I put that energy.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="mt-10 flex items-center gap-2"
              >
                <a
                  href="/Christian_Dave_L_Alicaba_Resume.pdf"
                  download="Christian_Dave_L_Alicaba_Resume.pdf"
                  className="inline-flex h-8 shrink-0 items-center justify-center whitespace-nowrap rounded-md bg-accent px-3 text-xs font-medium leading-none text-accent-fg duration-300 hover:opacity-90"
                >
                  Download CV
                </a>
                <button
                  type="button"
                  onClick={() => scrollToSection("projects")}
                  className="inline-flex h-8 shrink-0 items-center justify-center whitespace-nowrap rounded-md border border-foreground px-3 text-xs font-medium leading-none text-foreground duration-300 hover:bg-foreground hover:text-background"
                >
                  Selected work
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection("contactme")}
                  className="inline-flex h-8 shrink-0 items-center justify-center whitespace-nowrap px-3 text-xs font-medium leading-none text-muted hover:text-foreground"
                >
                  Contact
                </button>
              </motion.div>
            </div>

            <motion.div
              variants={fadeInUp}
              className="hidden justify-self-end lg:block"
            >
              <CoderBoy className="h-[22rem] w-[17rem] sm:h-[28rem] sm:w-[22rem] lg:h-[32rem] lg:w-[26rem]" />
            </motion.div>
            </div>

            <motion.div variants={fadeInUp}>
              <TypeMaster />
            </motion.div>
          </motion.div>
        </section>

        <section id="dashboard" className="scroll-mt-16 lg:scroll-mt-[4.5rem]">
          <Dashboard />
        </section>

        <section id="aboutme" className="scroll-mt-16 lg:scroll-mt-[4.5rem]">
          <AboutMe />
        </section>

        <section id="projects" className="scroll-mt-16 lg:scroll-mt-[4.5rem]">
          <Projects />
        </section>

        <section id="contactme" className="scroll-mt-16 lg:scroll-mt-[4.5rem]">
          <ContactMe />
        </section>
      </main>
    </div>
  );
}

export default App;
