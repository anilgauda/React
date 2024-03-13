import React, { useState } from 'react'
import {motion} from 'framer-motion'

function Card({title,id,description,created_date,is_active,due_date,reminder_date,column,handleDragStart}) {
  const [active, setActive] =useState(false);

  const handleOnDragOver =(event) =>{
    event.preventDefault();
    setActive(true)
  }

  const handleOnDragLeave =() =>{
    setActive(false)
  }

  const handleOnDrop =(event) =>{
    const cardId = Number(event.dataTransfer.getData("cardId"));
    
    console.log(cardId)
    setActive(false)
  } 
  return (<>
    <motion.div layout layoutId={id} draggable="true" className={`cursor-grab rounded border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing m-1 hover:border-violet-400 ${active?"border-violet-400":""}`} onDragStart= {event =>{
      handleDragStart(event,{id})
    }} onDragOver={handleOnDragOver} onDragLeave={handleOnDragLeave} onDrop={handleOnDrop}>
      <div className='p-2'>
      <h3 className=' text-lg text-neutral-100'>{title}</h3>
        <p className='text-sm text-neutral-400'>{description}</p>
      </div>

        <div className='flex flex-wrap justify-between pt-2'>
          <p className='text-sm text-neutral-400'>{created_date}</p>
          <p className='text-sm text-neutral-400'>{reminder_date}</p>
        </div>
    </motion.div>

    </>
  )
}

export default Card