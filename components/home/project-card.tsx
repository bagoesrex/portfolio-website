import { ChevronRight } from "lucide-react";
import { PortableText } from "next-sanity";
import Link from "next/link";

interface ProjectCardProps {
    slug: string;
    title: string;
    date: string;
    body: Array<any>;
    techStack: Array<string>;
}

export default function ProjectCard({ slug, title, date, body, techStack }: ProjectCardProps) {
    return (
        <div className="flex flex-col gap-2 border-b-2 border-primary/80 pb-3">
            <div className="flex flex-row justify-between">
                <h3 className="font-bold text-secondary">{title}</h3>
                <Link href={`/projects/${slug}`}>
                    <ChevronRight className="cursor-pointer hover:opacity-70 text-secondary" />
                </Link>
            </div>
            <div className="text-sm mt-1 line-clamp-3">
                {Array.isArray(body) && <PortableText value={body} />}
            </div>
            <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                    <span key={tech} className="bg-gray-200/40 text-xs rounded px-2 py-1">
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
}