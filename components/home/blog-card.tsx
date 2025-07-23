import { PortableText } from "@portabletext/react";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

interface BlogCardProps {
    slug: string;
    title: string;
    date: string;
    body: Array<any>;
}

export default function BlogCard({ slug, title, date, body }: BlogCardProps) {
    return (
        <Link href={`/blog/${slug}`} key={title} className="group">
            <div className={`border-2 border-primary/80 flex flex-col w-full h-full justify-between gap-3 rounded-md p-5 hover:shadow-lg transition`}>
                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-secondary line-clamp-2">
                        {title}
                    </h3>
                    <div className="text-sm line-clamp-4">
                        {Array.isArray(body) && <PortableText value={body} />}
                    </div>
                </div>
                <div className="flex flex-row justify-between items-end">
                    <p className="text-sm">{new Date(date).toLocaleDateString()}</p>
                    <ExternalLink size={18} />
                </div>
            </div>
        </Link>
    )
}