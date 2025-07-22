import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import { Clock } from "lucide-react";

const POST_QUERY = `*[_type == "blog" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
    projectId && dataset
        ? imageUrlBuilder({ projectId, dataset }).image(source)
        : null;

const options = { next: { revalidate: 30 } };

export default async function BlogDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const blog = await client.fetch<SanityDocument>(POST_QUERY, await params, options);
    const blogImageUrl = blog.image
        ? urlFor(blog.image)?.width(550).height(310).url()
        : null;

    return (
        <div className="flex flex-col gap-5">
            <div className="flex flex-col justify-center gap-2 items-center">
                <h1 className="text-3xl font-extrabold text-primary">{blog.title}</h1>
                <div className="flex flex-row items-center gap-2 text-foreground/70">
                    <Clock size={12} />
                    <p className="text-sm">{new Date(blog.publishedAt).toLocaleDateString()}</p>
                </div>
                {blogImageUrl && (
                    <img
                        src={blogImageUrl}
                        alt={blog.title}
                        className="aspect-video rounded-xl"
                        width="550"
                        height="310"
                    />
                )}
            </div>
            <hr className="border-primary/50 mb-8" />
            {Array.isArray(blog.body) && <PortableText value={blog.body} />}
        </div>
    );
}
