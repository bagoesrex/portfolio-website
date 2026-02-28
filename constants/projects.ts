import { Project, ProjectStatus, ProjectVariant } from "@/types/project";
import { FaArchive, FaCheck, FaClock } from "react-icons/fa";

export const DUMMY_PROJECTS: Project[] = [
  // {
  //   title: "Personal Portfolio Website",
  //   description: "A personal portfolio highlighting projects, blog posts, and contact information.",
  //   status: "completed",
  //   techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
  //   coverImage: "/placeholder/main.svg",
  //   githubUrl: "https://github.com/bagoesrex/portfolio-website",
  //   variant: "blue"
  // },
  {
    title: "SkinCure",
    description: "An AI-powered app for detecting facial skin conditions.",
    status: "completed",
    techStack: ["Kotlin", "Cloud", "Tensor Flow"],
    coverImage: "/icons/projects/skincure.svg",
    githubUrl: "https://github.com/bagoesrex/skincure",
    variant: "skyblue",
  },
  {
    title: "CatatIn",
    description: "an AI-powered income management application for service business owners.",
    status: "in-progress",
    techStack: ["Next.js", "Nest.js", "Gemini API", "Tailwind CSS"],
    coverImage: "/icons/projects/catatin.webp",
    githubUrl: "https://github.com/bagoesrex/catatin-mvp",
    variant: "blue",
  },
  {
    title: "Whatsapp Personal Bot",
    description: "A personal WhatsApp automation bot built with Node.js for sending customized messages and managing chats via WhatsApp Web.",
    status: "completed",
    techStack: ["Node.js", "Whatsapp-web.js", "Gemini API"],
    coverImage: "/icons/projects/whatsapp-bot.webp",
    githubUrl: "https://github.com/bagoesrex/wa-personal-bot",
    variant: "green",
  },
  {
    title: "Terminal Portfolio",
    description: "A terminal-style developer portfolio website to showcase projects and skills in a unique, interactive interface.",
    status: "completed",
    techStack: ["Vite", "React.js", "Tailwind CSS"],
    coverImage: "/icons/projects/terminal.webp",
    githubUrl: "https://github.com/bagoesrex/terminal-portfolio",
    variant: "purple",
  },
  // {
  //   title: "AI Skin Detection App",
  //   description: "An AI-powered app for detecting facial skin conditions.",
  //   status: "in-progress",
  //   techStack: ["Machine Learning", "TensorFlow", "Python", "Cloud"],
  //   coverImage: "/placeholder/main.svg",
  //   githubUrl: "https://github.com/bagoesrex/portfolio-website",
  //   variant: "blue"
  // },
  // {
  //   title: "Online Attendance System",
  //   description: "A location-based attendance system with an admin dashboard.",
  //   status: "completed",
  //   techStack: ["Next.js", "Express", "Map API"],
  //   coverImage: "/placeholder/main.svg",
  //   githubUrl: "https://github.com/bagoesrex/portfolio-website",
  //   variant: "blue"
  // },
  // {
  //   title: "Chatbot Widget",
  //   description: "An embeddable chatbot widget integrated with a generative AI API.",
  //   status: "archived",
  //   techStack: ["Next.js", "shadcn/ui", "AI API"],
  //   coverImage: "/placeholder/main.svg",
  //   githubUrl: "https://github.com/bagoesrex/portfolio-website",
  //   variant: "blue"
  // },
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
    className: "text-green-600 bg-green-500/10 border-green-600",
  },
  "in-progress": {
    label: "In Progress",
    icon: FaClock,
    className: "text-yellow-600 bg-yellow-500/10 border-yellow-600",
  },
  archived: {
    label: "Archived",
    icon: FaArchive,
    className: "text-muted-foreground bg-muted border-muted-foreground",
  },
};

export const PROJECT_VARIANT_STYLES: Record<
  ProjectVariant,
  {
    iconBg: string;
    hoverBg: string;
  }
> = {
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
};
