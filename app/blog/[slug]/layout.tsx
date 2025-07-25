import { ReactNode } from "react";

interface BlogSlugLayoutProps {
    children: ReactNode;
}

export default function BlogSlugLayout({ children }: BlogSlugLayoutProps) {
    return (
        <section className="max-w-3xl mx-auto mt-1 pt-20 flex flex-col gap-1 pb-10 px-5 text-foreground">

            <article>{children}</article>

        </section>
    );
}
