"use client";

import { NAV_ITEMS } from "@/constants/navbars";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden self-stretch md:block">
      <ul className="flex h-full items-center gap-2">
        {NAV_ITEMS.map((item, i) => (
          <li key={i} className="h-full">
            <Link
              href={item.href}
              className={cn(
                "flex h-full items-center rounded-[3.5px] px-2.5 text-center text-[15.3px] font-[520] transition-colors",
                "hover:bg-gray-300/37",
                pathname == item.href && "bg-gray-300/37",
              )}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
