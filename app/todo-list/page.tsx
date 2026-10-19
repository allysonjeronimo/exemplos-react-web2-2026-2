"use client"

import Pagina from "../components/shared/pagina.component";
import { TodoForm } from "../components/todo-list/todo-form.component";
import { TodoItem } from "../components/todo-list/todo-item.component";
import { Todo } from "../components/todo-list/todo.types";

export default function PageTodoList(){

    function addTodo(text: string){
        console.log("Adicionando tarefa: ", text)
    }

    function onDelete(id: number){

    }

    function setCompleted(id: number){

    }

    const newTodo: Todo = {
        id: 1,
        text: "Teste",
        completed: false
    }
    
    return (
        <Pagina 
            titulo="Todo List" 
            subtitulo="Exemplo de lista de tarefas com React">
            <TodoForm addTodo={addTodo}/>
            <TodoItem todo={newTodo} onDelete={onDelete} setCompleted={setCompleted}/>
        </Pagina>
    )
}