import Button from '@/components/Button'
import Card from '@/components/Card';
import Textarea from '@/components/Textarea';
import React, { useId, useState } from 'react'
import {motion} from 'framer-motion';
function AddTask({column,setCards}) {
  const [text,setText] = useState("");
  const [adding,setAdding] = useState(false);
  const handleSubmit = (event) =>{
    event.preventDefault();
    const cardContent = {
      column,
      id: (Math.random()*10) +1 ,
      description: text.trim(),
      title: "Test",
      created_date: Date.now(),
      reminder_date: Date.now(),
    }
    setText("");
    setAdding(false);
    setCards(previousValue =>[...previousValue,cardContent])
  }
  return (
    adding ?<motion.form layout onSubmit={handleSubmit}>
      <Textarea onChange={(e) =>{setText(e.target.value)}} autoFocus placeholder='Add new Task...'/>
      <div className='flex justify-end gap-3'>
      <Button text={"Close"} onClick = {() => setAdding(false)}></Button>
      <Button type="submit" text={"+ Add"} className= {'rounded bg-neutral-50 px-2 py-1 text-neutral-950 text-center'}></Button>
      </div>

    </motion.form> :
        <Button layout text={"Add +"} className={'flex justify-start'} onClick = {() => setAdding(true)}></Button>
  )
}

export default AddTask