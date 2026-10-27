"use client";

import { NAV_ITEMS } from "@/config/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header
      id="site-header"
      className="border-border/40 bg-background/70 fixed inset-x-0 top-0 z-50 flex justify-center border-b px-4 py-3 backdrop-blur-md sm:py-3.5"
    >
      <div
        className={cn(
          "border-border/80 bg-background/80 rounded-full border p-1 shadow-xs backdrop-blur-sm",
          "dark:bg-background/70 dark:border-white/15 dark:shadow-[0_2px_10px_rgba(0,0,0,0.3)]",
        )}
      >
        <nav aria-label="Main Navigation">
          <ul className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = isNavItemActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "block rounded-full px-4 py-2 text-sm font-medium tracking-tight transition-all duration-200 sm:text-[15px]",
                      isActive
                        ? "bg-foreground/10 text-foreground font-semibold shadow-2xs dark:bg-white/15"
                        : "text-muted-foreground hover:bg-foreground/5 hover:text-foreground dark:hover:bg-white/5",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

function normalizePathname(pathname?: string | null): string {
  let path = pathname;
  if (!path && typeof window !== "undefined") {
    path = window.location.pathname;
  }
  const clean = path || "/";
  return clean.length > 1 && clean.endsWith("/") ? clean.slice(0, -1) : clean;
}

function isNavItemActive(
  pathname: string | null | undefined,
  href: string,
): boolean {
  const current = normalizePathname(pathname);
  const target = normalizePathname(href);

  if (target === "/") {
    return current === "/";
  }

  return current === target || current.startsWith(`${target}/`);
}
