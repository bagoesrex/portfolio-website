import Link from "next/link";
import { ReactNode } from "react";
import { IoMdArrowBack } from "react-icons/io";

interface BlogSlugLayoutProps {
    children: ReactNode;
}

export default function BlogSlugLayout({ children }: BlogSlugLayoutProps) {
    return (
        <div className="max-w-3xl mx-auto pt-20">
            <div className="mb-4">
                <Link href="/blog" className="text-sm flex flex-row items-center gap-2">
                    <IoMdArrowBack /> Back to Blog</Link>
            </div>
            <article>{children}</article>
        </div>
    );
}
