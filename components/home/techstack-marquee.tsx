import MarqueeCard from "../ui/marquee-card";
import { SiDart, SiFlutter, SiKotlin, SiNextdotjs, SiReact, SiTailwindcss, SiTypescript, SiFirebase, SiSupabase, SiGithub, SiGit, SiPostgresql, SiVercel, SiDocker, SiJavascript } from "react-icons/si";

const TopMarqueeItems = [
    { id: 1, icon: <SiJavascript size={20} className="text-yellow-500" />, title: "JavaScript", description: "Web Scripting" },
    { id: 2, icon: <SiTypescript size={20} className="text-blue-500" />, title: "TypeScript", description: "Typed JS" },
    { id: 3, icon: <SiReact size={20} className="text-sky-400" />, title: "React", description: "UI Library" },
    { id: 4, icon: <SiTailwindcss size={20} className="text-cyan-500" />, title: "Tailwind CSS", description: "Utility CSS" },
    { id: 5, icon: <SiKotlin size={20} className="text-purple-500" />, title: "Kotlin", description: "Modern JVM" },
    { id: 6, icon: <SiDart size={20} className="text-cyan-600" />, title: "Dart", description: "Flutter Lang" },
    { id: 7, icon: <SiFlutter size={20} className="text-blue-400" />, title: "Flutter", description: "UI Toolkit" },
    { id: 8, icon: <SiNextdotjs size={20} className="text-black" />, title: "Next.js", description: "Full-stack React" },
];

const BottomMarqueeItems = [
    { id: 1, icon: <SiFirebase size={20} className="text-yellow-400" />, title: "Firebase", description: "BaaS" },
    { id: 2, icon: <SiSupabase size={20} className="text-green-500" />, title: "Supabase", description: "Open Firebase" },
    { id: 3, icon: <SiGithub size={20} className="text-black" />, title: "GitHub", description: "Collab & Code" },
    { id: 4, icon: <SiGit size={20} className="text-orange-500" />, title: "Git", description: "Versioning" },
    { id: 5, icon: <SiPostgresql size={20} className="text-blue-800" />, title: "PostgreSQL", description: "SQL DB" },
    { id: 6, icon: <SiVercel size={20} className="text-black" />, title: "Vercel", description: "Deploy Frontend" },
    { id: 7, icon: <SiDocker size={20} className="text-blue-500" />, title: "Docker", description: "Containers" },
];

export default function TechStackMarquee() {
    return (
        <div className="relative h-35">
            <MarqueeCard items={TopMarqueeItems} speed={30} />
            <MarqueeCard items={BottomMarqueeItems} speed={30} direction="right" />
        </div>
    )
}