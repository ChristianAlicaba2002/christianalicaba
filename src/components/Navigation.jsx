import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "dashboard", label: "Skills" },
  { id: "aboutme", label: "About" },
  { id: "projects", label: "Work" },
  { id: "contactme", label: "Contact" },
];

export default function Navigation({ activeSection, onNavigate }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (id) => {
    onNavigate?.(id);
    setMobileOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed top-0 right-0 left-0 z-50 w-full border-b border-border bg-background/85 backdrop-blur-xl"
    >
      <nav className="mx-auto max-w-5xl px-6 sm:px-8">
        <div className="flex h-16 items-center justify-between lg:h-[4.5rem]">
          <button
            type="button"
            onClick={() => handleNav("home")}
            className="text-sm font-semibold tracking-tight text-foreground"
          >
            CA
          </button>

          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => handleNav(item.id)}
                    className={`text-[13px] tracking-wide transition-colors ${
                      isActive ? "text-foreground" : "text-muted hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-foreground lg:hidden"
              aria-label="Toggle menu"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M4 7h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-border bg-background lg:hidden"
          >
            <ul className="px-6 py-3">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => handleNav(item.id)}
                      className={`w-full py-3 text-left text-sm ${
                        isActive ? "text-foreground" : "text-muted"
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
