import { BlogPost } from "@/types/blog";
import { notFound } from "next/navigation";

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

interface BlogDetailPageProps {
    params: {
        slug: string;
    };
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
    const post = posts.find((p) => p.slug === params.slug);

    if (!post) return notFound();

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800">{post.title}</h1>
            <p className="text-sm text-gray-500 mb-4">{post.date}</p>
            <p className="text-base text-gray-700">{post.description}</p>
        </div>
    );
}
