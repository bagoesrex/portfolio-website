import ProjectCard from "@/components/projects/project-card";
import { dummyProjects } from "@/data/dummyProjects";

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
                {dummyProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}
