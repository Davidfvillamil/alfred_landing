import React from 'react'

import './footer.css'

import { CgMail } from "react-icons/cg";
import { FaPhone } from "react-icons/fa";

function Footer() {
  return (
    <>
        <section className='footer-main-section'>
            <div className='footer-main-container'>
              <div className='footer-logo'>
                Alfred.
              </div>
              <div className='menu-footer'>
                <div>Menu</div>
                <div><a href="#home">Home</a></div>
                <div><a href="#whyalfred">Why Alfred?</a></div>
                <div><a href="#contact">Contact</a></div>
              </div>
              <div className='contact-footer'>
                <div>Contacto</div>
                <div className='contact-footer-phone'>
                  <FaPhone className='footer-phone-logo'/>
                  (+57) 320 802 8073 
                </div>
                <div className='contact-footer-mail'> 
                  <CgMail className='footer-mail-logo'/>  
                  Alfred@gmail.com
                </div>
              </div>
            </div>
        </section>
    </>
  )
}

export default Footer
