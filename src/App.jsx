import { useState } from 'react'

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';



import './App.css'

import Navbar from '../components/Navbar'
import MobileFooter from '../components/MobileFooter'

import Home from '../components/Home';
import Dashboard from '../components/Dashboard'
import ResponsiveDash from '../components/ResponsiveDash'
import CalendarPage from '../components/CalendarPage';
import Taskboard from '../components/Taskboard'
import Sports from '../components/Sports';
import Food from '../components/Food';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Navbar></Navbar>

      <div className="mainCont">
        
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Navigate to="/" />} /> {/* Redirect /home to / */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/calendar" element={<CalendarPage />} /> 
            <Route path="/taskboard" element={<Taskboard />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/food" element={<Food />} />
          </Routes>
        

      </div>

      <MobileFooter></MobileFooter>
      
    </>
  )
}

export default App
