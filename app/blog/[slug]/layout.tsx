import Link from "next/link";
import { ReactNode } from "react";
import { IoMdArrowBack } from "react-icons/io";

interface BlogSlugLayoutProps {
    children: ReactNode;
}

export default function BlogSlugLayout({ children }: BlogSlugLayoutProps) {
    return (
        <section className="max-w-3xl mx-auto mt-1 pt-20 flex flex-col gap-1 pb-10 px-5 text-foreground">

            <div className="mb-0">
                <Link href="/blog" className="text-sm flex flex-row items-center gap-2">
                    <IoMdArrowBack /> Back to Blogs
                </Link>
            </div>

            <article>{children}</article>

        </section>
    );
}
