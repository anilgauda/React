import { useState } from 'react'
import './App.css'
import Board from './pages/Board'

import { useGetBoardByIdQuery } from './store/boardApiSlice'
import { FaSpinner } from 'react-icons/fa6';

function App() {
  // TO-DO: passing static value for Default board it will be fetched from user data
  const {data,isLoading} = useGetBoardByIdQuery(1); 

  const columns = ["Backlog", "Todo", "In-progress", "Completed"]
  return isLoading?<h2 className='text-slate-50'><FaSpinner /></h2>:( 
    <>
      <Board columns={columns} {...data}/>
    </>
  )
}

export default App
