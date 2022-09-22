import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Table from './components/Table/Table'

function App() {

  let [data, setData] = useState([""])
  let type

  async function requestTable(){
    const table = document.querySelector(".hidden")
    const button = document.querySelector(".tableButton")

    button.classList.toggle("hidden")

    const reponse = await fetch(`https://api.api-futebol.com.br/v1/campeonatos/10/tabela`, {
      method: 'get',
      headers: {'Authorization': "Bearer live_8241da6ed06ecdfbd685d94a72eb15"}
    })
    setData(await reponse.json(table.classList.toggle("hidden")))
  }

  return (
    <div className="App">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <table className='hidden'>
        <tr>
          <th>Nº</th>
          <th>Time</th>
          <th>Pontos</th>
          <th>GM</th>
          <th>GC</th>
        </tr>

        {data.map(team => {

          if((team.posicao >= 1) && (team.posicao < 5)){
            type = 'G4'
          }
          else if((team.posicao <= 20) && (team.posicao > 16)){
            type = 'F4'
          }
          else{
            type = null
          }

          return <Table pos={team.posicao} type={type} name={team.time?.nome_popular} initial={team.time?.sigla}
          points={team.pontos} gf={team.gols_pro} gs={team.gols_contra} />
        })}
      </table>

      <button className='tableButton' onClick={requestTable}>Mostrar Tabela</button>

      <div className="linksBox">
        <a class="link" href="https://github.com/Luscas-nl/Periodic-Table" target="_blank"><i class="fa fa-github fa-lg fa-inverse"></i></a>
        <a class="link" href="https://instagram.com/luscas.nl" target="_blank"><i class="fa fa-instagram fa-lg fa-inverse"></i></a>
      </div>
    </div>
  )
}

export default App
