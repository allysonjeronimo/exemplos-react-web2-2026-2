"use client"

import { CircleX, Dices, StepBack, StepForward } from "lucide-react"
import { useState } from "react"

export function Contador(props: any){

    const [valor, setValor] = useState(props.initialValue ?? 0)

    function incrementar(){
       setValor(valor + 1)
    }

    function decrementar(){
        if(valor > 0){
            setValor(valor - 1)
        }
    }

    function zerar(){
        setValor(0)
    }

    function randomizar(){
        const random = Math.floor(Math.random() * 100)
        setValor(random)
    }

    return (
        <div className="flex flex-col gap-2 items-start">
            <span className="text-3xl font-black">{valor}</span>
            <div className="flex gap-2">
                <button 
                    className="btn btn-success" 
                    onClick={incrementar}>
                        <StepForward/>
                </button>
                <button 
                    className="btn btn-secondary" 
                    onClick={decrementar}>
                        <StepBack/>
                </button>
                <button 
                    className="btn btn-danger" 
                    onClick={zerar}>
                    <CircleX/>
                </button>
                <button 
                    className="btn btn-primary" 
                    onClick={randomizar}>
                    <Dices/>
                </button>
            </div>
        </div>
    )
}