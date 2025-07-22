import { Blog } from "@/types/blog";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

interface BlogCardProps {
    blog: Blog;
};

export default function BlogCard({ blog }: BlogCardProps) {
    return (
        <Link href={`/blog/${blog.slug}`} key={blog.title} className="group">
            <div className={`border-2 border-primary/80 flex flex-col w-full h-full justify-between gap-3 rounded-md p-5 hover:shadow-lg transition`}>
                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-secondary line-clamp-2">
                        {blog.title}
                    </h3>
                    <p className="text-sm line-clamp-4">{blog.description}</p>
                </div>
                <div className="flex flex-row justify-between items-end">
                    <p className="text-sm">{blog.date}</p>
                    <ExternalLink size={18} />
                </div>
            </div>
        </Link>
    )
}