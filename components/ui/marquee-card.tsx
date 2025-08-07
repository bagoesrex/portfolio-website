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
        <div className="rounded-xs py-1 overflow-hidden">
            <Marquee
                speed={speed}
                pauseOnHover={pauseOnHover}
                gradient={gradient}
                direction={direction}
            >
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="mx-1 flex items-center gap-1.5 justify-center bg-gray-200/40 rounded-md px-4 py-2 my-1 hover:ring-2 hover:ring-primary active:scale-95 transition-transform duration-150"
                    >
                        <div className="w-7 text-secondary">{item.icon}</div>
                        <div>
                            <h3 className="text-xs md:text-sm font-semibold text-black">{item.title}</h3>
                            <p className="text-xs text-muted-foreground">{item.description}</p>
                        </div>
                    </div>
                ))}
            </Marquee>
        </div>
    );
}
