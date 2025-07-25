import Link from "next/link"

const navItems = [
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/projects", label: "Projects" },
    { href: "/uses", label: "Uses" },
]

export default function FooterNavbar() {
    return (
        <nav className="flex flex-col text-sm gap-2">
            {navItems.map((item) => (
                <div key={item.href}>
                    <Link href={item.href} className="group">
                        <p className="group-hover:underline">
                            {item.label}
                        </p>
                    </Link>
                </div>
            ))}
        </nav>
    )
}