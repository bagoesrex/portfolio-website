import { notFound } from "next/navigation";
import { dummyProjects } from "@/data/dummyProjects";

interface ProjectDetailPageProps {
    params: {
        slug: string;
    };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
    const project = dummyProjects.find((p) => p.slug === params.slug);

    if (!project) return notFound();

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800">{project.title}</h1>
            <p className="text-sm text-gray-500 mb-4">{project.date}</p>
            <p className="text-base text-gray-700">{project.description}</p>
        </div>
    );
}
