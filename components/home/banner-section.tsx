import MaxWidthWrapper from "../layout/max-width-wrapper";
import Image from "next/image";

export default function BannerSection() {
  return (
    <section id="banner">
      <MaxWidthWrapper className="space-y-4 pb-10">
        <div className="flex justify-end">
          <div className="w-full space-y-2 md:w-60">
            <div className="relative h-50 w-full md:h-30 md:max-w-60 md:self-end">
              <Image
                src="/images/home/chomusuke.webp"
                alt="Banner Image"
                fill
                className="rounded-md object-cover drop-shadow-2xl md:drop-shadow-xl"
              />
            </div>
            <p className="text-center text-sm font-light text-gray-600 italic md:text-end">😽 Zzz 😽</p>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
