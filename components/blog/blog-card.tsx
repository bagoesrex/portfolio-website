import { Card, CardContent } from "@/components/ui/card";
import { Clock } from "lucide-react";
import { PortableText } from "next-sanity";
import Link from "next/link";

interface BlogCardProps {
    slug: string;
    title: string;
    date: string;
    body: Array<any>;
}

export default function BlogCard({ slug, title, date, body }: BlogCardProps) {
    return (
        <Card className="hover:shadow-md transition rounded-none bg-white/70 p-0">
            <Link href={`/blog/${slug}`}>
                <CardContent className="flex flex-col py-3 gap-3">
                    <div className="flex flex-col gap-1">
                        <h3 className="text-lg font-semibold text-secondary">{title}</h3>
                        <div className="flex flex-row items-center gap-2 text-foreground/70">
                            <Clock size={12} />
                            <p className="text-xs">{new Date(date).toLocaleDateString()}</p>
                        </div>
                    </div>
                    <div className="text-sm mt-1 line-clamp-2">
                        {Array.isArray(body) && <PortableText value={body} />}
                    </div>
                </CardContent>
            </Link>
        </Card>
    );
}
