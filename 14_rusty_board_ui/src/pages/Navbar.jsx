import React, { useState } from 'react'
import { FcServices } from "react-icons/fc";
import CreateBoard from './CreateBoard';

function Navbar() {
  const [displayModal,setDisplayModal] =useState(false);

  const handleCreateBoard =(event) =>{
    event.preventDefault();
    setDisplayModal(true)
  }
  return (
    <div className='w-screen h-12 bg-slate-800 shadow-xl flex justify-between pt-2 px-4 content-center'>
    <div className='text-2xl flex flex-wrap flex-row gap-2'><FcServices /> <h3 className='text-slate-50 text-md'> _Rusty_board_ </h3></div>
    {displayModal? <CreateBoard setDisplayModal={setDisplayModal}/>:<div> 
      <button onClick={(e) => handleCreateBoard(e)} className='border border-green-500 w-fit p-1 px-2 text-slate-50 rounded-lg hover:bg-green-500 hover:text-slate-800'>Create Board</button>
      </div>}

    <div className='rounded-full w-9 h-9 border border-green-500 bg-slate-50'> </div>
  </div>
  )
}

export default Navbar