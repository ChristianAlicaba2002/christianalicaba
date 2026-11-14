import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { experience } from "../data/site";
import { SectionHeader } from "../components/ui";
import { fade } from "../components/motion";

export default function AboutMe({ index = 2 }) {
  return (
    <div>
      <SectionHeader index={index} title="Journey" />

      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fade}
        >
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            CS student who ships full-stack software
          </h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted">
            <p>
              I&apos;m a Computer Science student at ACLC College of Mandaue (2023–2027)
              and I spend most of my time building things people actually use: equipment
              tracking for a campus, ordering systems, clinic software, and tournament brackets.
            </p>
            <p>
              I like the whole path — schema, API, then the screen. A lot of my work sits
              at that intersection: role-based access, records, and a UI that doesn&apos;t
              get in the way.
            </p>
            <p>
              Hacktoberfest has been a useful forcing function — ViCo Spaces in 2024, then
              FDA Checker in 2025, which won overall.
            </p>
          </div>

          <div className="mt-8 flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-subtle text-foreground">
              <GraduationCap size={18} strokeWidth={1.8} />
            </span>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">2023 — 2027</p>
              <p className="mt-1 text-[15px] font-medium text-foreground">BS Computer Science</p>
              <p className="text-sm text-muted">ACLC College of Mandaue</p>
            </div>
          </div>
        </motion.div>

        <ol className="relative border-l border-border">
          {experience.map((item) => (
            <motion.li
              key={item.title}
              className="relative pb-9 pl-7 last:pb-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fade}
            >
              <span className="absolute top-1.5 -left-[5px] h-2.5 w-2.5 rounded-full border-2 border-background bg-foreground" />
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">{item.period}</p>
              <h3 className="mt-1.5 font-display text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-muted">{item.body}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </div>
  );
}
