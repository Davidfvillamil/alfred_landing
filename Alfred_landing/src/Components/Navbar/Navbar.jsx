import React, { useState } from 'react'
import Logo from '../../assets/3.svg'

import '../Navbar/Navbar.css'

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
        {link:"Home", path:"home"},
        {link:"why Alfred?", path:"whyalfred"},
        {link:"Pricing", path:"pricing"},
        {link:"Contact", path:"Contact"}
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
                                navbarItems.map(({link,path}) => <a key={link} href={path} className='navbar-left--options'>{link}</a>)
                            }
                        </ul>
                    </div>
                </section>
                <section className='navbar-right'>
                     <a href="">
                        <GrLanguage/>
                        <span className=''>Language</span>
                     </a>
                     <button>Sign up</button>   
                </section>

                <section className='navbar-toogle-container'>
                    
                    <button className='navbar-toogle-button' onClick={Toogle}>
                        {
                            isMenuOpen ? (<FaXmark className='navbar-toogle-button--x'/>) : (<FaBars className='navbar-toogle-button--menu'/>)
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
                         navbarItems.map(({link, path}) => (
                             <a 
                                 key={link} 
                                 href={"#" + path} 
                                 className='navbar-left--options' 
                                 onClick={() => setIsMenuOpen(false)} // Agrega el manejador de eventos onClick
                             >
                                 {link}
                             </a>
                         ))
                     }
                 </div>
             ) : (<></>)
        }

        
    </>
  )
}

export default Navbar
