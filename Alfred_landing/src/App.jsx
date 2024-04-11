import { useState } from 'react'


import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Whyalfred from './Components/whyalfred/Whyalfred'

function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <Whyalfred></Whyalfred>
    </>
  )
}

export default App
