import React from 'react'

function Textarea({text,...props}) {
  return (
    <textarea className ='justify-center w-full rounded border border-violet-400 bg-violet-400/20 p-3 text-sm text-neutral-50 placeholder-violet-300 focus:outline-0' {...props}>{text}</textarea>
  )
}

export default Textarea