import { TodoItem } from "./todo-item.component";
import { Todo } from "./todo.types"

type TodoListProps = {
    todos: Todo[];
    onDelete: (id: number) => void;
    setCompleted: (id: number) => void;
}

export function TodoList(props: TodoListProps){
   
    if (props.todos.length === 0){
        return (
            <p>Nenhuma tarefa encontrada.</p>
        )
    }

    return (
        <ul className="flex flex-col gap-2">
            {
                props.todos.map((item: Todo) => (
                    <TodoItem
                        key={item.id}
                        todo={item}
                        onDelete={props.onDelete}
                        setCompleted={props.setCompleted}
                    />
                ))
            }        
        </ul>
    )



}