import WebsiteCard from "../shared/website-card";

const websiteItems = [
    {
        title: "Medium",
        label: "medium.com",
        href: "https://medium.com",
        description: "Medium is an open platform where readers find dynamic thinking and where expert and undiscovered voices can share their writing on any topic",
    },
    {
        title: "Pinterest",
        label: "pinterest.com",
        href: "https://pinterest.com",
        description: "Pinterest is a useful tool for web developers and designers to gather UI inspiration, explore design trends, and save visual references for creative projects",
    },
    {
        title: "XDA Forums",
        label: "xdaforums.com",
        href: "https://xdaforums.com/",
        description: "XDA is a developer forum focused on mobile development, modding, and custom ROMs - ideal for developers interested in Android, root access, and firmware customization",
    },
];

export default function WebsiteTab() {
    return (
        <section>
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-extrabold text-primary">
                    Usefull Website
                </h2>
                <div className="grid grid-cols-3 gap-5">
                    {websiteItems.map((item, index) => (
                        <WebsiteCard key={index} title={item.title} href={item.href} label={item.label} description={item.description} />
                    ))}
                </div>
            </div>
        </section>
    )
}