import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { projects } from "../data/projects";
import { SectionHeader } from "../components/ui";
import { ease } from "../components/motion";

const INITIAL = 6;

// Featured first, then the rest in their listed order.
const ordered = [...projects.filter((p) => p.featured), ...projects.filter((p) => !p.featured)];

function ProjectCard({ project, index }) {
  const href = project.live || project.github;
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.06, ease }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-[0_18px_40px_-24px_rgba(0,0,0,0.35)]"
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block overflow-hidden bg-subtle"
        aria-label={`Open ${project.title}`}
      >
        <img
          src={project.image}
          alt=""
          loading="lazy"
          className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {project.featured ? (
          <span className="absolute top-3 left-3 rounded-full bg-background/90 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-foreground backdrop-blur">
            Featured
          </span>
        ) : null}
      </a>

      <div className="flex flex-1 flex-col p-5">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">{project.role}</p>
        <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-foreground">
          {project.title}
        </h3>
        <p className="line-clamp-3 mt-2 text-[15px] leading-relaxed text-muted">{project.description}</p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((t) => (
            <li key={t} className="rounded-md bg-subtle px-2 py-0.5 font-mono text-[11px] text-foreground/75">
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex gap-5 pt-5 font-mono text-[13px]">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-foreground/80 hover:text-foreground"
          >
            <Github size={14} strokeWidth={1.8} />
            code
          </a>
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-foreground/80 hover:text-foreground"
            >
              live
              <ArrowUpRight size={13} />
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects({ index = 1 }) {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? ordered : ordered.slice(0, INITIAL);

  return (
    <div>
      <SectionHeader
        index={index}
        title="Projects"
        action={
          ordered.length > INITIAL ? (
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-1.5 text-sm text-foreground hover:bg-subtle"
            >
              {showAll ? "show less" : `all ${ordered.length}`}
              <ArrowRight size={14} className={showAll ? "-rotate-90" : ""} />
            </button>
          ) : null
        }
      />

      <motion.div layout className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence initial={false}>
          {visible.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
