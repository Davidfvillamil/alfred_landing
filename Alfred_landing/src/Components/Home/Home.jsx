import React from 'react'

import Fondo_home from '../../assets/home2.svg'

import '../Home/home.css'

function Home() {

    const scrollToForm = () => {
        const formSection = document.getElementById('contact')
        formSection.scrollIntoView({behavior: 'smooth'})
    }

  return (
    <>
        <section id='home'>
            <div className='home-main-container'>
                <section className='home-section-left'>
                    <h1>Level Up Your IELTS Speaking with AI</h1>
                    <p>Master IELTS Speaking with AI. Soon, Alfred will assist you in perfecting your IELTS speaking skills. Get ready to receive instant feedback and personalized suggestions on grammar, pronunciation, and vocabulary, guiding you towards achieving your desired band score with confidence and precision</p>
                    {/* Este es un comentario en React 
                    <p> Master IELTS Speaking with AI. Alfred assists you in perfecting your IELTS speaking skills. Receive instant feedback and personalized suggestions on grammar, pronunciation, and vocabulary, guiding you towards achieving your desired band score with confidence and precision</p>
                    */}
                    <div>
                        <button onClick={scrollToForm}>Join the wait list</button>
                        <button className='home-left-button-2' onClick={scrollToForm}>Sign Up for Updates</button>
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
