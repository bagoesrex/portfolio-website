import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import { Clock } from "lucide-react";

const PROJECT_QUERY = `*[_type == "project" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
    projectId && dataset
        ? imageUrlBuilder({ projectId, dataset }).image(source)
        : null;

const options = { next: { revalidate: 30 } };


export default async function ProjectDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const project = await client.fetch<SanityDocument>(PROJECT_QUERY, await params, options);
    const projectImageUrl = project.image
        ? urlFor(project.image)?.width(550).height(310).url()
        : null;
    console.log(project)

    return (
        <div className="flex flex-col gap-5">
            <div className="flex flex-col justify-center gap-2 items-center">
                <h1 className="text-3xl font-extrabold text-primary">{project.title}</h1>
                <div className="flex flex-row items-center gap-2 text-foreground/70">
                    <Clock size={12} />
                    <p className="text-sm">{new Date(project.publishedAt).toLocaleDateString()}</p>
                </div>
                <div className="flex gap-2">
                    {Array.isArray(project.techStack) &&
                        project.techStack.map((tech: string) => (
                            <span key={tech} className="bg-gray-200/40 text-xs rounded px-2 py-1">
                                {tech}
                            </span>
                        ))}
                </div>
                {projectImageUrl && (
                    <img
                        src={projectImageUrl}
                        alt={project.title}
                        className="aspect-video rounded-xl"
                        width="550"
                        height="310"
                    />
                )}
            </div>
            <hr className="border-primary/50 mb-8" />
            {Array.isArray(project.body) && <PortableText value={project.body} />}
        </div>
    );
}
