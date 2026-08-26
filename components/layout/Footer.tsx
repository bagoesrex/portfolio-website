"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Clock3 } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { FOOTER_LINKS } from "@/config/footer";

const jakartaTimeFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: "Asia/Jakarta",
  hour: "2-digit",
  minute: "2-digit",
  hour12: true,
});

function JakartaTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => setTime(jakartaTimeFormatter.format(new Date()));

    updateTime();
    const intervalId = window.setInterval(updateTime, 1000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <time
      className="flex items-center gap-1.5 text-sm"
      aria-label="Waktu Indonesia Barat"
    >
      <Clock3 size={15} aria-hidden="true" />
      <span>{time || "--:--"} WIB</span>
    </time>
  );
}
import { LAYOUT } from "@/config/layout";
import { cn } from "@/lib/utils";

export default function Footer() {
  return (
    <footer>
      <MaxWidthWrapper className="hidden px-0 pt-15 pb-5">
        <div className="space-y-7">
          <nav className="px-3.75">
            <ul className="grid grid-cols-4 gap-x-5 gap-y-2.75">
              {FOOTER_LINKS.map(({ href, label, icon: Icon }, i) => (
                <li key={i}>
                  <Link
                    href={href}
                    className="flex items-center gap-2.5 duration-700 hover:text-orange-800"
                  >
                    <Icon size={16} />{" "}
                    <span className="text-[17px] font-[420]">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <hr
            className={cn(
              "mx-auto w-[93%] border-t-2 border-dotted border-gray-200",
              LAYOUT.container,
            )}
          />
          <div className="-mt-3 flex items-center justify-between px-3.75 text-sm">
            <p className="">
              Bagus Rahmawan <span>©</span> 2026
            </p>
            <JakartaTime />
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
}
