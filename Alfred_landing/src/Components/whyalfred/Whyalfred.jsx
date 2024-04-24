import React from 'react'
import Why from '../../assets/why.svg'
import Anytime_anywhere from '../../assets/Anytime_anywhere.svg'
import Feedback from '../../assets/feedback.svg'
import Pronuntiation from '../../assets/Pronuntiation.svg'

/*------------------------Importaciónd e estilos---------------------------*/

import '../whyalfred/whyalfred.css'

function Whyalfred() {
  return (
   <section id='whyalfred'>
        <div className='whyalfred-main-container'>
            <section className='whyalfred-main-text'>
                <div>
                    <h2>Why Alfred?</h2>
                    <p>
                    With Alfred, you can boost your English speaking skills through practice sessions. Alfred's got your back with personalized feedback tailored to your responses. You can check out your grammar, pronunciation, and the helpful suggestions Alfred gives you. It's like having your own personal English coach, helping you improve step by step!
                    </p>
                </div>
            </section>
            <section className='whyalfred-box-container'>
                <div className='whyalfred-card'>
                    <div>
                        <img src={Anytime_anywhere} alt="" className='whyalfred-img-1'/>
                    </div>
                    <h4>Practice any time, any where</h4>
                </div>

                <div className='whyalfred-card'>
                    <div>
                        <img src={Feedback} alt="" className='whyalfred-img-2'/>
                    </div>
                    <h4>Get instant feedback</h4>
                </div>

                <div className='whyalfred-card'>
                    <div>
                        <img src={Pronuntiation} alt="" />
                    </div>
                    <h4>Correct grammar and Expand vocabulary</h4>
                </div>
            </section>
        </div>
   </section>
  )
}

export default Whyalfred
