import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import ThemeToggle from "../components/ThemeToggle";

const ease = [0.25, 0.46, 0.45, 0.94];

const fade = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

export default function NotFound() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = "404 — Christian Alicaba";
    return () => {
      document.title = "Christian Alicaba";
    };
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-background font-sans text-foreground">
      <header className="relative z-10 flex items-center justify-between px-6 py-5 sm:px-8">
        <Link to="/" className="text-sm font-semibold tracking-tight text-foreground">
          CA
        </Link>
        <ThemeToggle />
      </header>

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 py-12 sm:px-8 lg:py-16">
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_minmax(0,22rem)] lg:gap-16">
          <div>
            <motion.p
              className="font-mono text-[11px] tracking-[0.28em] text-muted"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.45, ease }}
            >
              Error
            </motion.p>

            <motion.h1
              className="mt-3 font-mono text-[7.5rem] leading-none font-medium tracking-tight text-foreground sm:text-[10rem] lg:text-[12rem]"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
            >
              404
            </motion.h1>

            <motion.span
              className="mt-8 block h-px bg-foreground"
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 0.55, delay: 0.25, ease: [0.76, 0, 0.24, 1] }}
            />
          </div>

          <motion.div
            className="pb-2"
            initial="initial"
            animate="animate"
            transition={{ staggerChildren: 0.08, delayChildren: 0.2 }}
          >
            <motion.h2
              variants={fade}
              transition={{ duration: 0.45, ease }}
              className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
            >
              This page isn&apos;t in the portfolio.
            </motion.h2>
            <motion.p
              variants={fade}
              transition={{ duration: 0.45, ease }}
              className="mt-4 text-[15px] leading-relaxed text-muted"
            >
              The URL may be wrong, or the page was moved. Go home, or jump to selected work.
            </motion.p>
            <motion.p
              variants={fade}
              transition={{ duration: 0.45, ease }}
              className="mt-5 font-mono text-xs text-muted"
            >
              {pathname}
            </motion.p>

            <motion.div variants={fade} className="mt-10 flex items-center gap-2">
              <Link
                to="/"
                className="inline-flex h-8 shrink-0 items-center justify-center whitespace-nowrap rounded-md bg-accent px-3 text-xs font-medium leading-none text-accent-fg duration-300 hover:opacity-90"
              >
                Back to home
              </Link>
              <Link
                to="/#projects"
                className="inline-flex h-8 shrink-0 items-center justify-center whitespace-nowrap rounded-md border border-foreground px-3 text-xs font-medium leading-none text-foreground duration-300 hover:bg-foreground hover:text-background"
              >
                Selected work
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <footer className="relative z-10 flex items-center justify-between px-6 py-5 font-mono text-[11px] tracking-[0.22em] text-muted sm:px-8">
        <span>PH</span>
        <span>2026</span>
      </footer>
    </div>
  );
}
