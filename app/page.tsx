import { Contador } from './components/exemplos/contador.component'
import { ExemploState } from './components/exemplos/exemplo-state.component'
import {Titulo} from './components/shared/titulo.component'

export default function Home() {
  return (
    <div className="flex flex-col gap-10 p-5">
      <Titulo 
        principal="Bem-vindo ao React" 
        subtitulo="Aprendendo React e Next.js"
        />
      <Contador />
      <Contador initialValue={100} />
      <Contador initialValue={200} />
    </div>
  )
}
