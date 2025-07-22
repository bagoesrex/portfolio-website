import Image from "next/image";

export default function HeroSection() {
    return (
        <section id="hero" className="flex flex-col gap-5 items-center">
            <div className="flex flex-row gap-4">
                <div className="flex flex-col space-y-2">
                    <h1 className="text-3xl font-extrabold text-primary">
                        Hi, I'm Bagus
                    </h1>
                    <h2 className="text-xl font-semibold text-primary">Fullstack Developer</h2>
                    <p className="leading-relaxed">
                        I'm a tech enthusiast with a strong interest in building responsive and interactive web applications.
                        I enjoy experimenting with new technologies and creating clean user interfaces.
                    </p>
                </div>
                <div className="w-full overflow-hidden rounded-xl shadow-md size-50">
                    <Image
                        src="/images/megumine.webp"
                        width={400}
                        height={400}
                        alt="Ilustrasi karakter Megumine"
                        className="w-full h-auto object-cover object-bottom"
                    />
                </div>
            </div>
        </section>
    )
}