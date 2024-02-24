import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "user",
    age: 21
  };
  let myArr =[1,2,3,4,5];
  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>

    <Card properties="Testing properties" someObj={myObj} someArray={myArr} />
    <Card />
    </>
  )
}

export default App
