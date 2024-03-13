import Button from '@/components/Button';
import Card from '../components/Card';
import React, { useState } from 'react'
import AddTask from './AddTask';
import {motion} from 'framer-motion'

function Column({ title, headingColor, column, cards, setCards }) {
  const [active, setActive] = useState(false)

  const filteredColums = cards.filter(card => (card.column === column));
  
  const handleDragStart = (event,card) =>{
    event.dataTransfer.setData("cardId",card.id);
  }

  const handleDragOver = (event) =>{
    event.preventDefault();
    setActive(true)
  }
  const handleDragleave =() =>{
    setActive(false)
  }

  const handleOnDrop =(event) =>{
    const cardId = Number(event.dataTransfer.getData("cardId"));
    setActive(false)
    setCards(prev =>prev.map(card => card.id===cardId? {...card,column:column}: card))
  }

  return (
    <div className='w-1/5 shrink-0'>
      <div className='mb-3 flex items-center justify-between'>
        <h3 className={`font-medium ${headingColor}`}>
          {title}
        </h3>
        <span className='rounded text-sm text-neutral-400'> {filteredColums.length}</span>
      </div>
      <motion.div layout className={`p-2 h-screen w-full transition-colors ${active ? "bg-neutral-700/50" : "bg-neutral-700/0"}`} onDragOver={handleDragOver} onDragLeave={handleDragleave} onDrop={handleOnDrop}>
        {filteredColums.map(card => (
          <Card key={card.id} handleDragStart={handleDragStart} {...card}/>
        ))}
        <div className='m-1'>
        <AddTask column={column} setCards={setCards}/>
        </div>
      </motion.div>

    </div>
  )
}

export default Column