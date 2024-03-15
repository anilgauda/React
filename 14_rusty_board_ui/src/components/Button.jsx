import React from 'react'

function Button({text,...props}) {
  
  return (
    <button className='rounded w-fit px-3 py-1 text-slate-50 hover:bg-green-400 hover:text-slate-900 text-center' {...props}>{text}</button>
  )
}

export default Button