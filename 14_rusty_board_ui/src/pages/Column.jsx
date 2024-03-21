import React, { useState } from 'react'
import { useGetCardsQuery, useUpdateCardMutation } from '../store/cardApiSlice';
import Card from './Card'
import Button from '../components/Button';
import AddEditCard from './AddEditCard';
import {motion} from 'framer-motion'
import { FaSpinner } from "react-icons/fa6";

function Column({title, id}) {
  const [active,setActive] =useState(false);
  const {data,isLoading} = useGetCardsQuery();
  const [displayModal, setDisplayModal] = useState(false);
  const [updateCard] =useUpdateCardMutation();
  let filteredCards= [];

  if(!isLoading) {
    filteredCards= data.filter(card => card.column_id===id)
  }

  const handleOnDragEnter = (event) =>{
    event.preventDefault();
    setActive(true);
  }

  const handleOnDragLeave = (event) =>{
    event.preventDefault();
    setActive(false);
  }

  const handleOnDragOver =(event) =>{
    // Required to make column daragable 
    event.preventDefault();
    setActive(true)
  }

  const handleOnDropEnd = (event) =>{
    const cardId= event.dataTransfer.getData("cardId");
    updateCard({cardId,column_id:id})
    setActive(false);
  }

  const handleOnClick =(event) => {
  event.preventDefault();
  setDisplayModal(true)
}
  return isLoading?<h2 className='text-slate-50'><FaSpinner /></h2> : (
    <motion.div layout key= {id} className='w-1/5 text-slate-50'>
      <div className='w-full flex justify-between px-3'>
        <h3 >{title}</h3>
        <p>{filteredCards.length}</p>
      </div>
      <motion.div layout className={`w-full h-full ${active?'bg-slate-800':''} flex flex-col mt-4 px-2`} onDragOver={handleOnDragOver} onDragEnter={handleOnDragEnter} onDragLeave={handleOnDragLeave} onDrop={(event) => handleOnDropEnd(event)}>
      <div className='items-center content-center' > 
        { filteredCards.map(card => <Card {...card} key={card.id}/>) }
        </div>
        <motion.div layout className='text-start ml-1'>
        {displayModal? <AddEditCard setDisplayModal={setDisplayModal} columnId={id}/> : <Button text={"Add"} onClick ={handleOnClick}/>}
        </motion.div>
      </motion.div>

    </motion.div>
  )
}

export default Column