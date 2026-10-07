import { useState } from "react";
import logo from "../assets/images/myPicture.webp";
import ThemeToggle from "./ThemeToggle";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "dashboard", label: "Skills" },
  { id: "aboutme", label: "About" },
  { id: "projects", label: "Work" },
  { id: "contactme", label: "Contact" },
];

export default function Sidebar({ activeSection = "home", onNavigate }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNav = (id) => {
    onNavigate?.(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="fixed top-4 left-4 z-50 lg:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-3 text-foreground"
          aria-label="Toggle mobile menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M4 7h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-foreground/10 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <nav
        className={`
          fixed z-40 h-full w-80 border-r border-border bg-background
          transition-transform duration-300
          lg:relative lg:h-screen lg:translate-x-0
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex flex-col items-start px-8 pt-16">
          <img
            className="h-16 w-16 rounded-full object-cover"
            src={logo}
            alt="Christian Dave Alicaba"
            width={64}
            height={64}
          />
          <h1 className="mt-6 text-base font-semibold tracking-tight text-foreground">
            Christian Dave Alicaba
          </h1>
          <p className="mt-1 text-sm text-muted">Software developer</p>
        </div>

        <ul className="mt-10 px-8">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => handleNav(item.id)}
                  className={`w-full py-2.5 text-left text-sm ${
                    isActive ? "text-foreground" : "text-muted hover:text-foreground"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="absolute right-8 bottom-8 left-8">
          <ThemeToggle />
          <p className="mt-4 text-xs text-muted">
            &copy; {new Date().getFullYear()}
          </p>
        </div>
      </nav>
    </div>
  );
}
