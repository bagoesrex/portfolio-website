import { cn } from "@/lib/utils";
import MaxWidthWrapper from "../layout/MaxWidthWrapper";
import { LAYOUT } from "@/config/layout";
import RanpoSprite from "./RanpoSprite";

export default function HeroSection() {
  return (
    <section id="hero">
      <MaxWidthWrapper className="pt-30 pb-10">
        <div className="grid grid-cols-[auto_auto_1fr] items-center gap-x-3 gap-y-4 px-6 md:grid-cols-[1fr_auto] md:gap-x-8 md:gap-y-5 md:px-0">
          <div className="col-start-1 row-start-1 space-y-1">
            <div className="group relative h-[30.5px] w-fit overflow-hidden select-none">
              <p
                aria-hidden="true"
                className="font-architects-daughter invisible text-xl leading-none font-bold tracking-[3.3px] whitespace-nowrap md:text-2xl"
              >
                Bagus Rahmawan
              </p>

              <h1 className="font-architects-daughter absolute top-0 left-0 text-xl leading-none font-bold tracking-[3.1px] whitespace-nowrap transition-all duration-400 group-hover:top-8 md:text-2xl">
                Bagus Rahmawan
              </h1>
              <p className="font-architects-daughter absolute top-8 left-0 text-xl leading-none font-bold tracking-[3.3px] whitespace-nowrap transition-all duration-400 group-hover:top-0 md:text-2xl">
                @bagoesrex
              </p>
            </div>
            <p className="text-muted-foreground text-sm md:text-base">
              Tech Enthusiast
            </p>
          </div>

          <div className="col-start-2 row-start-1 flex justify-start md:row-span-2 md:justify-end">
            <RanpoSprite />
          </div>

          <div className="col-span-3 md:col-span-1 md:col-start-1 md:row-start-2">
            <p className="text-sm md:text-base">
              I enjoy turning ideas into thoughtful digital experiences, with a
              focus on clean interfaces, smooth interactions, and building
              things that feel simple and useful.
            </p>
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
