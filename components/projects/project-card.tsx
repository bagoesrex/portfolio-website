import Link from "next/link";
import { Project } from "@/types/project";
import { Card, CardContent } from "../ui/card";
import { Clock } from "lucide-react";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Card className="hover:shadow-md transition rounded-none bg-white/70 p-0">
            <Link href={`/projects/${project.slug}`}>
                <CardContent className="flex flex-col py-3 gap-3">
                    <div className="flex flex-col gap-1">
                        <h3 className="text-lg font-semibold text-secondary">{project.title}</h3>
                        <div className="flex flex-row items-center gap-2 text-foreground/70">
                            <Clock size={12} />
                            <p className="text-xs">{project.date}</p>
                        </div>
                    </div>
                    <p className="text-sm mt-1 line-clamp-3">{project.description}</p>
                    <div className="flex gap-2">
                        {project.techStack.map((tech) => (
                            <span key={tech} className="bg-gray-200/40 text-xs rounded px-2 py-1">
                                {tech}
                            </span>
                        ))}
                    </div>
                </CardContent>
            </Link>
        </Card>
    );
}
