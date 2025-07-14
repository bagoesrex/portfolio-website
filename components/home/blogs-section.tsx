import CustomButton from "../shared/custom-button";
import BlogCard from "./blog-card";

export default function BlogsSection() {
    return (
        <section id="projects">
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-extrabold bg-gradient-to-r from-blue-500 to-sky-400 text-transparent bg-clip-text">
                    Featured Blogs
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <BlogCard
                        title="Megumin Megumin Megumin Megumin Megumin Megumin Megumin Megumin Megumin Megumin Megumin Megumin"
                        date="March 13 2025"
                        href="/"
                        borderColor="border-blue-200"
                    />
                    <BlogCard
                        title=" Megumin Megumin Megumin Megumin Megumin Megumin"
                        date="March 13 2025"
                        href="/"
                        borderColor="border-blue-200"
                    />
                    <BlogCard
                        title="Megumin"
                        date="March 13 2025"
                        href="/"
                        borderColor="border-blue-200"
                    />
                </div>
                <CustomButton>See All</CustomButton>
            </div>
        </section>
    )
}