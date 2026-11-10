import { Project, ProjectVariant } from "@/types/project";

export const PROJECTS: Project[] = [
  {
    title: "SkinCure",
    description: "AI-powered facial skin condition detector.",
    longDescription:
      "SkinCure is an Android application that uses AI to detect facial skin conditions.",
    status: "completed",
    techStack: ["Kotlin", "Cloud", "Tensor Flow"],
    coverImage: "/icons/projects/skincure.svg",
    githubUrl: "https://github.com/bagoesrex/skincure",
    variant: "skyblue",
  },
  {
    title: "OpenMi",
    description: "Multi-account Xiaomi bootloader unlock automation platform.",
    longDescription:
      "OpenMi is a multi-account management and automation platform for monitoring and registering Xiaomi bootloader unlock quotas.",
    status: "completed",
    techStack: ["Bun", "ElysiaJS", "React.js", "SQLite", "Tailwind CSS"],
    coverImage: "/icons/projects/openmi.svg",
    githubUrl: "https://github.com/bagoesrex/openmi",
    variant: "darkOrange",
  },
  {
    title: "Fesnuk Automation",
    description: "Self-hosted Facebook group auto-poster with anti-detection.",
    longDescription:
      "Fesnuk Automation is a self-hosted system for scheduling and posting text and images to multiple Facebook Groups, using anti-detection browser automation.",
    status: "completed",
    techStack: [
      "Express.js",
      "Prisma",
      "Playwright",
      "React.js",
      "Tailwind CSS",
    ],
    coverImage: "/icons/projects/fesnuk.svg",
    githubUrl: "https://github.com/bagoesrex/fesnuk-automation",
    variant: "darkBlue",
  },
  {
    title: "Keluargaku Analytics",
    description: "Inventory analytics platform for pharmacy stock forecasting.",
    longDescription:
      "Keluargaku Analytics is a Django-based platform for a pharmacy that unifies three prediction systems on shared warehouse data.",
    status: "in-progress",
    techStack: ["Django", "Python", "MySQL", "Scikit-learn"],
    coverImage: "/icons/projects/keluargaku.webp",
    githubUrl: "https://github.com/bagoesrex/keluargaku-analytics",
    variant: "darkgreen",
  },
  {
    title: "The Regret Wall",
    description: "A wall for anonymously pinning regrets.",
    longDescription:
      "The Regret Wall is a simple web app for pinning your regrets on a wall.",
    status: "completed",
    techStack: ["Next.js", "Drizzle ORM", "Supabase"],
    coverImage: "/icons/projects/the-regret-wall.webp",
    githubUrl: "https://github.com/bagoesrex/the-regret-wall",
    variant: "orange",
  },
  {
    title: "Whatsapp Personal Bot",
    description: "Personal WhatsApp automation bot.",
    longDescription:
      "A personal WhatsApp automation bot built with Node.js on top of whatsapp-web.js.",
    status: "completed",
    techStack: ["Node.js", "Whatsapp-web.js", "Gemini API"],
    coverImage: "/icons/projects/whatsapp-bot.webp",
    githubUrl: "https://github.com/bagoesrex/wa-personal-bot",
    variant: "green",
  },
  {
    title: "Terminal Portfolio",
    description: "Terminal-style developer portfolio site.",
    longDescription:
      "A terminal-style developer portfolio website built with React and Vite to showcase projects and skills through a unique.",
    status: "completed",
    techStack: ["Vite", "React.js", "Tailwind CSS"],
    coverImage: "/icons/projects/terminal.webp",
    githubUrl: "https://github.com/bagoesrex/terminal-portfolio",
    variant: "purple",
  },
  {
    title: "CatatIn",
    description: "AI-powered income tracker for service businesses.",
    longDescription:
      "CatatIn is an AI-powered income management app for owners of service-based businesses.",
    status: "in-progress",
    techStack: ["Next.js", "Nest.js", "Gemini API", "Tailwind CSS"],
    coverImage: "/icons/projects/catatin.webp",
    githubUrl: "https://github.com/bagoesrex/catatin-mvp",
    variant: "blue",
  },
  {
    title: "Keonk Studio",
    description: "Independent Roblox game development studio.",
    longDescription:
      "Keonk Studio is an independent game development studio focused on creating immersive and creative experiences using Luau and Roblox Studio.",
    status: "in-progress",
    techStack: ["Luau", "Games", "Roblox Studio"],
    coverImage: "/icons/projects/keonk-studio.svg",
    githubUrl: "https://github.com/keonkstudio",
    variant: "gray",
  },
];

export const PROJECT_VARIANT_STYLES: Record<
  ProjectVariant,
  {
    iconBg: string;
    hoverBg: string;
  }
> = {
  gray: {
    iconBg: "bg-[#F6F1F1]",
    hoverBg: "hover:bg-[#F6F1F1]",
  },
  skyblue: {
    iconBg: "bg-[#EFFAFA]",
    hoverBg: "hover:bg-[#EFFAFA]",
  },
  green: {
    iconBg: "bg-[#E7FFE9]",
    hoverBg: "hover:bg-[#E7FFE9]",
  },
  darkgreen: {
    iconBg: "bg-[#D6F0DA]",
    hoverBg: "hover:bg-[#D6F0DA]",
  },
  purple: {
    iconBg: "bg-[#FFE4FB]",
    hoverBg: "hover:bg-[#FFE4FB]",
  },
  blue: {
    iconBg: "bg-[#EAEFF9]",
    hoverBg: "hover:bg-[#EAEFF9]",
  },
  darkBlue: {
    iconBg: "bg-[#D3DEF3]",
    hoverBg: "hover:bg-[#D3DEF3]",
  },
  orange: {
    iconBg: "bg-[#FFE4CA]",
    hoverBg: "hover:bg-[#FFE4CA]",
  },
  darkOrange: {
    iconBg: "bg-[#FFD0A1]",
    hoverBg: "hover:bg-[#FFD0A1]",
  },
};
