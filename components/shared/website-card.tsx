import { ExternalLink } from "lucide-react";

interface WebsiteProps {
    title: string
    href: string
    label: string
    description: string
}

export default function WebsiteCard({ title, href, label, description }: WebsiteProps) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
            <div className="flex flex-col gap-3 p-6 border border-gray-200 shadow-xs rounded-md hover:shadow-md hover:-translate-y-0.5 transition-transform duration-300 group">
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-col">
                        <h3 className="font-semibold group-hover:underline">{title}</h3>
                        <h4 className="text-muted-foreground italic">{label}</h4>
                    </div>
                    <div className="flex items-center">
                        <ExternalLink size={18} className="-mt-3" />
                    </div>
                </div>
                <p className="w-full break-words whitespace-normal text-sm">{description}</p>
            </div>
        </a>
    );
}