export function Titulo(props: any){
    return (
        <div className="flex flex-col">
            <h1 className="text-lg font-bold">{props.principal ?? "Sem Título"}</h1>
            <h2 className="text-sm text-gray-500">{props.subtitulo}</h2>
        </div>
    )
} 