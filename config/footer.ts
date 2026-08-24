import {
  SiFacebook,
  SiGithub,
  SiGitbook,
  SiInstagram,
  SiTelegram,
  SiXdadevelopers,
  SiActigraph,
} from "react-icons/si";

export const FOOTER_LINKS = [
  {
    label: "About",
    href: "/about",
    icon: SiActigraph,
  },
  {
    label: "Projects",
    href: "/#projects",
    icon: SiGitbook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/bagoesrex/",
    icon: SiInstagram,
  },
  {
    label: "GitHub",
    href: "https://github.com/bagoesrex",
    icon: SiGithub,
  },
  {
    label: "Telegram",
    href: "https://t.me/bagoesrex",
    icon: SiTelegram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/bagoesrex",
    icon: SiFacebook,
  },
  {
    label: "XDA",
    href: "https://xdaforums.com/m/bagoesrex.12535621",
    icon: SiXdadevelopers,
  },
] as const;
