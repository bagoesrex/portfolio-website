import type { Metadata } from "next";
import IntroSection from "@/components/about/IntroSection";
import PageTransition from "@/components/layout/PageTransition";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Bagus Rahmawan (BagoesRex) — background, skills, and journey as a web developer.",
  alternates: { canonical: "https://bagoesrex.com/about" },
  openGraph: { url: "https://bagoesrex.com/about" },
};

export default function AboutPage() {
  return (
    <PageTransition>
      <main className="min-h-[105vh]">
        <IntroSection />
      </main>
    </PageTransition>
  );
}
