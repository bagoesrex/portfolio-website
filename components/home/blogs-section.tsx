import CustomButton from "../shared/custom-button";
import BlogCard from "./blog-card";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";

const BLOGS_QUERY = `*[
    _type == "blog"
    && defined(slug.current)
  ]|order(publishedAt desc)[0...3]{_id, title, slug, publishedAt, body}`;

const options = { next: { revalidate: 30 } };

export default async function BlogsSection() {
    const blogs = await client.fetch<SanityDocument[]>(BLOGS_QUERY, {}, options);

    return (
        <section id="projects">
            <div className="flex flex-col gap-4">
                <div className="flex flex-col">
                    <h2 className="text-2xl font-extrabold text-primary">
                        Featured Blogs
                    </h2>
                    <p className="italic text-muted-foreground text-xs md:text-sm">Temporary content for testing!</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {blogs.map((blog) => (
                        <BlogCard
                            key={blog._id}
                            title={blog.title}
                            slug={blog.slug.current}
                            date={blog.publishedAt}
                            body={blog.body}
                        />
                    ))}

                </div>
                <CustomButton link="/blog" className="w-full md:w-[90px]">See All</CustomButton>
            </div>
        </section>
    )
}