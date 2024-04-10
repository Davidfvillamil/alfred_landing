import React, { useState } from 'react'
import Logo from '../assets/3.svg'

import './Navbar.css'

/*--------------------Importaciones de logos------------------------------------- */
import { GrLanguage } from "react-icons/gr";
import { FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";


function Navbar() {

    const[isMenuOpen, setIsMenuOpen] = useState(false)

    const Toogle = () => {
        setIsMenuOpen(!isMenuOpen)
    }   

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
                     <a href="">
                        <GrLanguage/>
                        <span>Language</span>
                     </a>
                     <button>Sign up</button>   
                </section>

                <section className='navbar-toogle-container'>
                    
                    <button className='navbar-toogle-button' onClick={Toogle}>
                        {
                            isMenuOpen ? (<FaXmark className='navbar-toogle-button--x'/>) : (<FaBars navbar-toogle-button--menu/>)
                        }
                    </button>
                    
                </section>
            </div>
        </nav>

        {
             isMenuOpen ? 
             (
                <div className='toogle-menu'>
                    {
                        navbarItems.map(({link,path}) => <a key={link} href={path} className='navbar-left--options'>{path}</a>)
                    }
                </div>
             ) : (<></>)
        }

        
    </>
  )
}

export default Navbar
