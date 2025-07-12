import BlogCard from "@/components/blog/blog-card";
import { BlogPost } from "@/types/blog";

const posts: BlogPost[] = [
    {
        id: "1",
        title: "Mengenal AI Lebih Dalam",
        description: "Penjelasan dasar tentang AI untuk pemula.",
        slug: "mengenal-ai-lebih-dalam",
        date: "2025-07-10",
    },
    {
        id: "2",
        title: "React vs Next.js",
        description: "Kapan kamu harus memilih framework tertentu.",
        slug: "react-vs-nextjs",
        date: "2025-07-08",
    },
];

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
                {posts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                ))}
            </div>
        </section>
    );
}
