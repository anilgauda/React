import React from 'react'
import {motion} from 'framer-motion'
function Button({text, className ,...props}) {
  return (
    <motion.button layout className={`w-max text-md text-neutral-200 transition-colors hover:text-violet-400 ${className}`} {...props}>{text}</motion.button>
  )
}

export default Button