import React from 'react'

function Modal({children},{className}) {
  return (
    <div  className={`${className} h-screen fixed inset-0 bg-opacity-60 flex justify-center items-center bg-slate-900`}>
        {children}
    </div>
  )
}

export default Modal