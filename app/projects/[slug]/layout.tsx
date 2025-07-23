import Link from "next/link";
import { ReactNode } from "react";
import { IoMdArrowBack } from "react-icons/io";

interface ProjectSlugLayoutProps {
    children: ReactNode;
}

export default function ProjectSlugLayout({ children }: ProjectSlugLayoutProps) {
    return (
        <section className="max-w-3xl mx-auto mt-1 pt-20 flex flex-col gap-1 pb-10 px-5 text-foreground">

            <div className="mb-0">
                <Link href="/projects" className="text-sm flex flex-row items-center gap-2">
                    <IoMdArrowBack /> Back to Projects
                </Link>
            </div>

            <article>{children}</article>

        </section>
    );
}
