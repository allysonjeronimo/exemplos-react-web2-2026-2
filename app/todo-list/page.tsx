"use client"

import { useState } from "react";
import Pagina from "../components/shared/pagina.component";
import { TodoForm } from "../components/todo-list/todo-form.component";
import { TodoItem } from "../components/todo-list/todo-item.component";
import { TodoList } from "../components/todo-list/todo-list.component";
import { Todo } from "../components/todo-list/todo.types";

export default function PageTodoList(){

    const [todos, setTodos] = useState<Todo[]>([])
    const [nextId, setNextId] = useState(1)

    function addTodo(text: string){
        console.log("Adicionando tarefa: ", text)

        const newTodo: Todo = {
            id: nextId,
            text: text,
            completed: false
        }

        setTodos([...todos, newTodo])
        setNextId(nextId + 1)
    }

    function onDelete(id: number){
        const newTodos = todos.filter(item => item.id !== id)
        setTodos(newTodos)
    }

    function setCompleted(id: number){
        const newTodos = todos.map(item => {
            if(item.id == id){
                return {... item, completed: !item.completed}
            }
            else{
                return item
            }
        })
        setTodos(newTodos)
    }
    
    return (
        <Pagina 
            titulo="Todo List" 
            subtitulo="Exemplo de lista de tarefas com React">
            <TodoForm addTodo={addTodo}/>
            <TodoList
                todos={todos}
                onDelete={onDelete}
                setCompleted={setCompleted}
            />
        </Pagina>
    )
}