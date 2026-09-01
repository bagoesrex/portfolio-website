export interface NavigationItem {
  href: string;
  label: string;
}

export const NAV_ITEMS = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/projects",
    label: "Projects",
  },
  {
    href: "/uses",
    label: "Uses",
  },
] as const satisfies readonly NavigationItem[];
