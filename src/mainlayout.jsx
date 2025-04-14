import React from 'react'
import Navbar from './pages/navbar'
import { Outlet } from 'react-router-dom'

const Mainlayout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default Mainlayout
