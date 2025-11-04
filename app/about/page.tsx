import ActivitiesSection from "@/app/about/_components/activities-section";
import HobbiesSection from "@/app/about/_components/hobbies-section";
import IntroSection from "@/app/about/_components/intro-section";

export default function AboutPage() {
    return (
        <main className="max-w-3xl min-w-sm flex-1 mx-auto mt-1 pt-23 flex flex-col gap-10 pb-10 px-5 text-foreground">
            <IntroSection />

            <HobbiesSection />

            <ActivitiesSection />
        </main>
    )
}