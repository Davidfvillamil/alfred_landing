import React from 'react'

import './videosection.css'

function Videosection() {
  
  const scrollToForm = () => {
    const formSection = document.getElementById('contact')
    formSection.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <section className='videosection-main-container'>
        <section className='videosection-video-container'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/VYqIeBoee9U&t=13s&ab_channel=DavidVillamil" frameborder="0" allowFullScreen></iframe>
        </section>
        <section className='videosection-text-container'>
            <div>
                <h2>Level Up Your Speaking Skills: Watch Alfred's Demo!</h2>
                <p>RCurious about improving your English speaking skills? Watch our demo featuring Alfred, your personalized speaking coach! Get expert feedback and tips tailored just for you. It's your shortcut to fluent English—don't miss out!</p> 
            </div>
            <div className='videosection-text-container--button'>
              <button onClick={scrollToForm}>Join wait list!</button>
            </div>
        </section>
    </section>
  )
}

export default Videosection
