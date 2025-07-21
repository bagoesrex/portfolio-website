import { ChevronRight } from "lucide-react";

interface ProjectCardProps {
    title: string;
    description: string;
    techStack: string[];
};

export default function ProjectCard({ title, description, techStack }: ProjectCardProps) {
    return (
        <div className="flex flex-col gap-2 border-b-2 border-gray-500 pb-5">
            <div className="flex flex-row justify-between">
                <h3 className="font-bold">{title}</h3>
                <ChevronRight />
            </div>
            <p className="text-sm">{description}</p>
            <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                    <span key={tech} className="bg-gray-200 text-xs rounded px-2 py-1">
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
}