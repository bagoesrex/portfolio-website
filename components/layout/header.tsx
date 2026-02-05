import { CONTAINER } from "@/constants/layout";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const NAV_ITEMS = [
    {
      href: "/about",
      label: "About",
    },
    {
      href: "/blog",
      label: "Blog",
    },
    {
      href: "/projects",
      label: "Projects",
    },
  ];

  return (
    <header className="fixed z-50 w-full px-3.5 py-3 backdrop-blur-md">
      <div
        className={`mx-auto flex w-full justify-between ${CONTAINER.default} bg-primary/5 border-border/30 max-w-7xl items-center rounded-md border-[1.2px] px-3 py-2.5`}
      >
        <Link href={"/"} className="flex items-center gap-1">
          <Image src="/icons/logo.svg" alt="main icon" width={32} height={32} priority />
          <span className="font-mono text-[15px] font-semibold text-[#004A7C]">BagoesRex</span>
        </Link>
        <nav>
          <ul className="flex gap-2">
            {NAV_ITEMS.map((item, i) => (
              <li key={i}>
                <Link href={item.href} className="block h-full rounded-xs px-2 py-2 text-[15.3px] font-[520] transition-colors hover:bg-gray-400/20">
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
