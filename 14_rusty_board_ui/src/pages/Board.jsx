import React, { useState } from 'react'
import Column from './Column'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { useGetColumnsByBoardIdQuery } from '../store/columnApiSlice';
import { FaSpinner } from 'react-icons/fa6';

function Board({ name,id }) {
  const{data:columns,isLoading} = useGetColumnsByBoardIdQuery(id);
  const [showSideBar, setShowSideBar] = useState(false);

  const handleSideBarDisplay= (event) =>{
    event.preventDefault();
    setShowSideBar(!showSideBar)
  }
  return isLoading ? <h2 className='text-slate-50'><FaSpinner /></h2>: (
  <div className='w-screen flex flex-wrap flex-row'>
    <Navbar />
    <div className="flex flex-warp">
    <Sidebar showSideBar={showSideBar}/>
      <div className={`${showSideBar?'w-[85%]':'w-screen'} h-screen overflow-hidden bg-slate-900 flex flex-wrap justify-evenly`}>
      <button className='m-0 p-0 h-fit text-slate-50 text-3xl' onClick={(e)=>handleSideBarDisplay(e)} >{showSideBar?<IoClose />:<MdKeyboardDoubleArrowRight />}</button>
      <div className='w-[85%] text-slate-50 h-fit bg-slate-900 content-end'><h2 className='text-slate-50 text-2xl text-center'>{name}</h2></div>
        {
          columns.map(column => (
            <Column title={column.name} key={column.name.toLowerCase()} id={column.id} />
          ))
        }
      </div>
    </div>
  </div>
  )
}

export default Board