import { ReactNode } from "react";

interface UsesProps {
    icon: ReactNode;
    title: string,
}

export default function UsesCard({ icon, title }: UsesProps) {
    return (
        <div className="flex flex-col gap-5 items-center justify-center py-6 bg-muted/15 rounded-xl hover:ring-1 hover:ring-primary">
            <div className="text-xl text-primary">{icon}</div>
            <h3 className="font-semibold">{title}</h3>
        </div>
    );
}