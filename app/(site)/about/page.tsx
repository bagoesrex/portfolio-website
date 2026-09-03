import IntroSection from "@/components/about/IntroSection";
import PageTransition from "@/components/layout/PageTransition";

export default function AboutPage() {
  return (
    <PageTransition>
      <main className="min-h-[105vh]">
        <IntroSection />
      </main>
    </PageTransition>
  );
}
