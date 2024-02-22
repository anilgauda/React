import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  let [counter, setCounter] = useState(15);
  const addValue = () => {
    counter = counter+1;
    setCounter(counter);
  }
  const removeValue= () =>{
    counter = counter - 1;
    setCounter(counter);
  }
  return (
    <>
    <h1>Chai aur React</h1>
    <h2>Counter value : {counter}</h2>
    <button onClick={addValue}>Add Value</button>
    <br/>
    <button onClick={removeValue}>Remove Value</button>
    <p>Current Counter value in in paragraph: {counter}</p>
    </>
  )
}

export default App
