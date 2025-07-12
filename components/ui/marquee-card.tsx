import { JSX } from "react";
import Marquee from "react-fast-marquee";

interface MarqueeItem {
    id: number;
    icon: JSX.Element;
    title: string;
    description: string;
}

type MarqueeDirection = "left" | "right";

interface MarqueeCardProps {
    items: MarqueeItem[];
    speed?: number;
    pauseOnHover?: boolean;
    gradient?: boolean;
    direction?: MarqueeDirection;
}

export default function MarqueeCard({
    items,
    speed = 50,
    pauseOnHover = true,
    gradient = false,
    direction = "left",
}: MarqueeCardProps) {
    return (
        <div className="bg-white py-2 rounded-xs overflow-hidden">
            <Marquee
                speed={speed}
                pauseOnHover={pauseOnHover}
                gradient={gradient}
                direction={direction}
            >
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="mx-2 flex items-center gap-3 justify-center bg-gray-100 rounded-xl px-4 py-3 min-w-[150px]"
                    >
                        <div className="w-7 text-sky-500">{item.icon}</div>
                        <div>
                            <h3 className="text-sm font-semibold text-black">{item.title}</h3>
                            <p className="text-xs text-gray-500">{item.description}</p>
                        </div>
                    </div>
                ))}
            </Marquee>
        </div>
    );
}
