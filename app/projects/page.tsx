import ProjectCard from "@/components/projects/project-card";
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

export default function ProjectsPage() {
    return (
        <section
            id="projects"
            className="max-w-3xl mx-auto pt-20 flex flex-col gap-10"
        >
            <h1 className="text-3xl font-extrabold text-gray-800 bg-clip-text">
                Projects
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}
