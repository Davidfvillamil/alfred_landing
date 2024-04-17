import React from 'react'

import Fondo_home from '../../assets/home2.svg'

import '../Home/home.css'

function Home() {
  return (
    <>
        <section id='home'>
            <div className='home-main-container'>
                <section className='home-section-left'>
                    <h1>Perfect Your IELTS Speaking with AI</h1>
                    <p> Master IELTS Speaking with AI. Alfred, your dedicated AI companion, assists you in perfecting your IELTS speaking skills. Receive instant feedback and personalized suggestions on grammar, pronunciation, and vocabulary, guiding you towards achieving your desired band score with confidence and precision.</p>
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
