import SocialMedia from "../shared/social-media";

export default function IntroSection() {
    return (
        <section id="intro" className="flex flex-col gap-5">
            <div className="flex flex-row gap-4">
                <div className="flex flex-col flex-3/4 gap-3">
                    <h1 className="text-2xl font-bold font-sans text-primary">
                        Hi, I’m Bagus Rahmawan from Semarang. I love building, breaking, and fixing the web. one line of code at a time.
                    </h1>
                    <p className="leading-relaxed">A passionate developer who loves exploring new technologies, writing clean code, and learning something new every day. When I'm not coding, you’ll find me tinkering with design, reading docs, or fixing bugs I accidentally created.
                    </p>
                </div>
                <div className="flex flex-col flex-1/4">
                    <h1 className="text-3xl font-extrabold bg-gradient-to-r from-blue-500 to-sky-400 text-transparent bg-clip-text">
                        Todo Image
                    </h1>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-xl font-semibold text-primary">"Reach Me On"</h2>
                <SocialMedia />
            </div>
        </section>
    )
}