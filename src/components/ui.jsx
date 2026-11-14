import { motion } from "framer-motion";

import { fade } from "./motion";

/** Small mono uppercase label, e.g. "AI TOOLS IN MY WORKFLOW". */
export function Eyebrow({ children, className = "" }) {
  return (
    <p className={`font-mono text-[11px] uppercase tracking-[0.18em] text-muted ${className}`}>
      {children}
    </p>
  );
}

/** "01 · PROJECTS" header with an optional action on the right. */
export function SectionHeader({ index, title, action }) {
  return (
    <motion.div
      className="mb-8 flex items-center justify-between gap-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={fade}
    >
      <Eyebrow>
        {String(index).padStart(2, "0")} · {title}
      </Eyebrow>
      {action}
    </motion.div>
  );
}

/** Kept for any page that still wants the old plain label. */
export function SectionLabel({ children }) {
  return <Eyebrow className="mb-3">{children}</Eyebrow>;
}

export function Switch({ checked, onChange, label }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={onChange}
      className={`relative inline-flex h-5 w-9 shrink-0 items-center rounded-full border border-border transition-colors ${
        checked ? "bg-foreground" : "bg-subtle"
      }`}
    >
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 500, damping: 32 }}
        className={`block h-3.5 w-3.5 rounded-full shadow-sm ${
          checked ? "ml-[18px] bg-background" : "ml-[2px] bg-foreground/70"
        }`}
      />
    </button>
  );
}
