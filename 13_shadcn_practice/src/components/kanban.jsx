import React from 'react'

function Kanban({children}) {
  return (
    <div className='h-screen w-full bg-neutral-900 text-neutral-50'>
        {children}
    </div>
  )
}

export default Kanban