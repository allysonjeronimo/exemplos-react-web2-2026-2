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
    const textStyle = todo.completed ? "flex-1 line-through" : "flex-1"
    
    return (
        <li className="flex gap-4 items-center bg-gray-900 px-4 py-2 rounded-md">
            <input
                type="checkbox"
                onChange={() => setCompleted(todo.id)}
            />
            <span className={textStyle}>
                {todo.text}
            </span>
            <button className="btn btn-danger" onClick={() => onDelete(todo.id)}>
                Excluir
            </button>
        </li>
    )
}