import React from 'react'

const Inputbox= React.forwardRef(function Inputbox({label, type, className,...props},ref) {
    return (
      <>  
      <label>{label}</label> : <input type={type} className={` ${className}`} {...props} ref={ref}/>
      </>
    )
  })

export default Inputbox