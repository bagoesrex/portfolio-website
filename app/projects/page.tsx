import ProjectCard from "@/components/projects/project-card";
import { dummyProjects } from "@/data/dummyProjects";

export default function ProjectsPage() {
    return (
        <section className="max-w-3xl mx-auto mt-1 pt-20 flex flex-col gap-5 pb-10 px-5 text-foreground">

            <h1 className="text-3xl font-extrabold text-primary">
                Projects
            </h1>
            <p className="leading-relaxed">
                Here are some of the projects I've built - from fun experiments to fully functional apps. Each one taught me something new.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {dummyProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>

        </section>
    );
}
