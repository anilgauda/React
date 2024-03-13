import React from 'react'
import { useState } from 'react';
import { BsFire } from "react-icons/bs";
import { RiDeleteBin2Line } from "react-icons/ri";

function Delete({setCards}) {
    const [active,setActive] =useState(false);

    const handleDragOver = (e) =>{
      e.preventDefault();
      setActive(true)
    }
    const handleDragLeave = () =>{
      setActive(false)
    }
    const handleDragEnd = (e) =>{
      const cardId = Number(e.dataTransfer.getData("cardId"))
      setCards((prev) => prev.filter((prevCards) => (
         prevCards.id!==cardId)));
      setActive(false)
    }
  return (
    <div onDragOver={handleDragOver} onDrop={handleDragEnd} onDragLeave={handleDragLeave} className={`mt-10 grid h-56 w-56 shrink-0 place-content-center rounded border text-3xl ${active ? "border-red-800 bg-red-800/20 text-red-500": "border-neutral-500 bg-neutral-500/20 text-neutral-500"}`}>
        {active ? <BsFire /> : <RiDeleteBin2Line />
}
    </div>
  )
}

export default Delete