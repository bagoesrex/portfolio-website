import GearCard from "../shared/gear-card";

const gearItems = [
    {
        icon: "/images/uses/laptop.webp",
        title: "Lenovo 14ALC7",
        description: "AMD Ryzen 3 5300U 4-core and 8-thread, 512GB SSD and 16GB RAM",
        tags: ["Laptop", "Lenovo"]
    },
    {
        icon: "/images/uses/keyboard.webp",
        title: "Ajazz AK820 Pro",
        description: "75% Gasket-mounted Bluetooth 5.1/2.4G Wireless & Type-C Wired Mechanical Keyboard",
        tags: ["Keyboard", "Ajazz"]
    },
    {
        icon: "/images/uses/cca.webp",
        title: "CCA Polaris",
        description: "Dual Cavity Dynamic Driver Hifi Noise Cancelling In Ear Monitors",
        tags: ["IEM", "CCA"]
    },
    {
        icon: "/images/uses/mouse.webp",
        title: "G102 Prodigy",
        description: "Lightweight RGB gaming mouse with 8000 DPI and classic ergonomic design",
        tags: ["Mouse", "Logitech"]
    },
    {
        icon: "/images/uses/primary-phone.webp",
        title: "Poco F6",
        description: "My primary smartphone - Powered by Snapdragon 8s Gen 3, with 1.5K AMOLED display",
        tags: ["Smartphone", "Xiaomi"]
    },
    {
        icon: "/images/uses/secondary-phone.webp",
        title: "Redmi Note 9",
        description: "Used as a secondary phone for messaging and backup - Powered by MediaTek Helio G85",
        tags: ["Smartphone", "Xiaomi"]
    },
];

export default function EverydayTab() {
    return (
        <section>
            <div className="flex flex-col gap-4">
                <h2 className="text-xl md:text-2xl font-extrabold text-primary">
                    Everyday
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {gearItems.map((item, index) => (
                        <GearCard key={index} icon={item.icon} title={item.title} description={item.description} tags={item.tags} />
                    ))}
                </div>
            </div>
        </section>
    )
}