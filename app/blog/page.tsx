import BlogCard from "@/components/blog/blog-card";
import { dummyBlogs } from "@/data/dummyBlog";

export default function BlogPage() {
    return (
        <section className="max-w-3xl mx-auto mt-1 pt-20 flex flex-col gap-5 pb-10 px-5 text-foreground">

            <h1 className="text-3xl font-extrabold text-primary">
                Blogs
            </h1>
            <p className="leading-relaxed">
                I write about the things I learn and love — from debugging headaches to UI experiments. Hopefully, you'll find something useful or inspiring here.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {dummyBlogs.map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                ))}
            </div>

        </section>
    );
}
