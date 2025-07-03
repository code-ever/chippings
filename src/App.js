import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import LandingPage from './Component/LandingPage'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    </div>
  )
}

export default App
