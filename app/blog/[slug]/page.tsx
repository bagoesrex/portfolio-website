import { dummyBlogs } from "@/data/dummyBlog";
import { notFound } from "next/navigation";

interface BlogDetailPageProps {
    params: {
        slug: string;
    };
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
    const post = dummyBlogs.find((p) => p.slug === params.slug);

    if (!post) return notFound();

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800">{post.title}</h1>
            <p className="text-sm text-gray-500 mb-4">{post.date}</p>
            <p className="text-base text-gray-700">{post.description}</p>
        </div>
    );
}
