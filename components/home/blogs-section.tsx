import { dummyBlogs } from "@/data/dummyBlog";
import CustomButton from "../shared/custom-button";
import BlogCard from "./blog-card";

export default function BlogsSection() {
    return (
        <section id="projects">
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-extrabold text-primary">
                    Featured Blogs
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {dummyBlogs.map((blog) => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))}

                </div>
                <CustomButton link="/blog">See All</CustomButton>
            </div>
        </section>
    )
}