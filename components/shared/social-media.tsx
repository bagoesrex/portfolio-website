import { SiFacebook, SiGithub, SiInstagram, SiTelegram, SiXdadevelopers } from "react-icons/si";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const mediaLinks = [
    {
        href: "https://github.com/bagoesrex",
        label: "Github",
        icon: SiGithub,
    },
    {
        href: "https://www.instagram.com/bagoesrex/",
        label: "Instagram",
        icon: SiInstagram,
    },
    {
        href: "https://t.me/bagoesrex",
        label: "Telegram",
        icon: SiTelegram,
    },
    {
        href: "https://www.facebook.com/bagoesrex",
        label: "Facebook",
        icon: SiFacebook,
    },
    {
        href: "https://xdaforums.com/m/bagoesrex.12535621",
        label: "Xda",
        icon: SiXdadevelopers,
    },
];

export default function SocialMedia() {
    return (
        <div className="flex flex-row gap-2">
            {mediaLinks.map(({ href, label, icon: Icon }) => (
                <Tooltip key={href}>
                    <TooltipTrigger asChild>
                        <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                            <Button variant="ghost" size="icon" className="text-primary hover:bg-transparent">
                                <Icon />
                            </Button>
                        </a>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>{label}</p>
                    </TooltipContent>
                </Tooltip>
            ))}
        </div>
    );
}
