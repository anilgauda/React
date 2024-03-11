import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import Task from './pages/Task'

function App() {

  return (
    <>
    <div>
      <Button>Shadcn Button</Button>
    </div>
    <div>
    <Task/>
    </div>
    </>
  )
}

export default App
