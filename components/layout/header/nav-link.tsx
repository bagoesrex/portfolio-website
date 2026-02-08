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
        "flex h-full items-center rounded-[3.5px] px-2.5 text-center text-[15.3px] font-[520] transition-colors",
        "hover:bg-gray-300/37",
        isActive && "bg-gray-300/37",
      )}
    >
      {label}
    </Link>
  );
}
