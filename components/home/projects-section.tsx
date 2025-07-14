import CustomButton from "../shared/custom-button";
import ProjectCard from "./project-card";

export default function ProjectsSection() {
    return (
        <section id="projects">
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-extrabold bg-gradient-to-r from-blue-500 to-sky-400 text-transparent bg-clip-text">
                    Featured Project
                </h2>
                <ProjectCard
                    title="Megumin"
                    description="Megumin is my Mine. Megumin is my Mine. Megumin is my Mine. Megumin is my Mine. Megumin is my Mine. Megumin is my Mine. Megumin is my Mine. Megumin is my Mine. Megumin is my Mine. Megumin is my Mine. Megumin is my Mine. Megumin is my Mine. Megumin is my Mine. Megumin is my Mine."
                    techStack={["Nextjs", "TailwindCSS", "ShadcnUI"]}
                />
                <ProjectCard
                    title="Megumin"
                    description="Megumin is my Mine. Megumin is my Mine. Megumin is my Mine. Megumin is my Mine. Megumin is my Mine. Megumin is my Mine. Megumin is my Mine. Megumin is my Mine. Megumin is my Mine. Megumin is my Mine. Megumin is my Mine. Megumin is my Mine. Megumin is my Mine. Megumin is my Mine."
                    techStack={["Nextjs", "TailwindCSS", "ShadcnUI"]}
                />
                <ProjectCard
                    title="Megumin"
                    description="Megumin is my Mine. Megumin is my Mine. Megumin is my Mine. Megumin is my Mine. Megumin is my Mine. Megumin is my Mine. Megumin is my Mine. Megumin is my Mine. Megumin is my Mine. Megumin is my Mine. Megumin is my Mine. Megumin is my Mine. Megumin is my Mine. Megumin is my Mine."
                    techStack={["Nextjs", "TailwindCSS", "ShadcnUI"]}
                />
                <CustomButton>See All</CustomButton>
            </div>
        </section>
    )
}