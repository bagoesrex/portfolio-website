import { Card, CardContent } from "@/components/ui/card";
import { Blog } from "@/types/blog";
import { Clock } from "lucide-react";
import Link from "next/link";

interface BlogCardProps {
    blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
    return (
        <Card className="hover:shadow-md transition rounded-none bg-white/70 p-0">
            <Link href={`/blog/${blog.slug}`}>
                <CardContent className="flex flex-col py-3 gap-3">
                    <div className="flex flex-col gap-1">
                        <h3 className="text-lg font-semibold text-secondary">{blog.title}</h3>
                        <div className="flex flex-row items-center gap-2 text-foreground/70">
                            <Clock size={12} />
                            <p className="text-xs">{blog.date}</p>
                        </div>
                    </div>
                    <p className="text-sm mt-1 line-clamp-3">{blog.description}</p>
                </CardContent>
            </Link>
        </Card>
    );
}
