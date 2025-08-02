import { ChevronRight } from "lucide-react";
import GlareHover from "../blocks/Animations/GlareHover/GlareHover";
import Link from "next/link";

interface CustomButtonProps {
    link: string;
    children: React.ReactNode;
    className?: string;
}

export default function CustomButton({ link, children, className = "" }: CustomButtonProps) {
    return (
        <Link href={link} className={`relative bg-primary overflow-hidden rounded-sm border-2 border-secondary ${className}`} >
            <GlareHover
                width="100%"
                height="35px"
                background="transparent"
                glareColor="#00bcfd"
                glareOpacity={1}
                glareAngle={-30}
                glareSize={250}
                transitionDuration={500}
                playOnce={false}
            >
                <div className="flex flex-row justify-center items-center gap-3 text-background">
                    <h4 className="text-sm">
                        {children}
                    </h4>
                    <ChevronRight size={15} />
                </div>
            </GlareHover>
        </Link >
    )
}