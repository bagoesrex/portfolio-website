import { LAYOUT } from "@/config/layout";
import { cn } from "@/lib/utils";
import MaxWidthWrapper from "../layout/MaxWidthWrapper";

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
          <div className="min-min-h-35 relative flex flex-col justify-between rounded-xl bg-blue-200 p-5">
            <div className="h-1 w-17 rounded-md bg-white/45"></div>
            <div className="size-fit self-end rounded-full bg-yellow-400 px-2 py-1">
              <p className="text-xs">About me</p>
            </div>
          </div>
          <div className="relative flex min-h-35 flex-col justify-between rounded-xl bg-pink-200 p-5">
            <p className="text-sm font-bold">Full Stack Developer</p>
            <p className="text-xs uppercase">current role</p>
          </div>
          <div className="row-span-2 h-full rounded-xl bg-red-200"></div>
          <div className="min-h-35 rounded-xl bg-green-300 p-5">
            <p className="font-bold text-gray-100">
              Welcome to my corner on the internet :)
            </p>
          </div>
          <div className="flex min-h-35 flex-col gap-2.5 rounded-xl border border-gray-200 bg-white p-5">
            <p className="text-xs font-semibold text-green-500 uppercase">
              recent favorite
            </p>
            <div>
              <p className="text font-semibold">Reality Club</p>
              <p className="text-xs">A Sorrowful Reunion</p>
            </div>
          </div>
          <div className="gap flex min-h-35 flex-col gap-2.5 rounded-xl bg-yellow-200 p-5">
            <p className="text-sm font-semibold">
              Building scalable & performant web applications
            </p>
            <p className="line-clamp-2 text-xs">
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
