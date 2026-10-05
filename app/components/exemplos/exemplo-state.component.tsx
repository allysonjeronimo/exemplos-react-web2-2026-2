"use client"

import { useState } from "react"

export function ExemploState(){

    // hooks = funções com especiais de react
    // controle de estado = useState
    
    const [valor, setValor] = useState(0) 

    function mudarEstado(){
        setValor(valor + 1)
        console.log(valor)
    }

    return (
        <div>
            <h1 className="text-2xl font-bold">{valor}</h1>
            <button className="btn btn-primary" onClick={mudarEstado}>
                Mudar Estado
            </button>
        </div>
    )
}