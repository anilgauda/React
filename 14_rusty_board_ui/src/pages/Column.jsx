import React, { useState } from 'react'
import { useGetCardsQuery } from '../store/cardApiSlice';
import Card from '../components/Card'

function Column({title, id}) {
  const [active,setActive] =useState(true);
  const {data,isLoading} = useGetCardsQuery();
  let filteredCards= [];
  if(!isLoading) {
    filteredCards= data.filter(card => card.column===id)
  }

  const handleOnDragEnter = (event) =>{
    event.preventDefault();
    setActive(true);
  }

  const handleOnDragLeave = (event) =>{
    event.preventDefault();
    setActive(false);
  }

  const handleOnDropEnd = (event) =>{
    event.preventDefault();
    setActive(false);
  }

  return isLoading?<h2>Loading...</h2> : (
    <div id = {id} className='w-1/5 h-full text-slate-50'>
      <div className='w-full flex justify-between'>
        <h3>{title}</h3>
        <p>{filteredCards.length}</p>
      </div>
      <div className={`w-full h-full ${active?'bg-slate-800':''} flex flex-col content-center`} onDragEnter={handleOnDragEnter} onDragLeave={handleOnDragLeave} onDrop={handleOnDropEnd}>
        {
            filteredCards.map(card => <Card {...card}/>)
            
            }
      </div>
    </div>
  )
}

export default Column