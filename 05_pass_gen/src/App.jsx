import { useState,useCallback, useEffect, useRef } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(true);
  const [password, setPassword] = useState("");

  //useRef Hook
  const passwordRef = useRef(null);

  //useCallback Hook
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str+="0123456789";
    }
    if(charAllowed) {
      str+= "!@#$%^&*-_=+[]{}~`"
    }
    while(pass.length!= length){
      pass+=str.charAt(Math.round(Math.random()*100)%str.length)
    }
    setPassword(pass)

  } ,[length,numberAllowed,charAllowed,setPassword])

  //useEffect Hook 
  useEffect(()=>{passwordGenerator()},[length,numberAllowed,charAllowed,setPassword])

  const copyPasswordToClipBoard = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
<>
<div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-10 my-3 text-orange-500 bg-gray-700'>
  <h1 className='text-white text-center my-3'>Password Generator</h1>
<div className='flex shadow rounded-lg overflow-hidden mb-4 bottom-5'>
  <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly ref={passwordRef}/>
  <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPasswordToClipBoard}>Copy</button>
</div>
<div className='flex text-sm gap-x-2'>
  <div className='flex items-center gap-x-1'>
    <input type="range" name="" id="" min={8} max={100} value={length} className='cursor-pointer' onChange={(e) => setLength(e.target.value)}/>
     <label>Length: {length}</label>
  </div>
  <div className='flex items-center gap-x-1'>
    <input type="checkbox" defaultChecked={numberAllowed} onChange={()=>{ setNumberAllowed((prev)=>!prev);}}/>
    <label> Numbers </label>
  </div>
  <div className='flex items-center gap-x-1'>
    <input type="checkbox" defaultChecked={charAllowed} onChange={()=>{ setCharAllowed((prev)=>!prev);}}/>
    <label> Special Characters </label>
  </div>
</div>

</div>

</>
  )
}

export default App
