import type { Metadata } from "next";
import BlogCard from "@/components/blog/blog-card";
import MaxWidthWrapper from "@/components/layout/max-width-wrapper";
import { DUMMY_BLOG_POSTS } from "@/constants/blogs";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles and notes from Bagus Rahmawan about web development, frontend engineering, and technology.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    url: `${siteConfig.url}/blog`,
    title: "Blog | Bagus Rahmawan",
    description: "Articles and notes about web development, frontend engineering, and technology.",
  },
};

export default function BlogPage() {
  return (
    <main>
      <MaxWidthWrapper className="space-y-4 pt-30 pb-18">
        <h1 className="text-primary text-2xl font-extrabold">Blogs</h1>
        <div className="space-y-2">
          {DUMMY_BLOG_POSTS.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </MaxWidthWrapper>
    </main>
  );
}
