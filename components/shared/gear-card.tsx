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
        <div className="flex flex-row gap-5 items-center justify-start py-3 px-6 border border-gray-200 shadow-xs rounded-md transition-transform duration-300 hover:scale-105">
            <div className="max-w-[30%] w-full h-[100px] relative">
                <Image src={icon} alt="Gear Image" fill objectFit="contain" priority className="drop-shadow-md" />
            </div>
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