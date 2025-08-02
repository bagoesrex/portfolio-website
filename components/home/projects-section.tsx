import CustomButton from "../shared/custom-button";
import ProjectCard from "./project-card";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";

const PROJECTS_QUERY = `*[
    _type == "project"
    && defined(slug.current)
  ]|order(publishedAt desc)[0...3]{_id, title, slug, body, techStack}`;

const options = { next: { revalidate: 30 } };

export default async function ProjectsSection() {
    const projects = await client.fetch<SanityDocument[]>(PROJECTS_QUERY, {}, options);

    return (
        <section id="projects">
            <div className="flex flex-col gap-4">
                <div className="flex flex-col">
                    <h2 className="text-2xl font-extrabold text-primary">
                        Featured Project
                    </h2>
                    <p className="italic text-muted-foreground text-xs md:text-sm">Temporary content for testing!</p>
                </div>
                <div>
                    {projects.map((project) => (
                        <ProjectCard
                            key={project._id}
                            title={project.title}
                            slug={project.slug.current}
                            body={project.body}
                            techStack={project.techStack}
                        />
                    ))}
                </div>
                <CustomButton link="/projects" className="w-full md:w-[90px]">See All</CustomButton>
            </div>
        </section>
    )
}