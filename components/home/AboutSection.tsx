import { LAYOUT } from "@/config/layout";
import { cn } from "@/lib/utils";
import MaxWidthWrapper from "../layout/MaxWidthWrapper";
import Image from "next/image";
import { SiSpotify } from "react-icons/si";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const TOOL_ITEMS = [
  {
    icon: "/icons/home/tools/typescript.svg",
    label: "TypeScript",
  },
  {
    icon: "/icons/home/tools/typescript.svg",
    label: "TypeScript",
  },
  {
    icon: "/icons/home/tools/typescript.svg",
    label: "TypeScript",
  },
  {
    icon: "/icons/home/tools/typescript.svg",
    label: "TypeScript",
  },
  {
    icon: "/icons/home/tools/typescript.svg",
    label: "TypeScript",
  },
];

export default function AboutSection() {
  return (
    <section id="about">
      <MaxWidthWrapper className="space-y-5 pt-10 pb-5">
        <div className="space-y-1">
          <h2 className="text-[21.5px] font-[640] tracking-tighter">About</h2>
          <p className="text-sm md:text-base">
            Crafting purposeful digital experiences centered on clarity,
            performance, and real-world usefulness.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3.5 md:grid-cols-3">
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
          <div className="relative col-span-2 h-full min-h-45 overflow-hidden rounded-xl border border-gray-200 md:col-span-1 md:row-span-2">
            <Image
              src="/images/about/ranpo.webp"
              alt="Ranpo"
              fill
              priority
              draggable={false}
              className="pointer-events-none scale-x-[-1] object-cover select-none md:mt-3 md:scale-x-[-1.3] md:scale-y-[1.3]"
            />
          </div>
          <div className="flex min-h-35 flex-col justify-between rounded-xl bg-green-400 p-4.5 text-white">
            <p className="font-architects-daughter text-[16px] font-bold tracking-[1.3px]">
              Welcome to my corner on the internet :)
            </p>
            <Link
              className="group/link flex items-center gap-1.5 font-semibold"
              href="/about"
            >
              <p className="text-[10.5px] group-hover/link:underline">
                My journey
              </p>
              <ArrowUpRight
                className="mt-0.5 mr-0.5 duration-200 group-hover/link:-mt-0.5 group-hover/link:ml-0.5"
                size={9}
              />
            </Link>
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
          <div className="col-span-2 flex min-h-35 flex-col gap-3 rounded-xl bg-yellow-200 p-4.5 md:col-span-1">
            <p className="text-sm leading-snug font-bold">
              Thoughts, experiments, and things I learn along the way.
            </p>
            <p className="line-clamp-2 text-xs leading-5">
              A small collection of notes about development, design, and ideas
              worth remembering.
            </p>
            <Link
              className="group/link flex items-center gap-1.5 font-bold"
              href="/"
            >
              <p className="text-[10.5px] group-hover/link:underline">
                Read my logs
              </p>
              <ArrowUpRight
                className="mt-0.5 mr-0.5 duration-200 group-hover/link:-mt-0.5 group-hover/link:ml-0.5"
                size={9}
              />
            </Link>
          </div>
          <div className="col-span-2 flex min-h-35 flex-col gap-3 rounded-xl bg-mauve-600 p-4.5">
            <p className="text-sm font-semibold text-white">
              Constantly Learning
            </p>
            <p className="line-clamp-3 text-xs leading-5 text-white/78">
              Always learning, experimenting, and finding better ways to build,
              while sharpening my skills with TypeScript and exploring tools
              that help me create better products.
            </p>
            <div className="mt-auto flex items-end justify-between">
              <p className="text-[10.5px] text-white/78 uppercase">
                my primary tools
              </p>
              <div className="mt-0.5 flex gap-1 rounded-xl border-[0.01px] border-white/31 bg-white/27 px-[4.5px] py-[3.5px]">
                {TOOL_ITEMS.map(({ icon, label }, i) => (
                  <div
                    key={i}
                    className="rounded-md border-white/45 bg-white/18 p-[5.2px]"
                  >
                    <div className="relative size-[12.5px] overflow-hidden">
                      <Image
                        src={icon}
                        alt={`${label} image`}
                        fill
                        priority
                        draggable={false}
                        className="pointer-events-none object-cover select-none"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
      <hr
        className={cn(
          "mx-auto w-[93%] border-t-2 border-dotted border-gray-200",
          LAYOUT.container,
        )}
      />
    </section>
  );
}
