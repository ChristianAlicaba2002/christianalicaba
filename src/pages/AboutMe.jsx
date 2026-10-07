import { motion } from "framer-motion";
import { SectionLabel } from "../components/ui";

const fade = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const experience = [
  {
    title: "Full-stack developer",
    period: "2026 — Present",
    body: "Building production web apps with React on the client and Laravel or ASP.NET Core on the server — auth, dashboards, and the APIs behind them.",
  },
  {
    title: "Hacktoberfest — FDA Checker",
    period: "2025",
    body: "Overall projects winner. A product for checking FDA-related information, built and shipped during the bootcamp.",
  },
  {
    title: "Hacktoberfest — ViCo Spaces",
    period: "2024",
    body: "Real-time co-working canvas with Vue 3, Firebase, Pinia, and Fabric.js. People could join a space and work on a shared board.",
  },
  {
    title: "Frontend",
    period: "2023 — 2026",
    body: "Interfaces for school and client tools: TypeScript, component-based UIs, and layouts that hold up on a phone as well as a desktop.",
  },
  {
    title: "Backend",
    period: "2022 — 2026",
    body: "REST APIs, Sanctum auth, MySQL and PostgreSQL, and the unglamorous work of keeping data consistent.",
  },
  {
    title: "Competitions",
    period: "2023",
    body: "Java and web development competitions at school — short, high-pressure builds that taught me to cut scope and ship.",
  },
];

export default function AboutMe() {
  return (
    <div className="w-full bg-background px-6 py-24 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          className="whoiam-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fade}
        >
          <SectionLabel>About</SectionLabel>
          <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            CS student who ships full-stack software
          </h2>
          <div className="mt-8 max-w-2xl space-y-5 text-[15px] leading-relaxed text-muted">
            <p>
              I&apos;m a Computer Science student at ACLC College of Mandaue (2023–2027)
              and I spend most of my time building things people actually use: equipment
              tracking for a campus, ordering systems, clinic software, and tournament brackets.
            </p>
            <p>
              I like the whole path — schema, API, then the screen. A lot of my work sits
              at that intersection: role-based access, records, and a UI that doesn&apos;t
              get in the way. I&apos;m comfortable in React and TypeScript, and on the
              server in Laravel, ASP.NET Core, and FastAPI.
            </p>
            <p>
              When I&apos;m not in class or on a project, I&apos;m usually in a bootcamp
              or an open-source sprint. Hacktoberfest has been a useful forcing function —
              ViCo Spaces in 2024, then FDA Checker in 2025, which won overall.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="experience-container mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fade}
        >
          <h3 className="text-sm font-medium text-foreground">Experience</h3>
          <div className="mt-8 divide-y divide-border border-t border-border">
            {experience.map((item) => (
              <div
                key={item.title}
                className="grid gap-1 py-8 sm:grid-cols-[11rem_1fr] sm:gap-10"
              >
                <p className="font-mono text-xs text-muted">{item.period}</p>
                <div>
                  <h4 className="text-sm font-medium text-foreground">{item.title}</h4>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="education-container mt-8 border-t border-border pt-8 sm:grid sm:grid-cols-[11rem_1fr] sm:gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fade}
        >
          <p className="font-mono text-xs text-muted">2023 — 2027</p>
          <div>
            <h3 className="text-sm font-medium text-foreground">Education</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">
              Bachelor of Science in Computer Science, ACLC College of Mandaue.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
