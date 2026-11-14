import { motion } from "framer-motion";
import { ArrowUpRight, Award, FileText, Github, Mail } from "lucide-react";
import {
  SiClaude,
  SiCursor,
  SiDocker,
  SiDotnet,
  SiExpo,
  SiFastapi,
  SiFirebase,
  SiLaravel,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import photo from "../assets/images/myPicture.webp";
import { profile, techCount } from "../data/site";
import { projects } from "../data/projects";
import { Eyebrow } from "./ui";
import { ease } from "./motion";

const AI_TOOLS = [
  { label: "Claude", Icon: SiClaude },
  { label: "Cursor", Icon: SiCursor },
];

const STACK = [
  { label: "React", Icon: SiReact, color: "#61DAFB" },
  { label: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { label: "Next.js", Icon: SiNextdotjs },
  { label: "Laravel", Icon: SiLaravel, color: "#FF2D20" },
  { label: "ASP.NET Core", Icon: SiDotnet, color: "#512BD4" },
  { label: "FastAPI", Icon: SiFastapi, color: "#009688" },
  { label: "React Native", Icon: SiExpo },
  { label: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
  { label: "Supabase", Icon: SiSupabase, color: "#3FCF8E" },
  { label: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { label: "MySQL", Icon: SiMysql, color: "#4479A1" },
  { label: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
  { label: "Docker", Icon: SiDocker, color: "#2496ED" },
  { label: "Express.js", Icon: SiFastapi, color: "#000000" },
];

const SOCIALS = [
  { label: "github", href: profile.github, Icon: Github },
  { label: "email", href: `mailto:${profile.email}`, Icon: Mail },
  { label: "cv", href: profile.resume, Icon: FileText },
];

const container = {
  initial: {},
  animate: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};
const item = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

function Marquee() {
  const loop = [...STACK, ...STACK];
  return (
    <div className="marquee overflow-hidden">
      <ul className="marquee-track flex w-max gap-4 py-1">
        {loop.map((tech, i) => (
          <li
            key={`${tech.label}-${i}`}
            aria-hidden={i >= STACK.length ? "true" : undefined}
            className="flex shrink-0 items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-subtle">
              <tech.Icon
                size={18}
                style={tech.color ? { color: tech.color } : undefined}
                className={tech.color ? "" : "text-foreground"}
              />
            </span>
            <span className="font-display text-lg font-medium text-foreground">{tech.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Stats({ onNavigate }) {
  const stats = [
    { value: "3+", label: "Years building" },
    { value: `${projects.length}`, label: "Projects shipped", to: "projects" },
    { value: `${techCount}+`, label: "Technologies used", to: "stack" },
    { value: "1×", label: "Hackathon win", to: "journey" },
  ];
  return (
    <dl className="grid grid-cols-2 border-y border-border md:grid-cols-4">
      {stats.map((s, i) => (
        <div
          key={s.label}
          className={`py-6 pr-4 ${i % 2 === 1 ? "border-l border-border pl-5 md:pl-8" : ""} ${
            i > 0 ? "md:border-l md:border-border md:pl-8" : ""
          } ${i >= 2 ? "border-t border-border md:border-t-0" : ""}`}
        >
          <dd className="flex items-center gap-1.5 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {s.value}
            {s.to ? (
              <button
                type="button"
                onClick={() => onNavigate(s.to)}
                aria-label={`Go to ${s.label}`}
                className="text-muted hover:text-foreground"
              >
                <ArrowUpRight size={16} />
              </button>
            ) : null}
          </dd>
          <dt className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">{s.label}</dt>
        </div>
      ))}
    </dl>
  );
}

export default function Hero({ onNavigate }) {
  return (
    <div className="relative">
      <div className="dot-grid pointer-events-none absolute inset-x-0 -top-10 h-[34rem]" aria-hidden="true" />

      <motion.div
        className="relative grid gap-10 md:grid-cols-[minmax(0,17rem)_1fr] lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-14"
        variants={container}
        initial="initial"
        animate="animate"
      >
        <motion.div variants={item} className="mx-auto w-full max-w-[20rem] md:mx-0 md:max-w-none">
          <div className="overflow-hidden rounded-2xl border border-border bg-subtle shadow-[0_24px_48px_-24px_rgba(0,0,0,0.35)]">
            <img
              src={photo}
              alt={profile.fullName}
              width={704}
              height={880}
              className="aspect-[4/5] w-full object-cover object-top"
            />
          </div>
        </motion.div>

        <div className="min-w-0">
          <motion.div variants={item}>
            <Eyebrow>
              {profile.role} · {profile.location}
            </Eyebrow>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-4 font-display text-5xl font-bold leading-[1.02] tracking-tight text-foreground sm:text-6xl xl:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <motion.div variants={item} className="mt-6 max-w-2xl space-y-4 text-[17px] leading-relaxed text-foreground/85 sm:text-lg">
            <p>
              I&apos;m a Computer Science student and full-stack developer from the Philippines. I build web
              and mobile apps with React, React Native, Laravel, and ASP.NET Core.
            </p>
            <p>
              Most of my work is software people use every day: campus inventory, ordering
              systems, clinic records, and tournament brackets.
            </p>
          </motion.div>

          <motion.div variants={item} className="mt-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground">
              <Award size={16} strokeWidth={1.8} />
              {profile.highlight}
            </span>
          </motion.div>

          <motion.div variants={item} className="mt-6">
            <Eyebrow>AI tools in my workflow</Eyebrow>
            <ul className="mt-3 flex flex-wrap gap-2">
              {AI_TOOLS.map((tool) => (
                <li
                  key={tool.label}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-sm text-foreground"
                >
                  <tool.Icon size={14} />
                  {tool.label}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.ul variants={item} className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            {SOCIALS.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target={social.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 font-mono text-sm text-foreground/80 hover:text-foreground"
                >
                  <social.Icon size={15} strokeWidth={1.8} />
                  {social.label}
                  <ArrowUpRight
                    size={12}
                    className="text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </li>
            ))}
          </motion.ul>
        </div>
      </motion.div>

      <motion.div
        className="mt-14 border-t border-border pt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4, ease }}
      >
        <Eyebrow className="mb-5 text-center">Shipped with</Eyebrow>
        <Marquee />
        <div className="mt-8">
          <Stats onNavigate={onNavigate} />
        </div>
      </motion.div>
    </div>
  );
}
