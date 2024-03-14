import React from 'react'
import { useSelector } from 'react-redux'

function Card({id,title, description, created_date, reminder_date}) {
  return (
    <div className='rounded w-full h-fit p-2 flex flex-col justify-center text-center border border-slate-500 m-1' draggable="true">
        <div>
            <h2>{title}</h2>
        </div>
        <div className='mt-2'>
            <p className='text-sm text-slate-400 text-start'>{description}</p>
        </div>
        <div className=' flex flex-wrap justify-between text-sm text-slate-400 mt-2'>
            <p>{created_date}</p>
            <p>{reminder_date}</p>
        </div>
    </div>
  )
}

export default Card