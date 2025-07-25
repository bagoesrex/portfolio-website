import BlogCard from "@/components/blog/blog-card";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";

const BLOGS_QUERY = `*[
  _type == "blog"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, body}`;

const options = { next: { revalidate: 30 } };

export default async function BlogPage() {
    const blogs = await client.fetch<SanityDocument[]>(BLOGS_QUERY, {}, options);
    console.log(blogs)

    return (
        <section className="max-w-3xl min-w-sw mx-auto mt-1 pt-20 flex flex-col gap-5 pb-10 px-5 text-foreground">

            <h1 className="text-3xl font-extrabold text-primary">
                Blogs
            </h1>
            <p className="leading-relaxed">
                I write about the things I learn and love - from debugging headaches to UI experiments. Hopefully, you&apos;ll find something useful or inspiring here.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

        </section>
    );
}
