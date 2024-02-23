import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-4 shadow-xl bg-white px-3 py-2 rounded-xl'>
        <button className='outline-none px-4 bg-red-400 rounded-full shadow-lg text text-red-400' onClick={() => setColor("red")}>Red</button>
        <button className='outline-none px-4 bg-green-400 rounded-full shadow-lg text-green-400' onClick={() => setColor("green")}>Green</button>
        <button className='outline-none px-4 bg-blue-400 rounded-full shadow-lg text-blue-400'  onClick={() => setColor("blue")}>Blue</button>
        <button className='outline-none px-4 bg-white rounded-full shadow-lg text-white' onClick={() => setColor("white")}>White</button>
        <button className='outline-none px-4 bg-black rounded-full shadow-lg text-black' onClick={() => setColor("black")} >Black</button>
      </div>
    </div>
    </div>
  )
}

export default App
