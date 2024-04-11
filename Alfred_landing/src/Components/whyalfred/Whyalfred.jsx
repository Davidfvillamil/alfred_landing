import React from 'react'
import Why from '../../assets/why.svg'

/*------------------------Importaciónd e estilos---------------------------*/

import '../whyalfred/whyalfred.css'

function Whyalfred() {
  return (
   <section>
        <div className='whyalfred-main-container'>
            <section className='whyalfred-main-text'>
                <div>
                    <h2>Why ALfred?</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique quibusdam, quam accusamus non qui quia a veniam
                    </p>
                </div>
            </section>
            <section className='whyalfred-box-container'>
                <div className='whyalfred-card'>
                    <div>
                        <img src={Why} alt="" />
                    </div>
                    <h4>Practice any time, any where</h4>
                </div>

                <div className='whyalfred-card'>
                    <div>
                        <img src={Why} alt="" />
                    </div>
                    <h4>Get instant feedback</h4>
                </div>

                <div className='whyalfred-card'>
                    <div>
                        <img src={Why} alt="" />
                    </div>
                    <h4>Expand your vocabulary and Correct your grammar</h4>
                </div>
            </section>
        </div>
   </section>
  )
}

export default Whyalfred
