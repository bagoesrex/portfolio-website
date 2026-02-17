"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  label: string;
}

export default function NavLink({ href, label }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "text-sm underline decoration-gray-600/20 decoration-2 transition-colors",
        "hover:underline hover:decoration-gray-600",
        isActive && "decoration-black",
      )}
    >
      {label}
    </Link>
  );
}
