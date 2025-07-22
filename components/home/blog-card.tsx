import { Blog } from "@/types/blog";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

interface BlogCardProps {
    blog: Blog;
};

export default function BlogCard({ blog }: BlogCardProps) {
    return (
        <Link href={`/blog/${blog.slug}`} key={blog.title} className="group">
            <div className={`border-2 border-blue-200 flex flex-col w-full h-full justify-between gap-5 rounded-md p-5 hover:shadow-lg transition`}>
                <div className="flex flex-col">
                    <h3 className="font-bold leading-7 line-clamp-4">
                        {blog.title}
                    </h3>
                    <p className="text-sm text-gray-500">{blog.date}</p>
                </div>
                <div className="flex justify-end items-end">
                    <ExternalLink size={18} />
                </div>
            </div>
        </Link>
    )
}