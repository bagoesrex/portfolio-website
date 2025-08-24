import ActivitiesSection from "@/components/about/activities-section";
import HobbiesSection from "@/components/about/hobbies-section";
import IntroSection from "@/components/about/intro-section";

export default function AboutPage() {
    return (
        <main className="max-w-3xl min-w-sm mx-auto mt-1 pt-23 flex flex-col gap-10 pb-10 px-5 text-foreground">

            <IntroSection />

            <HobbiesSection />

            <ActivitiesSection />

        </main>
    )
}