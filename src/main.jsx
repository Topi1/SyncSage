import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import "./i18n"
import { TaskProvider } from '../components/TaskContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <TaskProvider>

  <BrowserRouter>
    <App />
  </BrowserRouter>

  </TaskProvider>
  
)
