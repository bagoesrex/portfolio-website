import { SiFacebook, SiGithub, SiInstagram, SiTelegram, SiXdadevelopers } from "react-icons/si";

const SOCIAL_LINKS = [
  {
    href: "https://github.com/bagoesrex",
    label: "GitHub",
    icon: SiGithub,
    className: "hover:text-black hover:bg-gray-400/20",
  },
  {
    href: "https://www.instagram.com/bagoesrex/",
    label: "Instagram",
    icon: SiInstagram,
    className: "hover:text-pink-500 hover:bg-pink-500/10",
  },
  {
    href: "https://t.me/bagoesrex",
    label: "Telegram",
    icon: SiTelegram,
    className: "hover:text-sky-500 hover:bg-sky-500/10",
  },
  {
    href: "https://www.facebook.com/bagoesrex",
    label: "Facebook",
    icon: SiFacebook,
    className: "hover:text-blue-600 hover:bg-blue-600/10",
  },
  {
    href: "https://xdaforums.com/m/bagoesrex.12535621",
    label: "XDA",
    icon: SiXdadevelopers,
    className: "hover:text-emerald-600 hover:bg-emerald-600/10",
  },
];

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-2.5">
      {SOCIAL_LINKS.map(({ label, href, icon: Icon, className }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          target="_blank"
          rel="noopener noreferrer"
          className={`rounded-md p-2.5 text-black/68 transition-colors ${className} `}
        >
          <Icon className="size-5" />
        </a>
      ))}
    </div>
  );
}
