import { dummyProjects } from "@/data/dummyProjects";
import CustomButton from "../shared/custom-button";
import ProjectCard from "./project-card";

export default function ProjectsSection() {
    return (
        <section id="projects">
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-extrabold bg-gradient-to-r from-blue-500 to-sky-400 text-transparent bg-clip-text">
                    Featured Project
                </h2>
                {dummyProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
                <CustomButton>See All</CustomButton>
            </div>
        </section>
    )
}