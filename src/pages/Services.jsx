import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  FileCode2,
  LayoutDashboard,
  MessageSquare,
  Rocket,
  Server,
  ShieldCheck,
  Smartphone,
  Wrench,
} from "lucide-react";
import { SectionHeader } from "../components/ui";
import { ease, fade } from "../components/motion";

const SERVICES = [
  {
    Icon: Code2,
    title: "Web applications",
    body: "Fast, responsive web apps built with React, Next.js, and TypeScript, from landing pages to full products.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    Icon: Smartphone,
    title: "Mobile apps",
    body: "Cross-platform iOS and Android apps with React Native (Expo) that share logic with your web app.",
    tags: ["React Native", "Expo"],
  },
  {
    Icon: Server,
    title: "Backend & APIs",
    body: "REST APIs, authentication, and databases that stay consistent as your data grows.",
    tags: ["Laravel", "ASP.NET Core", "FastAPI", "PostgreSQL"],
  },
  {
    Icon: LayoutDashboard,
    title: "Systems & dashboards",
    body: "Inventory, ordering, booking, and records systems with role-based access and a clean admin panel.",
    tags: ["Admin panels", "Roles & permissions", "Reports"],
  },
  {
    Icon: Rocket,
    title: "Deployment",
    body: "I put your project online and set up the domain, hosting, and a simple deploy process.",
    tags: ["Cloudflare", "Docker", "CI/CD"],
  },
  {
    Icon: Wrench,
    title: "Fixes & improvements",
    body: "Bug fixes, new features, or a cleanup of an existing codebase so it is easier to maintain.",
    tags: ["Refactoring", "Performance", "New features"],
  },
];

const PROMISES = [
  {
    Icon: MessageSquare,
    title: "Clear communication",
    body: "Regular progress updates and quick replies. You always know where the project stands.",
  },
  {
    Icon: FileCode2,
    title: "You own the code",
    body: "Full source code in your repository, with a README so another developer can pick it up.",
  },
  {
    Icon: ShieldCheck,
    title: "Built to last",
    body: "Clean structure, sensible security defaults, and testing of the real user flow before handoff.",
  },
];

const STEPS = ["Discuss your idea", "Agree on scope & timeline", "Build with regular demos", "Launch & support"];

export default function Services({ index = 2, onNavigate }) {
  return (
    <div>
      <SectionHeader index={index} title="Services" />

      <motion.div
        className="max-w-2xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={fade}
      >
        <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          What I can bring to your project
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-muted">
          Whether you need a new product, a mobile app, or help with an existing system, I can
          take it from idea to a working, deployed app.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {SERVICES.map((service, i) => (
          <motion.article
            key={service.title}
            className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-foreground/30"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: (i % 3) * 0.06, ease }}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-subtle text-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
              <service.Icon size={19} strokeWidth={1.8} />
            </span>
            <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{service.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">{service.body}</p>
            <ul className="mt-auto flex flex-wrap gap-1.5 pt-5">
              {service.tags.map((t) => (
                <li key={t} className="rounded-md bg-subtle px-2 py-0.5 font-mono text-[11px] text-foreground/75">
                  {t}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>

      <div className="mt-6 grid gap-6 border-y border-border py-8 md:grid-cols-3">
        {PROMISES.map((p) => (
          <motion.div
            key={p.title}
            className="flex gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fade}
          >
            <p.Icon size={20} strokeWidth={1.7} className="mt-0.5 shrink-0 text-foreground" />
            <div>
              <h4 className="text-[15px] font-medium text-foreground">{p.title}</h4>
              <p className="mt-1 text-sm leading-relaxed text-muted">{p.body}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-6 flex flex-col gap-6 rounded-2xl bg-foreground p-6 text-background sm:p-8 lg:flex-row lg:items-center lg:justify-between"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={fade}
      >
        <div>
          <p className="font-display text-2xl font-semibold tracking-tight">Have a project in mind?</p>
          <ol className="mt-4 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[12px] text-background/70">
            {STEPS.map((step, i) => (
              <li key={step}>
                <span className="text-background">{String(i + 1).padStart(2, "0")}</span> {step}
              </li>
            ))}
          </ol>
        </div>
        <button
          type="button"
          onClick={() => onNavigate?.("contact")}
          className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-lg bg-background px-5 py-3 text-sm font-medium text-foreground transition-opacity hover:opacity-90 lg:self-auto"
        >
          Start a project
          <ArrowRight size={16} />
        </button>
      </motion.div>
    </div>
  );
}
