import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ease = [0.76, 0, 0.24, 1];
const soft = [0.25, 0.46, 0.45, 0.94];

const STACK = ["React", "React Native", "ASP.NET Core"];

export default function Intro({ onComplete }) {
  const [scene, setScene] = useState("loader");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const lock = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const duration = 5600;
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      setProgress(Math.round(t * 100));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const t1 = window.setTimeout(() => setScene("identity"), 1800);
    const t2 = window.setTimeout(() => setScene("work"), 3600);
    const t3 = window.setTimeout(onComplete, duration);

    return () => {
      document.body.style.overflow = lock;
      window.cancelAnimationFrame(raf);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col bg-background"
      initial={{ opacity: 1 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.85, ease }}
    >
      <div className="flex items-center justify-between px-6 py-5 sm:px-10">
        <motion.p
          className="font-mono text-[11px] tracking-[0.22em] text-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: soft }}
        >
          PH
        </motion.p>
        <motion.p
          className="font-mono text-[11px] tracking-[0.22em] text-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: soft }}
        >
          2024
        </motion.p>
      </div>

      <div className="relative flex flex-1 items-center justify-center px-6">
        <AnimatePresence mode="wait">
          {scene === "loader" ? (
            <motion.div
              key="loader"
              className="flex flex-col items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: soft }}
            >
              <p className="font-mono text-6xl font-medium tabular-nums tracking-tight text-foreground sm:text-7xl">
                {String(progress).padStart(2, "0")}
              </p>
              <p className="mt-4 font-mono text-[11px] tracking-[0.28em] text-muted">
                Loading
              </p>
            </motion.div>
          ) : null}

          {scene === "identity" ? (
            <motion.div
              key="identity"
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: soft }}
            >
              <p className="font-mono text-xs tracking-[0.28em] text-muted">CA</p>
              <motion.span
                className="mt-6 h-px bg-foreground"
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ duration: 0.55, delay: 0.15, ease }}
              />
              <h1 className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Christian Alicaba
              </h1>
              <p className="mt-3 text-sm text-muted sm:text-base">
                Software developer
              </p>
            </motion.div>
          ) : null}

          {scene === "work" ? (
            <motion.div
              key="work"
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: soft }}
            >
              <p className="font-mono text-[11px] tracking-[0.28em] text-muted">
                Currently building with
              </p>
              <ul className="mt-8 flex flex-col items-center gap-4">
                {STACK.map((item, i) => (
                  <motion.li
                    key={item}
                    className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.12 * i, ease: soft }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>

      <div className="px-6 py-5 sm:px-10">
        <div className="h-px w-full overflow-hidden bg-border">
          <motion.span
            className="block h-full bg-foreground"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1, ease: "linear" }}
          />
        </div>
        <div className="mt-3 flex items-center justify-between font-mono text-[11px] tracking-[0.18em] text-muted">
          <span>Portfolio</span>
          <span>{String(progress).padStart(2, "0")} / 100</span>
        </div>
      </div>
    </motion.div>
  );
}
