import React, { useState } from 'react'

function Card({id,title, description, created_date, due_date}) {
  const [active, setActive] = useState(false)
  const handleOnDragEnter =(event) =>{
    event.preventDefault();
    setActive(true)
  }
  const handleOnDragLeave =(event) =>{
    event.preventDefault();
    setActive(false)
  }
  return (
    <div key ={id} className={`rounded w-full h-fit p-2 flex flex-col justify-center text-center border border-slate-500 m-1 hover:bg-green-400 hover:text-slate-800 cursor-grab ${active? 'border-green-400':''}`} draggable="true" onDragEnter={handleOnDragEnter} onDragLeave={handleOnDragLeave} is>
        <div>
            <h2>{title}</h2>
        </div>
        <div className='mt-2'>
            <p className='text-sm text-start '>{description}</p>
        </div>
        <div className=' flex flex-wrap justify-between text-sm mt-2'>
            <p>{created_date}</p>
            <p>{due_date}</p>
        </div>
    </div>
  )
}

export default Card