import Link from "next/link";

interface NavItemProps {
    title: string;
    path: string;
}

export const NavItem = ({title, path}: NavItemProps) => {
    return (
        <Link href={path}>{title}</Link>
    );
}