import { useState } from 'react'
import './App.scss'
import Navbar from './pages/navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
    </>
  )
}

export default App
