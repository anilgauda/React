import { useState } from 'react'
import './App.css'
import Board from './pages/Board'

import { useGetCardsQuery } from './store/cardApiSlice'

function App() {
  const [count, setCount] = useState(0)
  const columns = ["Backlog", "Todo", "In-progress", "Completed"]
  return (
    <>
      <Board columns={columns}/>
    </>
  )
}

export default App
