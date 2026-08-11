import type { Metadata } from "next";
import ActivitiesSection from "@/components/about/activities-section";
import IntroSection from "@/components/about/intro-section";
import SkillsSection from "@/components/about/skills-section";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Bagus Rahmawan, a web developer focused on responsive interfaces, modern frontend technologies, and thoughtful user experiences.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    url: `${siteConfig.url}/about`,
    title: "About Bagus Rahmawan",
    description: "Learn more about Bagus Rahmawan, a web developer focused on responsive interfaces and modern frontend technologies.",
  },
};

export default function AboutPage() {
  return (
    <main>
      <IntroSection />
      <SkillsSection />
      <ActivitiesSection />
    </main>
  );
}
