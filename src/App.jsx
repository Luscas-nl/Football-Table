import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Table from './components/Table/Table'

function App() {
  return (
    <div className="App">
      <table>
        <tr>
          <th>Nº</th>
          <th>Time</th>
          <th>Pontos</th>
          <th>GM</th>
          <th>GC</th>
        </tr>
        <Table />
        <Table />
      </table>
    </div>
  )
}

export default App
