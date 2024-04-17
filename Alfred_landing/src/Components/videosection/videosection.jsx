import React from 'react'

import './videosection.css'

function Videosection() {
  return (
    <section className='videosection-main-container'>
        <section className='videosection-video-container'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/VYqIeBoee9U&t=13s&ab_channel=DavidVillamil" frameborder="0" allowFullScreen></iframe>
        </section>
        <section className='videosection-text-container'>
            <div>
                <h2>Want to check how it works?</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui consequatur rem assumenda nemo molestiae veniam, animi recusandae aut labore odit a culpa reiciendis ipsa ullam saepe beatae, voluptates sed optido.</p>
                
            </div>
            <div className='videosection-text-container--button'>
              <button>Get started</button>
            </div>
        </section>
    </section>
  )
}

export default Videosection
