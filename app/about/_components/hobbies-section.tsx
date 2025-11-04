import HobbiesGrid from "./hobbies-grid";

export default function HobbiesSection() {
    return (
        <section id="hobbies" className="flex flex-col gap-5">
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-extrabold text-primary">
                    Things I Enjoy
                </h2>
                <p className="leading-relaxed">
                    Besides coding, I love spending time on things that inspire creativity, help me relax, and keep me balanced.
                </p>
                <HobbiesGrid />
            </div>
        </section>
    )
}