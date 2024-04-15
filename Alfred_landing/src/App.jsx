import { useState } from 'react'


import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Whyalfred from './Components/whyalfred/Whyalfred'
import Videosection from './Components/videosection/videosection'
import Pricing from './Components/pricing/pricing'
import Footer from './Components/footer/footer'

function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <Whyalfred></Whyalfred>
      <Videosection></Videosection>
      <Pricing></Pricing>
      <Footer/>
    </>
  )
}

export default App
