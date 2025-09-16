import UsesCard from "../shared/uses-card";
import { SiDart, SiExpress, SiFigma, SiFlutter, SiGit, SiGradle, SiJavascript, SiKotlin, SiMongodb, SiMysql, SiNextdotjs, SiNpm, SiPostgresql, SiPrettier, SiPrisma, SiRailway, SiReact, SiTailwindcss, SiTypescript, SiVercel, SiVite } from "react-icons/si";

const languagesItems = [
    {
        icon: <SiJavascript size={35} />,
        title: "JavaScript",
    },
    {
        icon: <SiTypescript size={35} />,
        title: "TypeScript",
    },
    {
        icon: <SiKotlin size={35} />,
        title: "Kotlin",
    },
    {
        icon: <SiDart size={35} />,
        title: "Dart",
    },
];

const frameworksItems = [
    {
        icon: <SiTailwindcss size={35} />,
        title: "Tailwind CSS",
    },
    {
        icon: <SiReact size={35} />,
        title: "React.js",
    },
    {
        icon: <SiNextdotjs size={35} />,
        title: "Next.js",
    },
    {
        icon: <SiFlutter size={35} />,
        title: "Flutter",
    },
    {
        icon: <SiExpress size={35} />,
        title: "Express.js",
    },
    {
        icon: <SiPrisma size={35} />,
        title: "PrismaORM",
    },
    {
        icon: <SiMysql size={35} />,
        title: "MySQL",
    },
    {
        icon: <SiPostgresql size={35} />,
        title: "PostgreSQL",
    },
    {
        icon: <SiMongodb size={35} />,
        title: "MongoDB",
    },
]

const toolsItems = [
    {
        icon: <SiGit size={35} />,
        title: "Git",
    },
    {
        icon: <SiFigma size={35} />,
        title: "Figma",
    },
    {
        icon: <SiPrettier size={35} />,
        title: "Prettier",
    },
    {
        icon: <SiNpm size={35} />,
        title: "Npm",
    },
    {
        icon: <SiVercel size={35} />,
        title: "Vercel",
    },
    {
        icon: <SiRailway size={35} />,
        title: "Railway",
    },
    {
        icon: <SiVite size={35} />,
        title: "Vite",
    },
    {
        icon: <SiGradle size={35} />,
        title: "Gradle",
    },
]

export default function CodingTab() {
    return (
        <section className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
                <h2 className="text-xl md:text-2xl font-extrabold text-primary">
                    Coding Languages
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                    {languagesItems.map((item, index) => (
                        <UsesCard key={index} icon={item.icon} title={item.title} />
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <h2 className="text-xl md:text-2xl font-extrabold text-primary">
                    Coding Frameworks / Libraries / Databases
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                    {frameworksItems.map((item, index) => (
                        <UsesCard key={index} icon={item.icon} title={item.title} />
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <h2 className="text-xl md:text-2xl font-extrabold text-primary">
                    Coding Tools / Utilities
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                    {toolsItems.map((item, index) => (
                        <UsesCard key={index} icon={item.icon} title={item.title} />
                    ))}
                </div>
            </div>
        </section>
    )
}