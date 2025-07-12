import MarqueeCard from "../ui/marquee-card";
import { IoLogoJavascript } from "react-icons/io5";
import { SiDart, SiFlutter, SiKotlin, SiNextdotjs, SiReact, SiTailwindcss, SiTypescript, SiFirebase, SiSupabase, SiGithub, SiGit, SiPostgresql, SiVercel, SiDocker } from "react-icons/si";

const TopMarqueeItems = [
    {
        id: 1,
        icon: <IoLogoJavascript size={24} />,
        title: "JavaScript",
        description: "Dynamic Web Language",
    },
    {
        id: 2,
        icon: <SiTypescript size={24} />,
        title: "TypeScript",
        description: "Typed JavaScript Superset",
    },
    {
        id: 3,
        icon: <SiReact size={24} />,
        title: "React",
        description: "UI Library by Meta",
    },
    {
        id: 4,
        icon: <SiTailwindcss size={24} />,
        title: "Tailwind CSS",
        description: "Utility-first CSS Framework",
    },
    {
        id: 5,
        icon: <SiKotlin size={24} />,
        title: "Kotlin",
        description: "Modern JVM Language",
    },
    {
        id: 6,
        icon: <SiDart size={24} />,
        title: "Dart",
        description: "Flutter's Core Language",
    },
    {
        id: 7,
        icon: <SiFlutter size={24} />,
        title: "Flutter",
        description: "Cross-platform UI Toolkit",
    },
    {
        id: 8,
        icon: <SiNextdotjs size={24} />,
        title: "Next.js",
        description: "React Full-stack Framework",
    },
];

const BottomMarqueeItems = [
    {
        id: 1,
        icon: <SiFirebase size={24} />,
        title: "Firebase",
        description: "Backend as a Service",
    },
    {
        id: 2,
        icon: <SiSupabase size={24} />,
        title: "Supabase",
        description: "Open Source Firebase",
    },
    {
        id: 3,
        icon: <SiGithub size={24} />,
        title: "GitHub",
        description: "Code Collaboration",
    },
    {
        id: 4,
        icon: <SiGit size={24} />,
        title: "Git",
        description: "Version Control System",
    },
    {
        id: 5,
        icon: <SiPostgresql size={24} />,
        title: "PostgreSQL",
        description: "Relational Database",
    },
    {
        id: 6,
        icon: <SiVercel size={24} />,
        title: "Vercel",
        description: "Frontend Deployment",
    },
    {
        id: 7,
        icon: <SiDocker size={24} />,
        title: "Docker",
        description: "Container Platform",
    },
];


export default function TechStackMarquee() {
    return (
        <>
            <MarqueeCard items={TopMarqueeItems} speed={40} />
            <MarqueeCard items={BottomMarqueeItems} speed={40} direction="right" />
        </>
    )
}