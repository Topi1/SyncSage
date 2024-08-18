import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import "./i18n"
import { TaskProvider } from '../components/TaskContext.jsx'

import { Provider } from 'react-redux';
import store from './store'; 

ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store}>

    <TaskProvider>

    <BrowserRouter basename="/SyncSage">
      <App />
    </BrowserRouter>

    </TaskProvider>

  </Provider>
  
)
