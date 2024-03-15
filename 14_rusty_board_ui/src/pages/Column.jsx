import React, { useState } from 'react'
import { useGetCardsQuery } from '../store/cardApiSlice';
import Card from '../components/Card'
import Button from '../components/Button';
import Modal from './Modal';

function Column({title, id}) {
  const [active,setActive] =useState(false);
  const {data,isLoading} = useGetCardsQuery();
  const [displayModal, setDisplayModal] = useState(false);
  
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
const handleOnClick =(event) =>{
  event.preventDefault();
  setDisplayModal(true)
}
  return isLoading?<h2>Loading...</h2> : (
    <div key= {id} className='w-1/5 text-slate-50 mt-4'>
      <div className='w-full flex justify-between ml-1'>
        <h3>{title}</h3>
        <p>{filteredCards.length}</p>
      </div>
      <div className={`w-full h-full ${active?'bg-slate-800':''} flex flex-col mt-4 px-2`} onDragEnter={handleOnDragEnter} onDragLeave={handleOnDragLeave} onDrop={handleOnDropEnd}>
      <div className='items-center content-center'> 
        { filteredCards.map(card => <Card {...card}/>) }
        </div>
        <div className='text-start ml-1'>
        {displayModal? <Modal/> : <Button text={"Add"} onClick ={handleOnClick}/>} 
        </div>
      </div>

    </div>
  )
}

export default Column