import { motion } from "framer-motion";
import { SectionLabel } from "../components/ui";
import GithubStats from "../components/GithubStats";

const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Laravel", "ASP.NET Core", "FastAPI", "Express", "PHP", "C#", "Python"],
  },
  {
    title: "Mobile & data",
    items: ["React Native (Expo)", "MySQL", "PostgreSQL", "Firebase", "Microsoft SQL Server"],
  },
  {
    title: "Tools",
    items: ["Git", "Docker", "TanStack Query", "Figma", "Jira"],
  },
];

const workflow = [
  {
    step: "01",
    title: "Scope",
    body: "Clarify who the product is for, what has to ship, and what can wait. I write this down before opening an editor.",
  },
  {
    step: "02",
    title: "Structure",
    body: "Decide the stack, data model, and screens. For school and ops tools that usually means auth, roles, and a clean admin path.",
  },
  {
    step: "03",
    title: "Build",
    body: "Implement the client and API together so the UI stays honest to the data. I keep components small and the backend predictable.",
  },
  {
    step: "04",
    title: "Ship",
    body: "Deploy, check the real flow, and fix what only shows up in use — then leave it in a state someone else can maintain.",
  },
];

const fade = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Dashboard() {
  return (
    <div className="w-full bg-background px-6 py-24 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fade}
        >
          <SectionLabel>Skills</SectionLabel>
          <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            The tools I use to ship products
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
            I work across the stack. Most projects start in React or Next.js on the client,
            with Laravel or ASP.NET Core on the server.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-12 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fade}
            >
              <h3 className="text-sm font-medium text-foreground">{group.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">
                {group.items.join(", ")}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fade}
        >
          <GithubStats />
        </motion.div>

        <motion.div
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fade}
        >
          <SectionLabel>Process</SectionLabel>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            How a project usually goes
          </h2>
        </motion.div>

        <div className="mt-12 divide-y divide-border border-y border-border">
          {workflow.map((item) => (
            <motion.div
              key={item.step}
              className="grid gap-2 py-8 sm:grid-cols-[4rem_8rem_1fr] sm:gap-8 sm:py-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fade}
            >
              <p className="font-mono text-xs text-muted">{item.step}</p>
              <h3 className="text-sm font-medium text-foreground">{item.title}</h3>
              <p className="text-[15px] leading-relaxed text-muted">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
