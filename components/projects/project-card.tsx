import Link from "next/link";
import { PortableText, PortableTextBlock } from "next-sanity";
import { Card, CardContent } from "../ui/card";
import { Clock } from "lucide-react";

interface ProjectCardProps {
    slug: string;
    title: string;
    date: string;
    body: PortableTextBlock[];
    techStack: Array<string>;
}

export default function ProjectCard({ slug, title, date, body, techStack }: ProjectCardProps) {
    return (
        <Card className="hover:shadow-md transition rounded-none bg-white/70 p-0">
            <Link href={`/projects/${slug}`}>
                <CardContent className="flex flex-col py-3 gap-3">
                    <div className="flex flex-col gap-1">
                        <h3 className="text-lg font-semibold text-secondary">{title}</h3>
                        <div className="flex flex-row items-center gap-2 text-foreground/70">
                            <Clock size={12} />
                            <p className="text-xs">{new Date(date).toLocaleDateString()}</p>
                        </div>
                    </div>
                    <div className="text-sm mt-1 line-clamp-2">
                        {Array.isArray(body) && <PortableText value={body} />}
                    </div>
                    <div className="flex gap-2">
                        {techStack.map((tech) => (
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
