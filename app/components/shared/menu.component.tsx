import Link from "next/link";

export function Menu(){

    // Link => MenuItem link="" text=""
    return (
        <div>
            <h1 className="font-black text-xl">Logo</h1>
                <ul>
                    <Link href="/">
                        <li>Home</li>
                    </Link>
                    <Link href="/contador">
                        <li>Contador</li>
                    </Link>
                    <Link href="/todo-list">
                        <li>Todo List</li>
                    </Link>
                </ul>
        </div>
    )
}