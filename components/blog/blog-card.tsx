import { Card, CardContent } from "@/components/ui/card";
import { Blog } from "@/types/blog";
import Link from "next/link";

interface BlogCardProps {
    post: Blog;
}

export default function BlogCard({ post }: BlogCardProps) {
    return (
        <Link href={`/blog/${post.slug}`}>
            <Card className="hover:shadow-md transition rounded-none bg-white/70">
                <CardContent className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">{post.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{post.description}</p>
                    <p className="text-xs text-gray-400 mt-2">{post.date}</p>
                </CardContent>
            </Card>
        </Link>
    );
}
