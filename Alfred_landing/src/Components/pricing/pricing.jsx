import React from 'react'

import './pricing.css'
import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

function Pricing() {
  return (
    <>
        <section className='pricing-main-section'>
            <div className='pricing-main-container'>
                <div className='info-container'>
                    <h1>Pricing</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, provident ut hic velit assumenda ea, architecto recusandae voluptatibus autem facilis saepe optio aliquid omnis, maxime similique perferendis. Aspernatur, nam ducimus!</p>
                    <div>
                        <button>Student</button>
                        <button>Institution</button>
                    </div>
                </div>
                <div className='Princing'>
                    <h2>Plataforma</h2>
                    <p className='perks-parrafo'>Lorem ipsum dolor sit amet consectetur, adipisicing </p>
                    <p className='perks-price'>$50<span>/month</span></p>
                    <div className='perks-container'>
                        <div>
                            <FaCheck className='checkmark'></FaCheck><span>lfnaslnfdlanflksan</span>
                        </div>
                        <div>
                            <FaCheck className='checkmark'></FaCheck><span>lfnaslnfdlanflksan</span>
                        </div>
                        <div>
                            <FaXmark className='xmark'/><span>lfnaslnfdlanflksan</span>
                        </div>
                        <div>
                            <FaXmark className='xmark'/><span>lfnaslnfdlanflksan</span>
                        </div>
                        <div>
                            <FaXmark className='xmark'/><span>lfnaslnfdlanflksan</span>
                        </div>
                        
                    </div>
                    <div className='pricing-button'>
                        <button>Get this</button>
                    </div>
                </div>

                <div className='Princing'>
                    <h2>Plataforma</h2>
                    <p className='perks-parrafo'>Lorem ipsum dolor sit amet consectetur, adipisicing elit</p>
                    <p className='perks-price'>$50<span>/month</span></p>
                    <div className='perks-container'>
                        <div>
                            <FaCheck className='checkmark'></FaCheck><span>lfnaslnfdlanflksan</span>
                        </div>
                        <div>
                            <FaCheck className='checkmark'></FaCheck><span>lfnaslnfdlanflksan</span>
                        </div>
                        <div>
                            <FaXmark className='xmark'/><span>lfnaslnfdlanflksan</span>
                        </div>
                        <div>
                            <FaXmark className='xmark'/><span>lfnaslnfdlanflksan</span>
                        </div>
                        <div>
                            <FaXmark className='xmark'/><span>lfnaslnfdlanflksan</span>
                        </div>
                        
                    </div>
                    <div className='pricing-button'>
                        <button>Get this</button>
                    </div>
                </div>
                <div className='Princing'>
                    <h2>Plataforma</h2>
                    <p className='perks-parrafo'>Lorem ipsum dolor sit amet consectetur, adipisicing elit</p>
                    <p className='perks-price'>$50<span>/month</span></p>
                    <div className='perks-container'>
                        <div>
                            <FaCheck className='checkmark'></FaCheck><span>lfnaslnfdlanflksan</span>
                        </div>
                        <div>
                            <FaCheck className='checkmark'></FaCheck><span>lfnaslnfdlanflksan</span>
                        </div>
                        <div>
                            <FaXmark className='xmark'/><span>lfnaslnfdlanflksan</span>
                        </div>
                        <div>
                            <FaXmark className='xmark'/><span>lfnaslnfdlanflksan</span>
                        </div>
                        <div>
                            <FaXmark className='xmark'/><span>lfnaslnfdlanflksan</span>
                        </div>
                        
                    </div>
                    <div className='pricing-button'>
                        <button>Get this</button>
                    </div>
                </div>
                
            </div>
        </section>
    </>
  )
}

export default Pricing
