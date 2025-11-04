import ActivitiesGrid from "./activities-grid";

export default function ActivitiesSection() {
    return (
        <section id="activities" className="flex flex-col gap-5">
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-extrabold text-primary">
                    Recent Activities
                </h2>
                <p className="leading-relaxed">
                    A quick glance at what I&apos;ve been up to lately - whether it&apos;s the music I last played or the book I&apos;m currently reading.
                </p>
                <ActivitiesGrid />
            </div>
        </section>
    )
}