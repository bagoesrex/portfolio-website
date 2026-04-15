"use client";

import { CONTAINER } from "@/constants/layout";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";
import { BsArrowRight } from "react-icons/bs";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 80;
      setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed z-50 w-full px-3.5 py-3 backdrop-blur-md">
      <div
        className={`mx-auto ${scrolled ? "bg-primary/10 shadow-[0_0_8px_rgba(0,0,0,0.80)]" : "bg-primary/5"} shadow-primary/30 flex flex-col transition-all duration-700 hover:shadow-[0_0_11px_rgba(0,0,0,0.80)] ${CONTAINER.default} border-border/20 hover:border-border/35 max-w-7xl items-center rounded-lg border-[1.2px] py-1.5 pr-1.5 pl-1.5`}
      >
        <div className="flex w-full justify-between">
          <Link
            href={"/"}
            className="flex items-center gap-1 rounded-md px-1.5 py-1.5 hover:bg-gray-300/37 focus:bg-gray-300/37"
            onClick={() => setOpen(false)}
          >
            <Image src="/icons/logo.svg" alt="main icon" width={32} height={32} priority />
            <span className="mr-1 font-mono text-[15px] font-semibold text-[#004A7C]">BagoesRex</span>
          </Link>

          <DesktopNav />

          <div className="relative flex items-center self-stretch rounded-[3.5px] hover:bg-gray-300/37 md:hidden">
            <button className="h-full rounded-[3.5px] px-3" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              <div className="flex flex-col gap-1">
                <span className="h-0.5 w-5 bg-black" />
                <span className="h-0.5 w-5 bg-black" />
                <span className="h-0.5 w-5 bg-black" />
              </div>
            </button>
            <span className="absolute top-3.5 right-13 flex items-center gap-1 text-xs">
              menu <BsArrowRight />
            </span>
          </div>
        </div>
        <div
          className={`w-full transition-all duration-300 ease-in-out md:hidden ${
            open ? "pointer-events-auto mt-2 max-h-60 opacity-100" : "pointer-events-none max-h-0 opacity-0"
          }`}
        >
          <MobileNav onClose={() => setOpen(false)} />
        </div>
      </div>
    </header>
  );
}
