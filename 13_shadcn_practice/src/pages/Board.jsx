import React, { useEffect, useState } from 'react'
import Column from './Column'
import axios from 'axios';
import Delete from '@/components/Delete';

function Board({children}) {
    const [cards, setCards] = useState([])
    useEffect(()=>{
      ;(async()=>{
        const response = await axios.get("http://localhost:3000/data");
        setCards(response.data)
      })();
    },[])
  return (
    <div className='flex h-full w-full gap-3 overflow-scroll p-12 justify-evenly'>
                <Column title="Backlog" column="backlog" headingColor="text-gray-200" cards={cards} setCards={setCards}/>
                <Column title="TODO" column="todo" headingColor="text-yellow-200" cards={cards} setCards={setCards}/>
                <Column title="In Progress" column="doing" headingColor="text-orange-200" cards={cards} setCards={setCards}/>
                <Column title="Complete" column="done" headingColor="text-emerald-200" cards={cards} setCards={setCards}/>
                <Delete setCards={setCards}/>
    </div>
  )
}

export default Board