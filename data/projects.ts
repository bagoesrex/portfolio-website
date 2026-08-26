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
  purple: {
    iconBg: "bg-[#FFE4FB]",
    hoverBg: "hover:bg-[#FFE4FB]",
  },
  blue: {
    iconBg: "bg-[#EAEFF9]",
    hoverBg: "hover:bg-[#EAEFF9]",
  },
  orange: {
    iconBg: "bg-[#FFE4CA]",
    hoverBg: "hover:bg-[#FFE4CA]",
  },
};
