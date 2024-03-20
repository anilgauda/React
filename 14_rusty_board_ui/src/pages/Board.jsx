import React, { useState } from 'react'
import Column from './Column'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { IoClose } from "react-icons/io5";

function Board({ columns }) {
  const [showSideBar, setShowSideBar] = useState(false);

  const handleSideBarDisplay= (event) =>{
    setShowSideBar(!showSideBar)
  }
  return (
  <div className='w-screen flex flex-wrap flex-row'>
    <Navbar />
    <div className="flex flex-warp">
      <Sidebar showSideBar={showSideBar}/>
      <div className={`${showSideBar?'w-[90%]':'w-screen'} h-screen overflow-hidden bg-slate-900 flex flex-wrap justify-evenly`}>
      <button className='m-0 p-0 h-fit text-slate-50 text-3xl' onClick={(event)=>{handleSideBarDisplay(event)}}>{showSideBar?<IoClose />:<MdKeyboardDoubleArrowRight />}</button>
        {
          columns.map(column => (
            <Column title={column} key={column.toLowerCase()} id={column.toLowerCase()} />
          ))
        }
      </div>
    </div>
  </div>
  )
}

export default Board