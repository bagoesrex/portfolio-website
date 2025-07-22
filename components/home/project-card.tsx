import { Project } from "@/types/project";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
    project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="flex flex-col gap-2 border-b-2 border-primary/80 pb-3">
            <div className="flex flex-row justify-between">
                <h3 className="font-bold text-secondary">{project.title}</h3>
                <Link href={`/projects/${project.slug}`}>
                    <ChevronRight className="cursor-pointer hover:opacity-70 text-secondary" />
                </Link>
            </div>
            <p className="text-sm">{project.description}</p>
            <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                    <span key={tech} className="bg-gray-200/40 text-xs rounded px-2 py-1">
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
}