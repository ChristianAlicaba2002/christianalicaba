import { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import CommandMenu from "./components/CommandMenu";
import Hero from "./components/Hero";
import TypeMaster from "./components/TypeMaster";
import GithubStats from "./components/GithubStats";
import Footer from "./components/Footer";
import { SectionHeader } from "./components/ui";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import AboutMe from "./pages/AboutMe";
import Dashboard from "./pages/Dashboard";
import ContactMe from "./pages/ContactMe";
import { SECTION_IDS } from "./data/site";

const sectionClass = "scroll-mt-20 border-t border-border py-16 sm:py-20 lg:scroll-mt-8";

function App() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("home");
  const [searchOpen, setSearchOpen] = useState(false);

  const scrollToSection = useCallback((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (id === "home") window.scrollTo({ top: 0, behavior: "smooth" });
    else el.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", id === "home" ? "/" : `#${id}`);
  }, []);

  useEffect(() => {
    const id = location.hash.replace("#", "");
    if (!id) return;
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [location.hash]);

  // Scroll-spy for the sidebar.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // ⌘K / Ctrl+K opens search.
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Sidebar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onSearch={() => setSearchOpen(true)}
      />
      <CommandMenu open={searchOpen} onClose={() => setSearchOpen(false)} onNavigate={scrollToSection} />

      <div className="pt-14 lg:pt-0 lg:pl-72">
        <main className="mx-auto w-full max-w-6xl overflow-x-clip px-4 sm:px-8 lg:px-14">
          <section id="home" className="scroll-mt-20 pt-12 pb-4 sm:pt-16 lg:pt-20">
            <Hero onNavigate={scrollToSection} />
          </section>

          <section id="projects" className={`${sectionClass} mt-4 border-t-0`}>
            <Projects index={1} />
          </section>

          <section id="services" className={sectionClass}>
            <Services index={2} onNavigate={scrollToSection} />
          </section>

          <section id="journey" className={sectionClass}>
            <AboutMe index={3} />
          </section>

          <section id="stack" className={sectionClass}>
            <Dashboard index={4} />
          </section>

          <section id="activity" className={sectionClass}>
            <SectionHeader index={5} title="Activity" />
            <GithubStats />
          </section>

          <section id="playground" className={sectionClass}>
            <SectionHeader index={6} title="Playground" />
            <TypeMaster />
          </section>

          <section id="contact" className={sectionClass}>
            <ContactMe index={7} />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
