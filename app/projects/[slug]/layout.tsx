import Link from "next/link";
import { ReactNode } from "react";
import { IoMdArrowBack } from "react-icons/io";

interface Props {
    children: ReactNode;
}

export default function ProjectSlugLayout({ children }: Props) {
    return (
        <div className="max-w-3xl mx-auto pt-20">
            <div className="mb-4">
                <Link href="/projects" className="text-sm flex flex-row items-center gap-2">
                    <IoMdArrowBack /> Back to Projects</Link>
            </div>
            <article>{children}</article>
        </div>
    );
}
