import { ExternalLink } from "lucide-react";
import Link from "next/link";

interface BlogCardProps {
    title: string;
    date: string;
    href: string;
    borderColor: string;
};

export default function BlogCard({ title, date, href, borderColor }: BlogCardProps) {
    return (
        <Link href={href} key={title} className="group">
            <div className={`border-2 ${borderColor} flex flex-col w-full h-full justify-between gap-5 rounded-xl p-5 hover:shadow-lg transition`}>
                <div className="flex flex-col">
                    <h3 className="font-bold leading-7 line-clamp-4">
                        {title}
                    </h3>
                    <p className="text-sm text-gray-500">{date}</p>
                </div>
                <div className="flex justify-end items-end">
                    <ExternalLink size={18} />
                </div>
            </div>
        </Link>
    )
}