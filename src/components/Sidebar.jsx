import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  Briefcase,
  Check,
  Copy,
  FileText,
  FolderKanban,
  Keyboard,
  Layers,
  Mail,
  Menu,
  Search,
  Sparkles,
  User,
  X,
} from "lucide-react";
import { NAV, profile } from "../data/site";
import { useTheme } from "../context/ThemeContext";
import { Switch } from "./ui";

const ICONS = {
  user: User,
  folder: FolderKanban,
  sparkles: Sparkles,
  briefcase: Briefcase,
  layers: Layers,
  mail: Mail,
  keyboard: Keyboard,
  activity: Activity,
};

const isMac = typeof navigator !== "undefined" && /Mac|iPhone|iPad/.test(navigator.platform);

function NavGroup({ title, items, activeSection, onSelect }) {
  return (
    <div>
      <p className="px-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">{title}</p>
      <ul className="mt-2 space-y-0.5">
        {items.map((item) => {
          const Icon = ICONS[item.icon];
          const isActive = activeSection === item.id;
          return (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => onSelect(item.id)}
                aria-current={isActive ? "true" : undefined}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-[15px] transition-colors ${
                  isActive
                    ? "bg-subtle font-medium text-foreground"
                    : "text-foreground/75 hover:bg-subtle/70 hover:text-foreground"
                }`}
              >
                <Icon size={17} strokeWidth={1.7} className="shrink-0" />
                <span className="flex-1">{item.label}</span>
                {item.count != null ? (
                  <span className="font-mono text-xs text-muted">{item.count}</span>
                ) : null}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function SidebarBody({ activeSection, onSelect, onSearch }) {
  const { theme, toggleTheme } = useTheme();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const rowClass =
    "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-[15px] text-foreground/80 transition-colors hover:bg-subtle/70 hover:text-foreground";

  return (
    <div className="flex h-full flex-col">
      <button
        type="button"
        onClick={() => onSelect("home")}
        className="hidden px-7 pt-9 pb-8 text-left font-mono text-[19px] tracking-tight text-foreground lg:block"
      >
        {profile.name}
      </button>

      <nav className="flex-1 space-y-8 overflow-y-auto px-4 pt-6 lg:pt-0" aria-label="Sections">
        <NavGroup title="Portfolio" items={NAV.portfolio} activeSection={activeSection} onSelect={onSelect} />
        <NavGroup title="Explore" items={NAV.explore} activeSection={activeSection} onSelect={onSelect} />
      </nav>

      <div className="space-y-0.5 border-t border-border px-4 pt-4">
        <div className="flex items-center gap-3 px-3 py-2 text-[15px] text-foreground/80">
          <span className="relative flex h-2.5 w-2.5 items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-50" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="flex-1">Available for work</span>
        </div>

        <div className="flex items-center gap-3 px-3 py-2 text-[15px] text-foreground/80">
          <Switch checked={theme === "dark"} onChange={toggleTheme} label="Dark mode" />
          <span>Dark Mode</span>
        </div>

        <button type="button" onClick={onSearch} className={rowClass}>
          <Search size={17} strokeWidth={1.7} />
          <span className="flex-1">Search</span>
          <kbd className="rounded border border-border bg-card px-1.5 py-0.5 font-mono text-[10px] text-muted">
            {isMac ? "⌘K" : "Ctrl K"}
          </kbd>
        </button>

        <a href={profile.resume} target="_blank" rel="noopener noreferrer" className={rowClass}>
          <FileText size={17} strokeWidth={1.7} />
          Curriculum Vitae
        </a>

        <button type="button" onClick={() => onSelect("contact")} className={rowClass}>
          <Mail size={17} strokeWidth={1.7} />
          Get in touch
        </button>
      </div>

      <div className="mt-3 border-t border-border px-7 py-5">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Work &amp; collabs</p>
        <div className="mt-2 flex items-center gap-2">
          <a
            href={`mailto:${profile.email}`}
            className="min-w-0 flex-1 truncate font-mono text-[13px] text-foreground hover:underline"
          >
            {profile.email}
          </a>
          <button
            type="button"
            onClick={copyEmail}
            aria-label={copied ? "Email copied" : "Copy email"}
            className="shrink-0 text-muted hover:text-foreground"
          >
            {copied ? <Check size={15} className="text-emerald-500" /> : <Copy size={15} />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Sidebar({ activeSection, onNavigate, onSearch }) {
  const [open, setOpen] = useState(false);

  const select = (id) => {
    setOpen(false);
    onNavigate(id);
  };
  const search = () => {
    setOpen(false);
    onSearch();
  };

  return (
    <>
      {/* Desktop */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-72 border-r border-border bg-background lg:block">
        <SidebarBody activeSection={activeSection} onSelect={select} onSearch={search} />
      </aside>

      {/* Mobile top bar */}
      <header className="fixed inset-x-0 top-0 z-40 flex h-14 items-center justify-between border-b border-border bg-background/85 px-4 backdrop-blur-xl lg:hidden">
        <button type="button" onClick={() => select("home")} className="font-mono text-[15px] text-foreground">
          {profile.name}
        </button>
        <div className="flex items-center gap-1">
          <button type="button" onClick={search} aria-label="Search" className="p-2 text-foreground">
            <Search size={18} />
          </button>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="p-2 text-foreground"
          >
            <Menu size={20} />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open ? (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-foreground/20 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="fixed inset-y-0 left-0 z-50 w-[19rem] max-w-[85vw] border-r border-border bg-background lg:hidden"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="flex h-14 items-center justify-between border-b border-border px-4">
                <span className="font-mono text-[15px] text-foreground">{profile.name}</span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="p-2 text-foreground"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="h-[calc(100%-3.5rem)]">
                <SidebarBody activeSection={activeSection} onSelect={select} onSearch={search} />
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
