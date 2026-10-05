import { Contador } from "../components/exemplos/contador.component";
import Pagina from "../components/shared/pagina.component";

export default function PageContador(){
    return (
        <Pagina titulo="Contador" subtitulo="Exemplo de contador com React">
            <Contador/>
            <Contador initialValue={100}/>
            <Contador initialValue={500}/>
        </Pagina>
    )
}