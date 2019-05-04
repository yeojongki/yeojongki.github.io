import React from 'react'
import './App.css'
import { renderRoutes } from 'react-router-config'
import routes from './routes'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Router>{renderRoutes(routes)}</Router>
    </div>
  )
}

export default App
