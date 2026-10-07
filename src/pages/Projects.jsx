import { motion } from "framer-motion";
import taskMaster from "../assets/images/TaskMaster.webp";
import Technical from "../assets/images/aclc_mandaue.webp";
import poke from "../assets/images/pokevault.webp";
import CrustyBytes from "../assets/images/CrustyBytes.webp";
import QuanTum from "../assets/images/QuantumOrder.webp";
import Waste from "../assets/images/Waste.webp";
import Veteririan from "../assets/images/Veteririan.webp";
import Accounting from "../assets/images/Accounting.webp";
import Basketball from "../assets/images/Basketball_Tournament.webp";
import { Github, ArrowUpRight } from "lucide-react";
import { SectionLabel } from "../components/ui";

const fade = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const projects = [
  {
    id: 10,
    title: "ACLC Mandaue Technical System",
    role: "Full-stack",
    description:
      "Campus inventory for HDMI cables, projectors, laptops, and other gear. Staff can log items, track who borrowed what, and close the loop when equipment comes back.",
    image: Technical,
    technologies: ["React", "TypeScript", "TanStack Query", "ASP.NET Core"],
    github: "https://github.com/Technical-Assets-Management-CS31A",
    live: "https://aclc-mandaue-technical-system.pages.dev/",
    featured: true,
  },
  {
    id: 9,
    title: "PokeVault",
    role: "Frontend",
    description:
      "A Pokédex that pulls live data from the Pokémon API — search, stats, types, abilities, and evolutions — without the usual clutter.",
    image: poke,
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/ChristianAlicaba2002/PokeVault",
    live: "https://pokevault-ae3.pages.dev",
    featured: true,
  },
  {
    id: 12,
    title: "FDA Checker",
    role: "Hacktoberfest 2025",
    description:
      "Totoo Ba Ito? — Best Overall Project at Hacktoberfest Cebu 2025. An AI-powered checker for products and industries against official FDA datasets. I built the web frontend.",
    image: "https://raw.githubusercontent.com/Neil-urk12/totoo-ba-web/main/src/assets/fda_logo.webp",
    technologies: ["React", "TypeScript", "FastAPI", "Flutter"],
    github: "https://github.com/Neil-urk12/totoo-ba",
    live: "https://totoo-ba.pages.dev/",
    featured: true,
  },
  {
    id: 1,
    title: "Quantum Ordering",
    role: "Full-stack",
    description:
      "E-commerce ordering with customer accounts, payments, and an admin dashboard for catalog and order management.",
    image: QuanTum,
    technologies: ["Laravel", "MySQL", "Sanctum"],
    github: "https://github.com/ChristianAlicaba2002/Quantum_Order",
    featured: true,
  },
  {
    id: 8,
    title: "ViCo Spaces",
    role: "Collaboration",
    description:
      "Shared co-working canvas. Students and teams join a room, sketch, and work on the same board in real time.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop",
    technologies: ["Vue 3", "Firebase", "Pinia", "Fabric.js"],
    github: "https://github.com/Neil-urk12/ViCoSpaces",
    featured: true,
  },
  {
    id: 2,
    title: "Task Master",
    role: "Full-stack",
    description:
      "A focused to-do app: React client, Hono API, Firebase auth, and PostgreSQL for the lists themselves.",
    image: taskMaster,
    technologies: ["React", "Hono", "Firebase", "PostgreSQL"],
    github: "https://github.com/ChristianAlicaba2002/Task-Master",
  },
  {
    id: 11,
    title: "Basketball Tournament",
    role: "Full-stack",
    description:
      "Tournament manager for multiple categories and teams, with brackets from early rounds through to the final.",
    image: Basketball,
    technologies: ["React", "TanStack Query", "ASP.NET Core", "SQL Server"],
    github: "https://github.com/ChristianAlicaba2002/Basketball_Tournament-Frontend",
  },
  {
    id: 3,
    title: "CrustyBytes",
    role: "Full-stack",
    description:
      "Pizza ordering for a restaurant: menu, custom builds, and checkout, with a TypeScript React front end and Firebase.",
    image: CrustyBytes,
    technologies: ["React", "TypeScript", "Firebase", "MySQL"],
    github: "https://github.com/ChristianAlicaba2002/CrustyBytes",
  },
  {
    id: 4,
    title: "QuickBuy",
    role: "Full-stack",
    description:
      "Ordering flow for browsing products, placing orders, and moving a purchase through without extra steps.",
    image: "https://d6xcmfyh68wv8.cloudfront.net/learn-content/uploads/2024/09/Quick-Buy-banner-e-commerce-trends-1024x576.jpg",
    technologies: ["React", "TypeScript", "Laravel", "MySQL"],
    github: "https://github.com/ChristianAlicaba2002/QuickBuy",
  },
  {
    id: 5,
    title: "Veterinarian System",
    role: "Full-stack",
    description:
      "Clinic software for appointments, medical records, and pet profiles, with role-based access for staff and owners.",
    image: Veteririan,
    technologies: ["Next.js", "TypeScript", "MySQL"],
    github: "https://github.com/ChristianAlicaba2002/Veterinarian_System_FrontEnd",
  },
  {
    id: 6,
    title: "Waste Segregation",
    role: "Backend",
    description:
      "Classification and tracking for biodegradable, recyclable, and hazardous waste so disposal is recorded, not guessed.",
    image: Waste,
    technologies: ["Laravel", "MySQL", "Sanctum"],
    github: "https://github.com/ChristianAlicaba2002/Waste_Segregation",
  },
  {
    id: 7,
    title: "Accounting System",
    role: "Backend",
    description:
      "Ledger for income, expenses, assets, and liabilities — a structured place to record and review financial activity.",
    image: Accounting,
    technologies: ["Laravel", "MySQL"],
    github: "https://github.com/ChristianAlicaba2002/Accounting_System",
  },
];

