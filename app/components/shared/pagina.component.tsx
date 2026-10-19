import Link from "next/link"
import { Titulo } from "./titulo.component"
import { Menu } from "./menu.component"
import { Calculator, House, ListTodo } from "lucide-react"

const items = [
  {text: "Home", link: "/", icon: House},
  {text: "Contador", link: "/contador", icon: Calculator},
  {text: "Todo List", link: "/todo-list", icon: ListTodo}
]

export default function Pagina(props: any){
    return (
        <div className="flex min-h-screen">
            <aside className="flex flex-col gap-6 bg-blue-900 w-64 p-6">
                <h1 className="font-black text-xl">Logo</h1>
                <Menu items={items}/>
            </aside>
            <main className="p-6 flex flex-col gap-6 bg-gray-800 flex-1">
                <Titulo
                    principal={props.titulo}
                    subtitulo={props.subtitulo}
                />
                {props.children}
            </main> 
        </div>
    )
}