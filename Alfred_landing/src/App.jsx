import { useState } from 'react'


import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Whyalfred from './Components/whyalfred/Whyalfred'
import Videosection from './Components/video/videosection'

function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <Whyalfred></Whyalfred>
      <Videosection></Videosection>
    </>
  )
}

export default App
