import Link from "next/link";
import Image from "next/image";
import SocialLinks from "@/components/shared/social-links";
import MaxWidthWrapper from "../max-width-wrapper";
import NowPlaying from "./now-playing";

export default function Footer() {
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
    {
      href: "/about",
      label: "About",
    },
  ];

  return (
    <footer className="px-3.5">
      <MaxWidthWrapper className="border-t border-gray-300 pt-5 pb-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="space-y-3.5">
            <NowPlaying />
            <Link href={"/"} className="mt-8 flex items-center gap-2 md:mt-5">
              <div className="p-0.1 bg-primary/20 overflow-hidden rounded-tr-md">
                <Image src="/icons/logo.svg" alt="main icon" width={32} height={32} priority />
              </div>
              <span className="font-mono text-[15px] font-semibold text-[#004A7C]">BagoesRex</span>
            </Link>
            <p className="leading-6.5 text-gray-800">A tech enthusiast and web developer from Semarang</p>
            <div className="flex justify-center">
              <SocialLinks />
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="space-y-3">
              <p className="font-[440] text-gray-600">NAVIGATE</p>
              <nav>
                <ul className="space-y-2">
                  {NAV_ITEMS.map((item, i) => (
                    <li key={i}>
                      <Link
                        href={item.href}
                        className="under-l text-sm underline decoration-gray-600/20 decoration-2 transition-colors hover:underline hover:decoration-gray-600"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="space-y-3">
              <p className="font-[440] text-gray-600">NAVIGATE</p>
              <nav>
                <ul className="space-y-2">
                  {NAV_ITEMS.map((item, i) => (
                    <li key={i}>
                      <Link
                        href={item.href}
                        className="under-l text-sm underline decoration-gray-600/20 decoration-2 transition-colors hover:underline hover:decoration-gray-600"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
}
