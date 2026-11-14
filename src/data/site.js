import { projects } from "./projects";

export const profile = {
  name: "Christian Alicaba",
  fullName: "Christian Dave L. Alicaba",
  role: "Full-stack & mobile developer",
  location: "Philippines",
  email: "christiandave120702@gmail.com",
  phone: "+63 956 537 6522",
  github: "https://github.com/ChristianAlicaba2002",
  resume: "/Christian_Dave_L_Alicaba_Resume.pdf",
  highlight: "Best Overall Project · Hacktoberfest Cebu 2025",
};

export const experience = [
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

export const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Laravel", "ASP.NET Core", "FastAPI", "Express", "C#", "Supabase"],
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

export const techCount = skillGroups.reduce((n, g) => n + g.items.length, 0);

// Section ids double as scroll targets and sidebar entries.
export const NAV = {
  explore: [
    { id: "playground", label: "Playground", icon: "keyboard" },
    { id: "activity", label: "Activity", icon: "activity" },
  ],
  portfolio: [
    { id: "home", label: "Home", icon: "user" },
    { id: "projects", label: "Projects", icon: "folder", count: projects.length },
    { id: "services", label: "Services", icon: "sparkles" },
    { id: "journey", label: "Journey", icon: "briefcase", count: experience.length },
    { id: "stack", label: "Stack", icon: "layers", count: techCount },
    { id: "contact", label: "Contact", icon: "mail" },
  ],
};

export const SECTION_IDS = [...NAV.portfolio, ...NAV.explore].map((n) => n.id);
