"use client"

import { Todo } from "./todo.types"


type TodoItemProps = {
    todo: Todo,
    setCompleted: (id: number) => void,
    onDelete: (id: number) => void
}

export function TodoItem(props: TodoItemProps){

    const todo = props.todo
    const onDelete = props.onDelete
    const setCompleted = props.setCompleted

    return (
        <li className="flex gap-4 w-64 items-start">
            <input
                type="checkbox"
                onChange={() => setCompleted(todo.id)}
            />
            <span className="text-lg flex-1">
                {todo.text}
            </span>
            <button className="btn btn-danger" onClick={() => onDelete(todo.id)}>
                Excluir
            </button>
        </li>
    )
}