import Image from "next/image";
import MaxWidthWrapper from "../layout/max-width-wrapper";
import SocialLinks from "../shared/social-links";
import { FaQuoteRight } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";

export default function IntroSection() {
  return (
    <section id="intro">
      <MaxWidthWrapper className="space-y-10 pt-30 pb-10">
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-4">
          <div className="space-y-4">
            <h1 className="text-primary text-2xl font-extrabold">About Me</h1>
            <p>Hey there! I&rsquo;m Bagus Rahmawan, a tech enthusiast from Semarang.</p>
            <p className="font-sans leading-7.5">
              I&apos;m a passionate developer who enjoys exploring new technologies, writing clean and efficient code, and learning something new
              every day. When I&rsquo;m not coding, you&rsquo;ll likely find me tinkering with design, reading documentation, or debugging something I
              accidentally broke.
            </p>
          </div>
          <div className="relative aspect-square size-55">
            <Image src="/images/about/me.webp" alt="Intro Image" fill priority className="rounded-full object-cover" />
            <div className="absolute right-5 -bottom-2 flex animate-bounce items-center gap-2 rounded-xs border-[0.5px] border-gray-400 bg-gray-300/90 px-2 py-[0.5]">
              <CiCalendar className="size-3.5" />
              <p className="text-xs">Indomaret Fresh Pemuda</p>
            </div>
          </div>
        </div>
        <div className="relative max-w-100 space-y-1.5 overflow-hidden rounded-[1.5px] border-[0.8px] border-gray-200 p-4">
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