function ProjectLinks({ project, className = "mt-4" }) {
  return (
    <div className={`flex gap-5 text-sm ${className}`}>
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground"
      >
        <Github size={14} strokeWidth={1.8} />
        Code
      </a>
      {project.live ? (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-muted underline decoration-border underline-offset-4 hover:text-foreground hover:decoration-foreground"
        >
          <ArrowUpRight size={14} strokeWidth={1.8} />
          Live
        </a>
      ) : null}
    </div>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <div className="w-full bg-background px-6 py-24 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          className="projects-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fade}
        >
          <SectionLabel>Work</SectionLabel>
          <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Selected projects
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
            School systems, ordering products, and a few experiments. Most are full-stack;
            a couple are live.
          </p>
        </motion.div>

        <div className="feature-container mt-16 space-y-16">
          {featured.map((project) => (
            <motion.article
              key={project.id}
              className="grid items-start gap-8 lg:grid-cols-[1.1fr_1fr]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fade}
            >
              <div className="overflow-hidden border border-border">
                <img
                  src={project.image}
                  alt={project.title}
                  className="aspect-[16/10] w-full object-cover"
                />
              </div>
              <div>
                <p className="text-xs text-muted">{project.role}</p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-foreground">
                  {project.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  {project.description}
                </p>
                <p className="mt-4 text-xs text-muted">{project.technologies.join(" · ")}</p>
                <ProjectLinks project={project} />
              </div>
            </motion.article>
          ))}
        </div>

        <div className="allProjects-container mt-24">
          <h3 className="text-sm font-medium text-foreground">More work</h3>
          <div className="mt-8 divide-y divide-border border-t border-border">
            {rest.map((project) => (
              <motion.article
                key={project.id}
                className="grid grid-cols-[4.5rem_1fr] items-start gap-4 py-8 sm:grid-cols-[4.5rem_1fr] sm:gap-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fade}
              >
                <img
                  src={project.image}
                  alt=""
                  className="h-14 w-[4.5rem] object-cover"
                />
                <div>
                  <p className="text-xs text-muted">{project.role}</p>
                  <h4 className="mt-1 text-sm font-medium text-foreground">{project.title}</h4>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{project.description}</p>
                  <p className="mt-3 text-xs text-muted">{project.technologies.join(" · ")}</p>
                  <ProjectLinks project={project} />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
