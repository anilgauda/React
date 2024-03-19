import React, { useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useDeleteCardMutation } from '../store/cardApiSlice';
import {motion} from 'framer-motion'
import Modal from './Modal';

function Card({id,title, description, created_date, due_date }) {
  const [active, setActive] = useState(false)
  const [deleteCard] =useDeleteCardMutation()
  const [displayModal, setDisplayModal] = useState(false);

  const handleOnDragEnter =(event) =>{
    event.preventDefault();
    setActive(true)
  }
  const handleOnDragLeave =(event) =>{
    event.preventDefault();
    setActive(false)
  }
  const handleOnDragStart = (event,id) =>{
    event.dataTransfer.setData("cardId",id)
  }
  const handleOnMouseOver = (event) =>{
    event.preventDefault();
    setActive(true);
  }
  const handleOnMouseOut = (event) =>{
    event.preventDefault();
    setActive(false);
  }

  const handleDeleteCard =(event,id) =>{
    event.preventDefault();
    deleteCard({cardId:String(id)})
  }
  
  const handleOnClick =(event) =>{
    event.preventDefault();
    setDisplayModal(true);
    setActive(false)
  }

  return displayModal? <Modal setDisplayModal={setDisplayModal} card={{id,title, description, created_date, due_date}} />:(
    <motion.div layout layoutId={id} key ={id} className={`cursor-grab rounded w-full h-fit p-2 flex flex-col justify-center text-center border border-slate-500 m-1 hover:bg-green-400 hover:text-slate-800 active:cursor-grabbing`} draggable="true" onDragEnter={handleOnDragEnter} onDragLeave={handleOnDragLeave} onDragStart={(event) => {handleOnDragStart(event,id)}} onMouseOver={handleOnMouseOver} onMouseOut={handleOnMouseOut} onClick={(e)=>handleOnClick(e)}>
        <div className='flex flex-row justify-between'>
            <h2>{title}</h2>
            {active ? <div className='flex flex-row gap-1 hover:cursor-default'>
              {/* <button className='text-lg text-gray-600'><FaEdit /></button> */}
              <button className='text-2xl text-red-700' onClick={(event) =>handleDeleteCard(event,id)}><MdOutlineDeleteForever /></button>
            </div>:''}
        </div>
        <div className='mt-2'>
            <p className='text-sm text-start '>{description}</p>
        </div>
        <div className=' flex flex-wrap justify-between text-sm mt-2'>
            <p>{created_date}</p>
            <p>{due_date}</p>
        </div>
    </motion.div>
  )
}

export default Card