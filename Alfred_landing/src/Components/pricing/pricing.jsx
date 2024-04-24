import React from 'react'

import './pricing.css'
import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

function Pricing() {
  return (
    <>
        <section className='pricing-main-section' id='pricing'>
            <div className='pricing-main-container'>
                <div className='info-container'>
                    <h1>Pricing</h1>
                    <p>Start your English fluency journey today with one of our three pricing options: Basic, Pro, or Premium. Each plan offers tailored features to enhance your speaking skills with Alfred's guidance. Choose your plan and let's get started!</p>
                    <div>
                        <button>Student</button>
                        <button>Institution</button>
                    </div>
                </div>
                <div className='Princing'>
                    <h2>Basic</h2>
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
                    <h2>Pro</h2>
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
                    <h2>Premium</h2>
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
