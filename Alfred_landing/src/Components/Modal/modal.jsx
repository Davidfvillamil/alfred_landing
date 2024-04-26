import React from 'react'
import { useState } from 'react'

import './modal.css'

function Modal() {

    const [modal, setModal] = useState(false)

  return (
    <div className='modal'>
        <div className='overlay'></div>
        <div className="modal-content">
            <h2>Hello modal</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima similique soluta voluptate velit exercitationem, quam corrupti omnis magni distinctio eligendi. Cupiditate nesciunt dolorem doloremque excepturi. Dolore voluptatum nulla blanditiis nisi.</p>
            <button className='close-modal'>Close</button>
        </div>
    </div>
  )
}

export default Modal
