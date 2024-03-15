import React, { useState } from 'react'
import Button from '../components/Button';

function Modal() {
  const [active, setActive] =useState(true);

  const handleOnClose = (event) =>{
    event.preventDefault();
    setActive(false)
  }
  return (
    <div className={`${active? "": "hidden"} fixed inset-0 bg-black bg-opacity-0 backdrop-blur-sm flex justify-center items-center`}>
      <div className='w-[350px] h-[350px] bg-white'>
      <Button text={"close"} onClick={handleOnClose}/>
      </div>
    </div>
  )
}

export default Modal