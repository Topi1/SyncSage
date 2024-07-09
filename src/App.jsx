import { useState } from 'react'

import './App.css'

import Navbar from '../components/Navbar'
import MobileFooter from '../components/MobileFooter'

import Dashboard from '../components/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>

      <div className="mainCont">
        
        <Dashboard></Dashboard>
        
      </div>

      <MobileFooter></MobileFooter>
    </>
  )
}

export default App
