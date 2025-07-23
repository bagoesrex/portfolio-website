import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import ProjectCard from "@/components/projects/project-card";

const PROJECTS_QUERY = `*[
  _type == "project"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, body, techStack}`;

const options = { next: { revalidate: 30 } };

export default async function ProjectsPage() {
    const projects = await client.fetch<SanityDocument[]>(PROJECTS_QUERY, {}, options);
    console.log(projects)

    return (
        <section className="max-w-3xl mx-auto mt-1 pt-20 flex flex-col gap-5 pb-10 px-5 text-foreground">

            <h1 className="text-3xl font-extrabold text-primary">
                Projects
            </h1>
            <p className="leading-relaxed">
                Here are some of the projects I've built - from fun experiments to fully functional apps. Each one taught me something new.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            </div>

        </section>
    );
}
