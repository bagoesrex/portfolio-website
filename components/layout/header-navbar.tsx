"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

interface HeaderNavbarProps {
    onLinkClick?: () => void;
}

const navItems = [
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/projects", label: "Projects" },
    { href: "/uses", label: "Uses" },
    { href: "/photos", label: "Photos" }
]

export default function HeaderNavbar({ onLinkClick }: HeaderNavbarProps) {
    const pathname = usePathname()

    return (
        <NavigationMenu viewport={false} className="w-full max-w-full md:max-w-max flex justify-start items-start">
            <NavigationMenuList className="flex flex-col md:flex-row w-full justify-center items-start pl-3">
                {navItems.map((item) => (
                    <NavigationMenuItem key={item.href}>
                        <NavigationMenuLink
                            asChild
                            className={`"w-full text-center" ${navigationMenuTriggerStyle()} ${pathname === item.href ? "text-primary font-bold" : "font-bold"
                                }`}
                        >
                            <Link href={item.href} onClick={onLinkClick}>{item.label}</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    )
}
