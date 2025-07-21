import BlogCard from "@/components/blog/blog-card";
import { dummyBlogs } from "@/data/dummyBlog";

export default function BlogPage() {
    return (
        <section
            id="blog"
            className="max-w-3xl mx-auto pt-20 flex flex-col gap-10"
        >
            <h1 className="text-3xl font-extrabold text-gray-800 bg-clip-text">
                Blogs
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {dummyBlogs.map((post) => (
                    <BlogCard key={post.id} post={post} />
                ))}
            </div>
        </section>
    );
}
