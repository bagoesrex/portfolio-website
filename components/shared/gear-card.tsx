"use client"
import Image from "next/image";

interface GearProps {
    icon: string;
    title: string,
    description: string,
    tags: string[]
}

export default function GearCard({ icon, title, description, tags }: GearProps) {
    return (
        <div className="flex flex-row gap-5 items-center justify-start py-3 px-6 bg-muted/15 rounded-xl hover:ring-1 hover:ring-primary">
            <Image src={icon} alt={"Gear Image"} width={100} height={100}/>
            <div className="flex flex-col gap-1 h-full">
                <h3 className="text-md font-semibold">{title}</h3>
                <p className="text-xs">{description}</p>
                <div className="flex flex-wrap gap-2 justify-start items-center mt-auto pt-3">
                    {tags.map((tag) => (
                        <span key={tag} className="bg-primary/40 text-xs rounded text-background px-2 py-1">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}