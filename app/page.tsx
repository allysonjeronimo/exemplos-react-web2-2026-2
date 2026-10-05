import Pagina from './components/shared/pagina.component'

export default function Home() {
  // atributos: <tag attr="value"/>
  // conteúdo: <tag>Valor</tag>
  // <tag attr="value">Valor</tag>


  return (
    <Pagina titulo="Página inicial" subtitulo="Bem-vindo a nossa aplicação React!">
      <span>Conteúdo da página</span>
    </Pagina>
  )
}
