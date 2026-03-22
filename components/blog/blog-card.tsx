import { BlogPost } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import { GoDotFill } from "react-icons/go";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const { slug, title, excerpt, date, readingTime, coverImage } = post;

  return (
    <article className="group">
      <Link
        href={`/blog/${slug}`}
        className="flex items-start gap-4 rounded-[7px] px-3 py-3.5 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-gray-200/40 hover:shadow-xs md:items-center"
      >
        <div className="relative h-18 min-w-28 overflow-hidden rounded-[5px]">
          <Image
            src={coverImage}
            alt={`${title} Image`}
            fill
            priority
            className="pointer-events-none object-cover transition-transform duration-300 ease-out group-hover:scale-130"
          />
        </div>
        <div className="space-y-2">
          <header className="space-y-1">
            <h2 className="underline decoration-transparent decoration-[1.75px] transition-all duration-200 ease-out group-hover:decoration-current">
              {title}
            </h2>
            <p className="text-muted-foreground line-clamp-2 text-sm font-light">{excerpt}</p>
          </header>
          <footer className="text-muted-foreground flex items-center gap-1 text-xs">
            <time dateTime={date}>
              {new Date(date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </time>
            <GoDotFill className="size-1.5" />
            <span>{readingTime}</span>
          </footer>
        </div>
      </Link>
    </article>
  );
}
