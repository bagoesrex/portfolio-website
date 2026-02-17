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
      <Link href={`/blog/${slug}`} className="flex items-start gap-4 rounded-[7px] px-3 py-3.5 transition hover:bg-gray-200/40 md:items-center">
        <div className="relative h-18 min-w-28 overflow-hidden rounded-[5px]">
          <Image src={coverImage} alt={`${title} Image`} fill priority className="object-cover transition-transform group-hover:scale-130" />
        </div>
        <div className="space-y-2">
          <header className="space-y-1">
            <h2 className="text-md -mt-1 leading-snug font-medium decoration-2 group-hover:underline">{title}</h2>
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
