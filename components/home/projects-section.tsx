import CustomButton from "../shared/custom-button";
import ProjectCard from "./project-card";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";

const PROJECTS_QUERY = `*[
    _type == "project"
    && defined(slug.current)
  ]|order(publishedAt desc)[0...3]{_id, title, slug, publishedAt, body, techStack}`;

const options = { next: { revalidate: 30 } };

export default async function ProjectsSection() {
    const projects = await client.fetch<SanityDocument[]>(PROJECTS_QUERY, {}, options);

    return (
        <section id="projects">
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-extrabold text-primary">
                    Featured Project
                </h2>
                {projects.map((project) => (
                    <ProjectCard
                        key={project._id}
                        title={project.title}
                        slug={project.slug.current}
                        date={project.publishedAt}
                        body={project.body}
                        techStack={project.techStack}
                    />
                ))}
                <CustomButton link="/projects">See All</CustomButton>
            </div>
        </section>
    )
}