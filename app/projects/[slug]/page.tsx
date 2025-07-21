import { notFound } from "next/navigation";
import { Project } from "@/types/project";

const projects: Project[] = [
    {
        id: "1",
        title: "Website Portfolio",
        description: "Situs pribadi untuk menampilkan karya dan profil.",
        slug: "website-portfolio",
        date: "2025-06-01",
    },
    {
        id: "2",
        title: "Absensi Online",
        description: "Aplikasi absensi berbasis lokasi untuk perusahaan.",
        slug: "absensi-online",
        date: "2025-05-15",
    },
];

interface Props {
    params: {
        slug: string;
    };
}

export default function ProjectDetailPage({ params }: Props) {
    const project = projects.find((p) => p.slug === params.slug);

    if (!project) return notFound();

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800">{project.title}</h1>
            <p className="text-sm text-gray-500 mb-4">{project.date}</p>
            <p className="text-base text-gray-700">{project.description}</p>
        </div>
    );
}
