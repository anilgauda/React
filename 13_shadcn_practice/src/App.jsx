import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Board from './pages/Board'
import Kanban from './components/kanban'
import Column from './pages/Column'
import Card from './components/Card'

function App() {

  return (
    <>
    <Kanban>
      <Board>
      </Board>
    </Kanban>
    </>
  )
}

export default App
