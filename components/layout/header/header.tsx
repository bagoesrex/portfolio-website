import { CONTAINER } from "@/constants/layout";
import Link from "next/link";
import Image from "next/image";
import NavLink from "./nav-link";

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
        className={`mx-auto flex w-full justify-between ${CONTAINER.default} bg-primary/5 border-border/30 max-w-7xl items-center rounded-lg border-[1.2px] py-1.5 pr-1.5 pl-1.5`}
      >
        <Link href={"/"} className="flex items-center gap-1 rounded-md px-1.5 py-1.5 hover:bg-gray-300/37 focus:bg-gray-300/37">
          <Image src="/icons/logo.svg" alt="main icon" width={32} height={32} priority />
          <span className="mr-1 font-mono text-[15px] font-semibold text-[#004A7C]">BagoesRex</span>
        </Link>
        <nav className="self-stretch">
          <ul className="flex h-full items-center gap-2">
            {NAV_ITEMS.map((item, i) => (
              <li key={i} className="h-full">
                <NavLink href={item.href} label={item.label} />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
