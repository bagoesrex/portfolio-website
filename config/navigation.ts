export interface NavigationItem {
  href: string;
  label: string;
}

export const NAV_ITEMS = [
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/blog",
    label: "Blog",
  },
  {
    href: "/projects",
    label: "Projects",
  },
] as const satisfies readonly NavigationItem[];
