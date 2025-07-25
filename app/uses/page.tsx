import UsesTabs from "@/components/uses/uses-tabs";

export default function UsesPage() {
    return (
        <section className="max-w-3xl min-w-sm mx-auto mt-1 pt-20 flex flex-col gap-5 pb-10 px-5 text-foreground">

            <h1 className="text-3xl font-extrabold text-primary">
                What do I use?
            </h1>
            <p className="leading-relaxed">
                Here’s a list of tools, technologies, and gear I use on a daily basis to design, develop, and stay productive.
            </p>
            <UsesTabs />
        </section>
    )
}