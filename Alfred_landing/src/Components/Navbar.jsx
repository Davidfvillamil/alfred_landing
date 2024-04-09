import React from 'react'
import Logo from '../assets/3.svg'

import './Navbar.css'

/*--------------------Importaciones de logos------------------------------------- */
import { GrLanguage } from "react-icons/gr";


function Navbar() {
    const navbarItems = [
        {link:"Overview", path:"home"},
        {link:"feature", path:"feature"},
        {link:"About", path:"about"},
        {link:"Pricing", path:"pricing"}
    ]

  return (
    <>
        <nav>
            <div className='navbar-main-container'>
                <section className='navbar-left'>
                    <div>
                        <a href="" className='navbar-logo'>
                            <img src={Logo} alt="" className='navbar-logo-img'/>
                            <span>Alfred</span>
                        </a>
                        <ul>
                            {
                                navbarItems.map(({link,path}) => <a key={link} href={path} className='navbar-left--options'>{path}</a>)
                            }
                        </ul>
                    </div>
                </section>
                <section className='navbar-right'>
                     <a href=""><GrLanguage/><span>Language</span></a>
                     <button>Sign up</button>   
                </section>
            </div>
        </nav>
    </>
  )
}

export default Navbar
