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
] as const satisfies readonly NavigationItem[];
