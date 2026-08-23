import { Project } from "@/types/project";

export const PROJECTS: Project[] = [
  {
    title: "SkinCure",
    description: "An AI-powered app for detecting facial skin conditions.",
    status: "completed",
    techStack: ["Kotlin", "Cloud", "Tensor Flow"],
    coverImage: "/icons/projects/skincure.svg",
    githubUrl: "https://github.com/bagoesrex/skincure",
  },
  {
    title: "Keonk Studio",
    description:
      "An independent game development studio focused on creating immersive and creative experiences using Luau and Roblox Studio.",
    status: "in-progress",
    techStack: ["Luau", "Games", "Roblox Studio"],
    coverImage: "/icons/projects/keonk-studio.svg",
    githubUrl: "https://github.com/keonkstudio",
  },
  {
    title: "The Regret Wall",
    description:
      "A web app for sharing regrets through short notes and simple browser-based drawings",
    status: "completed",
    techStack: ["Next.js", "Drizzle ORM", "Supabase"],
    coverImage: "/icons/projects/the-regret-wall.webp",
    githubUrl: "https://github.com/bagoesrex/the-regret-wall",
  },
];
