import { motion } from 'framer-motion'
import React from 'react'

function Sidebar({showSideBar}) {
  return (
    <motion.div className={`${showSideBar?'w-[15%]':'hidden'} h-screen bg-slate-800 p-3`}>
    <div className='text-slate-50 h-[30%] pt-1'>User's Workspace</div>
    <div className='h-1 border bg-slate-50 rounded'></div>
    <div className='text-slate-50 mt-3'>List of Boards Created by User</div>
  </motion.div>
  )
}

export default Sidebar