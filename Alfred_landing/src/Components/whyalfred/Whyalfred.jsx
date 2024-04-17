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
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique quibusdam, quam accusamus non qui quia a veniamdaw
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
                    <h4>Expand your vocabulary and Correct your grammar</h4>
                </div>
            </section>
        </div>
   </section>
  )
}

export default Whyalfred
