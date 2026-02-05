import { Skill } from "@/types/skill";
import { FaJs, FaReact, FaNodeJs, FaGitAlt, FaFigma } from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiMysql,
  SiPrisma,
  SiFlutter,
  SiKotlin,
  SiDart,
  SiExpress,
  SiDrizzle,
  SiNestjs,
  SiReactquery,
} from "react-icons/si";

export const SKILLS: Skill[] = [
  { label: "JavaScript", icon: FaJs, className: "hover:bg-yellow-400/5 hover:text-yellow-400" },
  { label: "TypeScript", icon: SiTypescript, className: "hover:bg-blue-600/5 hover:text-blue-600" },
  { label: "React", icon: FaReact, className: "hover:bg-cyan-400/5 hover:text-cyan-400" },
  { label: "Next.js", icon: SiNextdotjs, className: "hover:bg-neutral-400/10 hover:text-neutral-800" },
  { label: "Tailwind CSS", icon: SiTailwindcss, className: "hover:bg-sky-400/5 hover:text-sky-400" },
  { label: "Flutter", icon: SiFlutter, className: "hover:bg-sky-500/5 hover:text-sky-500" },
  { label: "Dart", icon: SiDart, className: "hover:bg-blue-400/5 hover:text-blue-400" },
  { label: "Kotlin", icon: SiKotlin, className: "hover:bg-purple-500/5 hover:text-purple-500" },
  { label: "Node.js", icon: FaNodeJs, className: "hover:bg-green-500/5 hover:text-green-500" },
  { label: "Express", icon: SiExpress, className: "hover:bg-neutral-400/5 hover:text-neutral-800" },
  { label: "NestJS", icon: SiNestjs, className: "hover:bg-red-500/5 hover:text-red-500" },
  { label: "Prisma ORM", icon: SiPrisma, className: "hover:bg-emerald-500/5 hover:text-emerald-500" },
  { label: "Drizzle ORM", icon: SiDrizzle, className: "hover:bg-lime-500/5 hover:text-lime-500" },
  { label: "TanStack Query", icon: SiReactquery, className: "hover:bg-red-400/5 hover:text-red-400" },
  { label: "MySQL", icon: SiMysql, className: "hover:bg-blue-600/5 hover:text-blue-600" },
  { label: "PostgreSQL", icon: SiPostgresql, className: "hover:bg-blue-700/5 hover:text-blue-700" },
  { label: "Git", icon: FaGitAlt, className: "hover:bg-orange-600/5 hover:text-orange-600" },
  { label: "Figma", icon: FaFigma, className: "hover:bg-pink-500/5 hover:text-pink-500" },
];
