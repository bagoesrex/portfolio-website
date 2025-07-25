import { ChevronRight } from "lucide-react";
import { PortableText } from "next-sanity";
import Link from "next/link";

interface ProjectCardProps {
    slug: string;
    title: string;
    body: Array<any>;
    techStack: Array<string>;
}

export default function ProjectCard({ slug, title, body, techStack }: ProjectCardProps) {
    return (
        <Link href={`/projects/${slug}`}>
            <div className="flex flex-col gap-1 border-b-2 border-primary/80 pt-3 pb-3 px-1 md:px-2 rounded-t-xs hover:bg-primary/20">
                <div className="flex flex-row justify-between">
                    <h3 className="font-bold text-secondary">{title}</h3>
                    <ChevronRight className="cursor-pointer hover:opacity-70 text-secondary" />
                </div>
                <div className="text-sm mt-1 line-clamp-3">
                    {Array.isArray(body) && <PortableText value={body} />}
                </div>
                <div className="flex flex-wrap gap-2 mt-1">
                    {techStack.map((tech) => (
                        <span key={tech} className="bg-primary/40 text-xs text-primary rounded px-2 py-1">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </Link>
    );
}