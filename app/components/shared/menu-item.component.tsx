import Link from "next/link"
import { LucideIcon } from "lucide-react"

type MenuItemProps = {
    link: string,
    text: string,
    icon: LucideIcon
}

export function MenuItem(props: MenuItemProps){

    const Icon = props.icon
    return (
        <Link className="menu-item" href={props.link}>
            <Icon size={20}/>
            <li>{props.text}</li>
        </Link>
    )
}