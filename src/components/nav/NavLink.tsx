'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
    title: string
    href: string
}

function NavLink({ title, href } : Props) {
    const pathname = usePathname()

    return ( <Link href={href} className={`uppercase medium ${pathname === href && "text-blue"}`}>{title}</Link> );
}

export default NavLink;