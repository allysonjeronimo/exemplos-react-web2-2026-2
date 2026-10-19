
import { MenuItem } from "./menu-item.component";

export function Menu(props: any){
    return (
        <ul>
            {
                props.items.map((item: any) => (
                    <MenuItem
                        key={item.link}
                        link={item.link}
                        text={item.text}
                        icon={item.icon}
                    />
                ))
            }
        </ul>
    )
}