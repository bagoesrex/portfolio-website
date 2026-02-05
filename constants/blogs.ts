import { BlogPost } from "@/types/blog";

export const DUMMY_BLOG_POSTS: BlogPost[] = [
  {
    slug: "building-modern-portfolio-with-nextjs",
    title: "Building a Modern Portfolio with Next.js",
    excerpt: "A practical guide to building a fast, modern, and SEO-friendly portfolio using Next.js and Tailwind CSS.",
    content:
      "In this article, I share my experience building a modern portfolio website using Next.js, Tailwind CSS, and best practices for performance and accessibility...",
    date: "2024-10-12",
    readingTime: "5 min read",
    tags: ["Next.js", "Tailwind", "Portfolio"],
    coverImage: "/placeholder/main.svg",
  },
  {
    slug: "why-i-love-tailwind-css",
    title: "Why I Love Tailwind CSS",
    excerpt: "Tailwind CSS has completely changed the way I build user interfaces. Here’s why it’s my go-to CSS framework.",
    content: "Tailwind CSS offers a utility-first approach that allows developers to build UI faster without leaving their HTML...",
    date: "2024-09-28",
    readingTime: "4 min read",
    tags: ["CSS", "Tailwind"],
    coverImage: "/placeholder/main.svg",
  },
  {
    slug: "react-state-management-basics",
    title: "React State Management Basics",
    excerpt: "Understanding state management in React doesn’t have to be complicated. Let’s break it down.",
    content:
      "State management is one of the core concepts in React. In this post, we’ll explore useState, lifting state up, and when to use external libraries...",
    date: "2024-09-10",
    readingTime: "6 min read",
    tags: ["React", "State Management"],
    coverImage: "/placeholder/main.svg",
  },
  {
    slug: "server-vs-client-components-nextjs",
    title: "Server vs Client Components in Next.js",
    excerpt: "Confused about Server and Client Components in Next.js App Router? This article explains when and why to use each.",
    content:
      "Next.js App Router introduces Server and Client Components. Understanding their differences is key to building scalable and performant apps...",
    date: "2025-08-22",
    readingTime: "7 min read",
    tags: ["Next.js", "React", "Performance"],
    coverImage: "/placeholder/main.svg",
  },
  {
    slug: "designing-reusable-ui-components",
    title: "Designing Reusable UI Components",
    excerpt: "Learn how to design reusable, scalable UI components that are easy to maintain and extend.",
    content:
      "Reusable components are the backbone of modern frontend development. In this post, we’ll discuss component boundaries, props design, and composition...",
    date: "2024-08-05",
    readingTime: "5 min read",
    tags: ["UI", "Design System", "React"],
    coverImage: "/placeholder/main.svg",
  },
];
