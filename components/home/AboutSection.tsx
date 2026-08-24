import { LAYOUT } from "@/config/layout";
import { cn } from "@/lib/utils";
import MaxWidthWrapper from "../layout/MaxWidthWrapper";
import Image from "next/image";
import { SiSpotify } from "react-icons/si";
import { ArrowUpRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about">
      <MaxWidthWrapper className="space-y-5 pt-10 pb-5">
        <div className="space-y-1">
          <h2 className="text-xl font-bold">About</h2>
          <p>
            Crafting purposeful digital experiences centered on clarity,
            performance, and real-world usefulness.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-3.5">
          <div className="min-min-h-35 relative flex flex-col justify-between rounded-xl bg-blue-200 p-4.5">
            <div className="h-1 w-17 rounded-md bg-white/45"></div>
            <div className="size-fit self-end rounded-full bg-yellow-400 px-2 py-1">
              <p className="text-xs">About me</p>
            </div>
          </div>
          <div className="relative flex min-h-35 flex-col justify-between rounded-xl bg-pink-200 p-4.5">
            <p className="text-sm font-bold">Full Stack Developer</p>
            <p className="text-xs uppercase">current role</p>
            <div className="absolute right-3 bottom-3.5">
              <div className="relative size-7 overflow-hidden rounded-full">
                <Image
                  src="/icons/home/profile.webp"
                  alt="Ranpo"
                  fill
                  priority
                  draggable={false}
                  className="pointer-events-none object-cover select-none"
                />
              </div>
            </div>
          </div>
          <div className="relative row-span-2 h-full overflow-hidden rounded-xl border border-gray-200">
            <Image
              src="/images/about/ranpo.webp"
              alt="Ranpo"
              fill
              priority
              draggable={false}
              className="pointer-events-none mt-3 scale-x-[-1.3] scale-y-[1.3] object-cover select-none"
            />
          </div>
          <div className="min-h-35 rounded-xl bg-green-300 p-4.5">
            <p className="font-bold text-gray-100">
              Welcome to my corner on the internet :)
            </p>
          </div>
          <div className="group/card relative flex min-h-35 flex-col gap-2.5 overflow-hidden rounded-xl border border-gray-200 bg-white p-4.5">
            <div className="flex items-center justify-between text-green-500">
              <p className="text-xs font-semibold uppercase">recent favorite</p>
              <SiSpotify className="text-green" size={17} />
            </div>
            <div>
              <p className="text-[14.5px] font-semibold">Reality Club</p>
              <p className="text-[11px]">A Sorrowful Reunion</p>
            </div>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="group/link mt-auto flex items-center gap-1.5 font-semibold text-green-500"
            >
              <p className="text-[10.5px] group-hover/link:underline">
                View Track
              </p>
              <ArrowUpRight
                className="mt-0.5 mr-0.5 duration-200 group-hover/link:-mt-0.5 group-hover/link:ml-0.5"
                size={9}
              />
            </a>
            <div className="absolute -right-9 -bottom-13 z-10 size-30 overflow-hidden rounded-full bg-black duration-500 group-hover/card:-right-6.5 group-hover/card:-bottom-6.5">
              <div className="flex size-full items-center justify-center">
                <div className="relative size-14.5 overflow-hidden rounded-full">
                  <Image
                    src="/images/about/ranpo.webp"
                    alt="Ranpo"
                    fill
                    priority
                    draggable={false}
                    className="pointer-events-none object-cover select-none"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="gap flex min-h-35 flex-col gap-4.5 rounded-xl bg-yellow-200 p-4.5">
            <p className="text-sm font-semibold">
              Building scalable & performant web applications
            </p>
            <p className="line-clamp-2 text-xs leading-5">
              I enjoy building mobile and web applications, exploring Android
              customization, and learning new technologies. I primarily work
              with TypeScript.
            </p>
          </div>
          <div className="col-span-2 min-h-35 rounded-xl bg-amber-900"></div>
        </div>
      </MaxWidthWrapper>
      <hr
        className={cn(
          "mx-auto h-0.5 w-full border-0 bg-gray-200",
          LAYOUT.container,
        )}
      />
    </section>
  );
}
