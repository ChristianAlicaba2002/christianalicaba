import taskMaster from "../assets/images/TaskMaster.webp";
import Technical from "../assets/images/aclc_mandaue.webp";
import poke from "../assets/images/pokevault.webp";
import CrustyBytes from "../assets/images/CrustyBytes.webp";
import QuanTum from "../assets/images/QuantumOrder.webp";
import Waste from "../assets/images/Waste.webp";
import Veteririan from "../assets/images/Veteririan.webp";
import Accounting from "../assets/images/Accounting.webp";
import Basketball from "../assets/images/Basketball_Tournament.webp";
import Hoopkids from "../assets/images/hoopkids.webp";

export const projects = [
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
  {
    id: 8,
    title: "Hoopkids Basketball Tournament",
    role: "full-stack",
    description:
      "Tournament manager for multiple categories and teams, with brackets from early rounds through to the final.",
    image: Hoopkids,
    technologies: ["React.js", "TanStack Query","TanStack Router", "Express.js", "PostgreSQL","Supabase"],
    github: "https://github.com/ChristianAlicaba2002/basketball-schedule",
    live: "https://hoopkids.pages.dev",
    featured: true,
  },
];
