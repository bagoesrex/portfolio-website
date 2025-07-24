import HobbiesSection from "@/components/about/hobbies-section";
import IntroSection from "@/components/about/intro-section";

export default function AboutPage() {
    return (
        <main className="max-w-3xl mx-auto mt-1 pt-23 flex flex-col gap-10 pb-10 px-5 text-foreground">

            <IntroSection />

            <HobbiesSection />
            
        </main>
    )
}