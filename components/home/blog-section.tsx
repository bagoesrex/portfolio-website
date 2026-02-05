import Link from "next/link";
import MaxWidthWrapper from "../layout/max-width-wrapper";
import { Button } from "../ui/button";
import { FaArrowRight } from "react-icons/fa";
import { DUMMY_BLOG_POSTS } from "@/constants/blogs";
import BlogCard from "../blog/blog-card";

export default function BlogSection() {
  const latestPosts = [...DUMMY_BLOG_POSTS].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3);

  return (
    <section id="blog">
      <MaxWidthWrapper className="space-y-4 pb-18">
        <div className="flex w-full flex-col gap-3.5">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold">Latest</p>
              <h2 className="text-primary text-2xl font-extrabold">Blog Posts</h2>
            </div>
            <Button asChild className="px-4 py-5">
              <Link href="/blog">
                <div className="flex items-center gap-3">
                  <FaArrowRight />
                  <span>View All</span>
                </div>
              </Link>
            </Button>
          </div>
        </div>
        <div className="space-y-2">
          {latestPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
