import Image from "next/image";
import MaxWidthWrapper from "../layout/max-width-wrapper";
import { Button } from "../ui/button";
import Link from "next/link";
import SocialLinks from "../shared/social-links";
import { FaUser } from "react-icons/fa";
import Cat from "../lottie/cat";

export default function HeroSection() {
  return (
    <section id="hero">
      <MaxWidthWrapper className="space-y-6 overflow-hidden pt-30 pb-20 md:space-y-1.5">
        <div className="flex flex-col-reverse items-start gap-13 overflow-hidden md:flex-row md:items-center md:gap-7 md:overflow-visible">
          <div className="flex flex-col gap-3.5">
            <h1 className="text-primary group relative h-21 w-88 self-start overflow-hidden text-3xl font-extrabold sm:self-center md:h-11 md:w-95 md:self-start">
              <div className="absolute flex translate-y-0 items-start gap-13 transition-transform duration-300 ease-in-out md:group-hover:-translate-y-11">
                <span>
                  Hi, I&apos;m <span className="border-b-3 border-dashed">Bagus</span>
                </span>

                <div className="relative w-25">
                  <span className="absolute -left-6 bg-black px-0.5 font-mono text-[11px] text-white">ALSO KNOWN AS</span>
                  <span className="absolute top-7.5 -left-6 font-mono text-[11px] text-black">SHY</span>
                  <div className="relative h-11 w-11 overflow-hidden border-b-2 border-black">
                    <div className="absolute top-2 size-11">
                      <Cat />
                    </div>
                  </div>
                  <span className="absolute top-7.5 left-12 font-mono text-[11px] text-black">KUCINK</span>
                </div>
              </div>

              <div className="absolute flex translate-y-10 items-start gap-3 transition-transform duration-300 ease-in-out md:group-hover:translate-y-0">
                <span className="border-b-3 border-dashed">Rahmawan</span>
                <div className="relative">
                  <div className="relative h-20 w-44 overflow-hidden">
                    <div className="absolute top-0 left-0">
                      <div className="relative size-15">
                        <Image src="/icons/hah-cat.webp" alt="Hah Cat Image" fill className="object-contain" />
                      </div>
                    </div>
                    <span className="absolute top-4.5 left-12 font-mono text-[11px] text-black">HAH</span>
                    <div className="absolute top-0 left-30">
                      <div className="relative size-15">
                        <Image src="/icons/mad-cat.webp" alt="Mad Cat Image" fill className="scale-x-[-1] object-contain" />
                      </div>
                    </div>
                    <span className="absolute top-4.5 left-28.5 font-mono text-[11px] text-black">MY</span>
                    <span className="absolute top-8 left-20.5 font-mono text-[11px] text-black">WHISKAS</span>
                  </div>
                </div>
              </div>
            </h1>
            <p className="leading-7.5 font-light">
              A tech enthusiast with a strong interest in building responsive and interactive web applications. I enjoy experimenting with new
              technologies and creating clean user interfaces.
            </p>
          </div>
          <div className="relative h-50 min-w-60 self-center">
            <Image
              src="/images/home/ranpo.webp"
              alt="Hero Image"
              fill
              priority
              className="scale-110 rotate-20 object-cover drop-shadow-2xl md:drop-shadow-xl"
            />
            <span className="absolute bottom-2 animate-bounce [animation-duration:0.9s]">^w^</span>
            <span className="absolute -bottom-5 left-19 animate-bounce [animation-duration:0.8s]">^w^</span>
            <span className="absolute -bottom-6 left-36 animate-bounce [animation-duration:0.9s]">^w^</span>
            <span className="absolute -bottom-2 left-50 animate-bounce [animation-duration:0.8s]">^w^</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-5 md:flex-row md:items-start">
          <Button asChild className="w-full px-4 py-5 md:w-fit">
            <Link href="/about">
              <div className="flex items-center gap-3">
                <FaUser />
                <span>More About Me</span>
              </div>
            </Link>
          </Button>
          <SocialLinks />
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
