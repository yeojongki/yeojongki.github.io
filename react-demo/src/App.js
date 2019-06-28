import React, { Suspense } from 'react'
import './App.css'
import { renderRoutes } from 'react-router-config'
import routes from './routes'
import { HashRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Router>{renderRoutes(routes)}</Router>
      </Suspense>
    </div>
  )
}

export default App
