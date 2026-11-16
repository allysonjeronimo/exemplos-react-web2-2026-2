"use client"

import { useState, useEffect } from "react";
import Pagina from "../components/shared/pagina.component";
import { TodoForm } from "../components/todo-list/todo-form.component";
import { TodoList } from "../components/todo-list/todo-list.component";
import { Todo } from "../components/todo-list/todo.types";
import StorageService from "../components/todo-list/storage.service";

const TODO_LIST_KEY = "todos"

export default function PageTodoList(){

    const [todos, setTodos] = useState<Todo[]>([])
    const [nextId, setNextId] = useState(1)
    const [isLoaded, setIsLoaded] = useState(false)

    // useEffect(() => {}, [])
    // () => {} // executa no momento que o componente é iniciado
    // [] (Dependencia externa) // se for alterado, executa função novamente


    // carregar dados do Storage
    useEffect(() => {
        // executa no momento que o componente é montado
        const todos = StorageService.get<Todo[]>(TODO_LIST_KEY) as Todo[]

        if(todos && todos.length > 0){
            setTodos(todos)
            setNextId(maxId(todos) + 1)
        }

        setIsLoaded(true) 
        
    }, [])

    // salvar dados no storage
    useEffect(() => {

        if(isLoaded)
            StorageService.set(TODO_LIST_KEY, todos)

    }, [todos, isLoaded])

    
    function addTodo(text: string){
        console.log("Adicionando tarefa: ", text)

        const newTodo: Todo = {
            id: nextId,
            text: text,
            completed: false
        }

        let newTodos = [...todos, newTodo]

        sortTodos(newTodos)
        setTodos(newTodos)
        setNextId(nextId + 1)
    }

    function onDelete(id: number){
        const newTodos = todos.filter(item => item.id !== id)
        sortTodos(newTodos)
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

        sortTodos(newTodos)
        setTodos(newTodos)
    }
    
    function sortTodos(todos: Todo[]){
        todos.sort((a, b) => {
            return Number(a.completed) - Number(b.completed)
        })
    }

    function maxId(todos: Todo[]) : number {
        const maxId = todos.reduce((max, todo) => {
            if (max > todo.id){
                return max
            }
            return todo.id
        }, 0)

        return maxId
    }

    return (
        <Pagina 
            titulo="Minha Todo List" 
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