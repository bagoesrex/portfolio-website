import Image from "next/image";
import MaxWidthWrapper from "../layout/max-width-wrapper";
import SocialLinks from "../shared/social-links";
import { FaQuoteRight } from "react-icons/fa";

export default function IntroSection() {
  return (
    <section id="intro">
      <MaxWidthWrapper className="flex flex-col gap-6 pt-30 pb-10">
        <h1 className="text-primary text-2xl font-extrabold">About Me</h1>
        <p className="font-patrick text-2xl tracking-wide">
          Hey there! I&rsquo;m Bagus Rahmawan, a developer based in Semarang <br />
          <span className="text-[18px] italic">— where ideas slowly turn into lines of code.</span>
        </p>
        <div className="flex flex-col gap-8 md:flex-row md:gap-8">
          <div className="space-y-4">
            <p className="font-sans leading-7.5">
              I focus on building responsive and interactive web applications with clean and maintainable code. I enjoy refining user interfaces,
              improving performance, and continuously sharpening my development workflow. Outside of coding, I often find myself reading documentation
              or fixing the bugs I confidently introduced.
            </p>
          </div>
          <div className="flex flex-col space-y-5">
            <div className="relative aspect-square size-55 self-center md:self-start">
              <div className="relative h-55 w-55">
                <Image src="/images/about/me.webp" alt="Intro Image" fill priority className="rounded-full object-cover" />
                <div className="pointer-events-none absolute inset-0 animate-[spin_50s_linear_infinite] rounded-full outline-3 outline-offset-4 outline-black outline-dashed" />
              </div>
            </div>
            <p className="text-center text-xs font-light text-gray-700 italic">
              In Indomaret Fresh Pemuda, Semarang <br /> -Jun &apos;25
            </p>
          </div>
        </div>
        <div className="relative max-w-100 space-y-1.5 self-center overflow-hidden rounded-[1.5px] border-[0.8px] border-gray-200 p-4 md:self-start">
          <blockquote className="pr-12 text-sm font-light">To obtain something, something of equal value must be given</blockquote>
          <p className="text-muted-foreground text-xs">- Equivalent Exchange</p>
          <FaQuoteRight className="absolute -top-3 -right-1 size-13 -rotate-18 text-gray-200" />
        </div>
        <div className="space-y-2">
          <p className="font-semibold">Let&rsquo;s get in touch!</p>
          <p className="mb-3">Feel free to drop me a message or connect with me on social media:</p>
          <SocialLinks />
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
