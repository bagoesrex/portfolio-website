import { cn } from "@/lib/utils";
import MaxWidthWrapper from "../layout/MaxWidthWrapper";
import { LAYOUT } from "@/config/layout";
import RanpoSprite from "./RanpoSprite";

export default function HeroSection() {
  return (
    <section id="hero">
      <MaxWidthWrapper className="pt-30 pb-10">
        <div className="relative flex flex-col gap-8 px-6 sm:gap-3 md:flex-row md:items-center md:justify-between md:px-0">
          <div className="min-w-0 flex-1 space-y-5">
            <div className="flex min-h-32 flex-col justify-center pr-28 md:min-h-0 md:pr-0">
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

            <p className="text-sm md:text-base">
              I enjoy turning ideas into thoughtful digital experiences, with a
              focus on clean interfaces, smooth interactions, and building
              things that feel simple and useful.
            </p>
          </div>

          <div className="absolute top-0 -right-3.5 pr-3 md:static md:top-auto md:right-auto md:shrink-0 md:pr-0">
            <RanpoSprite />
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
