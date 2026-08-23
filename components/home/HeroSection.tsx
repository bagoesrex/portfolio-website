import MaxWidthWrapper from "../layout/MaxWidthWrapper";

export default function HeroSection() {
  return (
    <section id="hero">
      <MaxWidthWrapper className="space-y-1.5 pt-35 pb-20">
        <div className="flex justify-between gap-15">
          <div className="space-y-5">
            <div className="space-y-1">
              <h1 className="font-mono text-2xl font-bold">Bagus Rahmawan</h1>
              <p>Tech Enthusiast</p>
            </div>
            <p>
              A tech enthusiast with a strong interest in building responsive
              and interactive web applications. I enjoy experimenting with new
              technologies and creating clean user interfaces.
            </p>
          </div>
          <div className="min-h-full min-w-40 bg-red-300"></div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
