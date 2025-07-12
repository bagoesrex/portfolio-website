import Marquee from "react-fast-marquee";

interface MarqueeItem {
    id: number;
    content: string;
}

interface MarqueeCardProps {
    items: MarqueeItem[];
    speed?: number;
    pauseOnHover?: boolean;
    gradient?: boolean;
}

export default function MarqueeCard({
    items,
    speed = 50,
    pauseOnHover = true,
    gradient = false,
}: MarqueeCardProps) {
    return (
        <div className="bg-white py-4 shadow-md rounded-xl overflow-hidden">
            <Marquee speed={speed} pauseOnHover={pauseOnHover} gradient={gradient}>
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="mx-6 text-lg font-semibold text-gray-800 whitespace-nowrap"
                    >
                        {item.content}
                    </div>
                ))}
            </Marquee>
        </div>
    );
}