import { ChevronRight } from "lucide-react";
import GlareHover from "../blocks/Animations/GlareHover/GlareHover";
import Link from "next/link";

type Props = {
    children: React.ReactNode;
}

export default function CustomButton({ children }: Props) {
    return (
        <div className="relative">
            <GlareHover
                borderRadius="5px"
                width="90px"
                height="35px"
                background="transparent"
                glareColor="#00bcfd"
                glareOpacity={1}
                glareAngle={-30}
                glareSize={250}
                transitionDuration={500}
                playOnce={false}
            >
                <Link href={"/"} >
                    <div className="flex flex-row justify-center items-center gap-3">
                        <h2 className="text-black text-sm">
                            {children}
                        </h2>
                        <ChevronRight size={15} />
                    </div>
                </Link>
            </GlareHover>
        </div>
    )
}