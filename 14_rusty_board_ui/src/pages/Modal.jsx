import React, { useState } from 'react'
import Button from '../components/Button';
import {useForm} from 'react-hook-form';
import { useCreateCardMutation } from '../store/cardApiSlice';
import { nanoid } from 'nanoid';
import { motion } from 'framer-motion';

function Modal({setDisplayModal,columnId}) {
  const [active, setActive] =useState(true);
  const {register, handleSubmit} =useForm();
  const[createCard]=useCreateCardMutation()

  const handleOnClose = (event) =>{
    event.preventDefault();
    setActive(false)
    setDisplayModal(false)
  }
  const getCurrentDate = () => {
    let today = new Date();
    let dd = today.getDate();
    let mm =  today.getMonth()+1;
    let yyyy = today.getFullYear();
    if(dd<10){
      dd='0' + dd;
    }
    if(mm<0) {
      mm = '0' + mm;
    }
    return `${dd}/${mm}/${yyyy}`
  }
  const onSubmit = (data) => {
    const newCard = {...data,column:columnId,created_date:getCurrentDate(),id:nanoid()}
    createCard({...newCard})
    setActive(false)
    setDisplayModal(false)
  }
  return (
    <motion.div layout className={`${active? "": "hidden"} fixed inset-0 bg-opacity-0 backdrop-blur-sm flex justify-center items-center bg-slate-900 `}>
      <div className='w-[400px] h-[475px] bg-slate-700 rounded-xl'>
        <div className='flex w-full h-full'>
          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-wrap flex-col w-full h-full p-5 text-slate-700 gap-1'>
            <span className='text-slate-50'>Title:</span> <input type="text" placeholder='Enter Title' className='p-1' {...register("title",{required:true})}/>
            <span className='text-slate-50'>Description:</span> <textarea placeholder='Enter Description' rows='9' className='p-1' {...register("description",{required:true})}></textarea>
            <span className='text-slate-50'>Due Date:</span> <input type='date' placeholder='dd/mm/yyyy' className='p-1' {...register("due_date",{required:true})}/>
            <div className='flex flex-wrap gap-5 mt-3'>
            <Button text={"Submit"} type ="submit" className={'text-slate-900 text-md bg-green-400 w-fit rounded-md p-1'}/>
            <Button text={"Cancel"} className={' text-slate-50 text-md hover:text-green-400'} onClick={handleOnClose}/>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  )
}

export default Modal