import { PortableText } from "@portabletext/react";
import { Calendar, ExternalLink } from "lucide-react";
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
            <div className={`border-2 border-primary/80 flex flex-col w-full h-full justify-between gap-3 rounded-md px-5 py-5 pb-2 hover:shadow-lg transition`}>
                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-secondary line-clamp-2">
                        {title}
                    </h3>
                    <div className="text-sm line-clamp-3">
                        {Array.isArray(body) && <PortableText value={body} />}
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center text-secondary">
                    <div className="flex flex-row gap-1 md:gap-1.5 justify-center items-center -mb-2">
                        <Calendar size={18} className="-mt-0.5" />
                        <p className="text-sm">{new Date(date).toLocaleDateString()}</p>
                    </div>
                    <div className="p-3 rounded-full group-hover:bg-primary/20 -mr-3">
                        <ExternalLink size={18} className="cursor-pointer hover:opacity-70" />
                    </div>
                </div>
            </div>
        </Link>
    )
}