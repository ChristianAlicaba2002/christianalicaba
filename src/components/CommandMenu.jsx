import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, CornerDownLeft, FileText, Hash, Search } from "lucide-react";
import { NAV, profile } from "../data/site";
import { projects } from "../data/projects";

function buildItems(onNavigate) {
  const sections = [...NAV.portfolio, ...NAV.explore].map((n) => ({
    key: `s-${n.id}`,
    group: "Sections",
    label: n.label,
    Icon: Hash,
    run: () => onNavigate(n.id),
  }));
  const work = projects.map((p) => ({
    key: `p-${p.id}`,
    group: "Projects",
    label: p.title,
    hint: p.technologies.slice(0, 2).join(" · "),
    Icon: ArrowUpRight,
    run: () => window.open(p.live || p.github, "_blank", "noopener,noreferrer"),
  }));
  const links = [
    { key: "l-cv", group: "Links", label: "Curriculum Vitae", Icon: FileText, run: () => window.open(profile.resume, "_blank") },
    { key: "l-gh", group: "Links", label: "GitHub", Icon: ArrowUpRight, run: () => window.open(profile.github, "_blank", "noopener,noreferrer") },
  ];
  return [...sections, ...work, ...links];
}

export default function CommandMenu({ open, onClose, onNavigate }) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef(null);

  const items = useMemo(() => buildItems(onNavigate), [onNavigate]);
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((i) => `${i.label} ${i.hint ?? ""} ${i.group}`.toLowerCase().includes(q));
  }, [items, query]);

  useEffect(() => {
    if (!open) return;
    setQuery("");
    setActive(0);
    const t = setTimeout(() => inputRef.current?.focus(), 10);
    return () => clearTimeout(t);
  }, [open]);

  useEffect(() => setActive(0), [query]);

  const select = (item) => {
    if (!item) return;
    onClose();
    item.run();
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(results.length - 1, i + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(0, i - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      select(results[active]);
    } else if (e.key === "Escape") {
      onClose();
    }
  };

  let lastGroup = null;

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[90] flex items-start justify-center bg-foreground/20 px-4 pt-[14vh] backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Search"
            className="w-full max-w-lg overflow-hidden rounded-xl border border-border bg-card shadow-2xl"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-border px-4">
              <Search size={16} className="text-muted" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="Search sections, projects…"
                className="h-12 w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted"
                aria-label="Search"
              />
              <kbd className="rounded border border-border px-1.5 py-0.5 font-mono text-[10px] text-muted">ESC</kbd>
            </div>

            <ul className="max-h-[50vh] overflow-y-auto p-2">
              {results.length === 0 ? (
                <li className="px-3 py-8 text-center text-sm text-muted">No results for “{query}”</li>
              ) : (
                results.map((item, i) => {
                  const header = item.group !== lastGroup ? item.group : null;
                  lastGroup = item.group;
                  return (
                    <li key={item.key}>
                      {header ? (
                        <p className="px-3 pt-3 pb-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                          {header}
                        </p>
                      ) : null}
                      <button
                        type="button"
                        onMouseEnter={() => setActive(i)}
                        onClick={() => select(item)}
                        className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm ${
                          i === active ? "bg-subtle text-foreground" : "text-foreground/80"
                        }`}
                      >
                        <item.Icon size={15} className="shrink-0 text-muted" />
                        <span className="flex-1 truncate">{item.label}</span>
                        {item.hint ? <span className="truncate text-xs text-muted">{item.hint}</span> : null}
                        {i === active ? <CornerDownLeft size={13} className="text-muted" /> : null}
                      </button>
                    </li>
                  );
                })
              )}
            </ul>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
