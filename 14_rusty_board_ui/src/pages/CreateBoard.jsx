import React, { useState } from 'react'
import Modal from '../components/Modal'
import Button from '../components/Button';
import { useForm } from 'react-hook-form';
import {getCurrentDate} from '../utils/date';
import { nanoid } from 'nanoid';
import{useCreateBoardMutation} from '../store/boardApiSlice';
import{useCreateColumnMutation} from '../store/columnApiSlice';


function CreateBoard({ setDisplayModal }) {
    const [active, setActive] = useState(false)
    const { register, handleSubmit } = useForm();
    const [createBoard]=useCreateBoardMutation();
    const [createColumn] =useCreateColumnMutation();
    const handleOnClose = (event) => {
        event.preventDefault();
        setActive(false)
        setDisplayModal(false)
    }

    const onSubmit =(data) =>{
        const board_id = nanoid();

        const board_data = {
            "id": board_id,
            "owner_user_id": 1,
            "name": data.board_name,
            "is_public": data.is_public,
            "created_date": getCurrentDate()
          }
          createBoard(board_data);
        for (let i=1;i<=4;i++){

            const column_data = {
                "id": nanoid(),
                "board_id": board_id,
                "name": data[`col${i}`],
                "position": `c${i}`
              }
              createColumn(column_data);
        }

        setDisplayModal(false);
        setActive(false);
    }

    return (<Modal className={`${active ? "" : "hidden"}`}>
        <div className='w-[400px] h-[550px] bg-slate-700 rounded-xl'>
            <div className='flex  flex-row w-full h-full'>
                <form className='flex flex-wrap flex-col w-full h-full p-5 text-slate-700 gap-1' onSubmit={handleSubmit(onSubmit)}>
                <span className='text-slate-50'>Board name:</span> <input type="text" placeholder='Enter Name' className='p-1' {...register("board_name",{required:true})}/>
                <div className='mt-2'>
                <span className='text-slate-50'>Is it Public Board ?</span> <input type="checkbox" className='ml-4' {...register("is_public")}/>

                </div>
            <div className='m-6  h-1 bg-slate-50 rounded'></div>
            <h3 className='text-center text-slate-50'>Column Details</h3>
            <span className='text-slate-50'>Column name:</span> <input type="text" placeholder='Enter Name' className='p-1' {...register("col1",{required:true})}/>
            <span className='text-slate-50'>Column name:</span> <input type="text" placeholder='Enter Name' className='p-1' {...register("col2",{required:true})}/>
            <span className='text-slate-50'>Column name:</span> <input type="text" placeholder='Enter Name' className='p-1' {...register("col3",{required:true})}/>
            <span className='text-slate-50'>Column name:</span> <input type="text" placeholder='Enter Name' className='p-1' {...register("col4",{required:true})}/>
        <div className='flex flex-wrap gap-5 mt-3'>
        <Button text="Create" type ="submit" className={'text-slate-900 text-md bg-green-400 w-fit rounded-md p-1'}/>
        <Button text={"Cancel"} className={' text-slate-50 text-md hover:text-green-400'} onClick={handleOnClose}/>
        </div>
            </form>

            </div>

        </div>
    </Modal>

    )
}

export default CreateBoard