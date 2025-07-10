import { useState } from 'react'
import Home from './Components/Home'
import Header from './Components/Header'
import { Outlet } from 'react-router-dom'

function App() {


  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default App
