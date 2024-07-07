import { useState } from 'react'

import './App.css'

import Navbar from '../components/Navbar'
import MobileFooter from '../components/MobileFooter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>

      <div className="mainCont">
        
      </div>

      <MobileFooter></MobileFooter>
    </>
  )
}

export default App
