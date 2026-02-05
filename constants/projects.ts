import { Project, ProjectStatus } from "@/types/project";
import { FaArchive, FaCheck, FaClock } from "react-icons/fa";

export const DUMMY_PROJECTS: Project[] = [
  {
    title: "Personal Portfolio Website",
    description: "A personal portfolio highlighting projects, blog posts, and contact information.",
    status: "completed",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    coverImage: "/placeholder/main.svg",
    githubUrl: "https://github.com/bagoesrex/portfolio-website",
  },
  {
    title: "User Management Dashboard",
    description: "A full-stack dashboard for managing users with authentication and CRUD features.",
    status: "completed",
    techStack: ["Next.js", "Node.js", "Prisma", "PostgreSQL"],
    coverImage: "/placeholder/main.svg",
    githubUrl: "https://github.com/bagoesrex/portfolio-website",
  },
  {
    title: "AI Skin Detection App",
    description: "An AI-powered app for detecting facial skin conditions.",
    status: "in-progress",
    techStack: ["Machine Learning", "TensorFlow", "Python", "Cloud"],
    coverImage: "/placeholder/main.svg",
    githubUrl: "https://github.com/bagoesrex/portfolio-website",
  },
  {
    title: "Online Attendance System",
    description: "A location-based attendance system with an admin dashboard.",
    status: "completed",
    techStack: ["Next.js", "Express", "Map API"],
    coverImage: "/placeholder/main.svg",
    githubUrl: "https://github.com/bagoesrex/portfolio-website",
  },
  {
    title: "Chatbot Widget",
    description: "An embeddable chatbot widget integrated with a generative AI API.",
    status: "archived",
    techStack: ["Next.js", "shadcn/ui", "AI API"],
    coverImage: "/placeholder/main.svg",
    githubUrl: "https://github.com/bagoesrex/portfolio-website",
  },
];

export const PROJECT_STATUS_CONFIG: Record<
  ProjectStatus,
  {
    label: string;
    icon: React.ElementType;
    className: string;
  }
> = {
  completed: {
    label: "Completed",
    icon: FaCheck,
    className: "text-green-600 bg-green-500/10",
  },
  "in-progress": {
    label: "In Progress",
    icon: FaClock,
    className: "text-yellow-600 bg-yellow-500/10",
  },
  archived: {
    label: "Archived",
    icon: FaArchive,
    className: "text-muted-foreground bg-muted",
  },
};
