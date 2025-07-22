import { ChevronRight } from "lucide-react";
import GlareHover from "../blocks/Animations/GlareHover/GlareHover";
import Link from "next/link";

interface CustomButtonProps {
    link: string;
    children: React.ReactNode;
}

export default function CustomButton({ link, children }: CustomButtonProps) {
    return (
        <div className="relative bg-primary overflow-hidden size-fit rounded-sm border-2 border-secondary">
            <GlareHover
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
                <Link href={link} >
                    <div className="flex flex-row justify-center items-center gap-3 text-background">
                        <h4 className="text-sm">
                            {children}
                        </h4>
                        <ChevronRight size={15} />
                    </div>
                </Link>
            </GlareHover>
        </div>
    )
}