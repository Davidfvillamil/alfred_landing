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
                <div>Home</div>
                <div>Why Alfred</div>
                <div>contact</div>
              </div>
              <div className='contact-footer'>
                <div>Contacto</div>
                <div className='contact-footer-phone'>
                  <FaPhone className='footer-phone-logo'/>
                  Numero de telefono
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
