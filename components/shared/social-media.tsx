import { SiFacebook, SiGithub, SiInstagram, SiTelegram, SiXdadevelopers } from "react-icons/si";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const mediaLinks = [
    {
        href: "https://github.com/bagoesrex",
        label: "Github",
        icon: <SiGithub />,
    },
    {
        href: "https://www.instagram.com/bagoesrex/",
        label: "Instagram",
        icon: <SiInstagram />,
    },
    {
        href: "https://t.me/bagoesrex",
        label: "Telegram",
        icon: <SiTelegram />,
    },
    {
        href: "https://www.facebook.com/bagoesrex",
        label: "Facebook",
        icon: <SiFacebook />,
    },
    {
        href: "https://xdaforums.com/m/bagoesrex.12535621",
        label: "Xda",
        icon: <SiXdadevelopers />,
    },
];

export default function SocialMedia() {
    return (
        <div className="flex flex-row gap-2">
            {mediaLinks.map((media) => (
                <Tooltip key={media.href}>
                    <TooltipTrigger asChild>
                        <a href={media.href} target="_blank" rel="noopener noreferrer" aria-label={media.label}>
                            <Button variant="ghost" size="icon" className="text-primary hover:bg-transparent">
                                {media.icon}
                            </Button>
                        </a>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>{media.label}</p>
                    </TooltipContent>
                </Tooltip>
            ))}
        </div>
    );
}
