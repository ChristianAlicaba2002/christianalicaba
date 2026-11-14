import { motion } from "framer-motion";
import { skillGroups } from "../data/site";
import { SectionHeader } from "../components/ui";
import { fade } from "../components/motion";

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

export default function Dashboard({ index = 3 }) {
  return (
    <div>
      <SectionHeader index={index} title="Stack" />

      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <motion.div
            key={group.title}
            className="rounded-2xl border border-border bg-card p-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fade}
          >
            <div className="flex items-baseline justify-between">
              <h3 className="font-display text-lg font-semibold text-foreground">{group.title}</h3>
              <span className="font-mono text-xs text-muted">{group.items.length}</span>
            </div>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-border px-3 py-1 text-sm text-foreground/85"
                >
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.h3
        className="mt-16 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={fade}
      >
        How a project usually goes
      </motion.h3>

      <div className="mt-6 grid border-y border-border sm:grid-cols-2 lg:grid-cols-4">
        {workflow.map((item, i) => (
          <motion.div
            key={item.step}
            className={`py-6 sm:px-5 sm:first:pl-0 ${i > 0 ? "border-t border-border sm:border-t-0" : ""} ${
              i % 2 === 1 ? "sm:border-l" : ""
            } ${i >= 2 ? "sm:border-t lg:border-t-0" : ""} ${i > 0 ? "lg:border-l" : ""} sm:[&:nth-child(3)]:pl-0 lg:[&:nth-child(3)]:pl-5`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fade}
          >
            <p className="font-mono text-xs text-muted">{item.step}</p>
            <h4 className="mt-2 font-display text-lg font-semibold text-foreground">{item.title}</h4>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">{item.body}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
