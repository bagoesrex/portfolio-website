"use client";

import { LAYOUT } from "@/config/layout";
import { NAV_ITEMS } from "@/config/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed z-50 w-full px-3.5 py-5 backdrop-blur-md">
      <div
        className={cn(
          "bg-primary/5 ${LAYOUT.container} border-gray mx-auto rounded-full border px-1 py-1",
          LAYOUT.container,
        )}
      >
        <nav className="w-full">
          <ul className="flex gap-[0.5px]">
            {NAV_ITEMS.map((item, i) => (
              <li key={i}>
                <Link
                  href={item.href}
                  className={cn(
                    "block h-full rounded-full px-3 py-1.5 text-gray-500",
                    pathname == item.href && "bg-gray-200 text-black",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
