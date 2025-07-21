import Link from "next/link";
import { Project } from "@/types/project";
import { Card, CardContent } from "../ui/card";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Link href={`/projects/${project.slug}`}>
            <Card className="hover:shadow-md transition rounded-none bg-white/70">
                <CardContent className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{project.description}</p>
                    <p className="text-xs text-gray-400 mt-2">{project.date}</p>
                </CardContent>
            </Card>
        </Link>
    );
}
