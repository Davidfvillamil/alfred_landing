import React from 'react'

import Fondo_home from '../../assets/home2.svg'

import '../Home/Home.css'

function Home() {
  return (
    <>
        <section>
            <div className='home-main-container'>
                <section className='home-section-left'>
                    <h1>Practice Speaking for IELTS with AI</h1>
                    <p> Alfred guides you through the intricacies of this exam, asking questions and providing instant feedback and suggestions on your answers, helping you expand your vocabulary, correct your grammar, and refine your pronunciation to achieve a high band score.</p>
                    <div>
                        <button>Get Started</button>
                        <button className='home-left-button-2'>More info</button>
                    </div>
                </section>
                <section className='home-section-right'>
                    <img src={Fondo_home} alt=""/>
                </section>
            </div>
        </section>
    </>
  )
}

export default Home
