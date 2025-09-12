import { ReactNode } from "react";

interface UsesProps {
    icon: ReactNode;
    title: string,
}

export default function UsesCard({ icon, title }: UsesProps) {
    return (
        <div className="flex flex-col gap-5 items-center justify-center py-6 border border-gray-200 shadow-xs rounded-md transition-transform duration-300 hover:scale-105">
            <div className="text-md md:text-xl text-primary">{icon}</div>
            <h3 className="text-sm md:text-md font-semibold">{title}</h3>
        </div>
    );
}