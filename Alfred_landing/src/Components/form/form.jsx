import React from 'react'
import { useRef, useState, useEffect } from 'react';

import './form.css'

import emailjs from '@emailjs/browser';

function Form() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_5jepyw9', 'template_muyub85', form.current, 'kixPAo62u5waeF82w')
            .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

    const alert = () => {
        swal("Your message has been sent. I'll contact you shortly")
        setName('')
        setEmail('')
        setMessage('')
    }

    useEffect(() => {
        setIsFormValid(name.trim() !== '' && email.trim() !== '');
    }, [name, email]);

  return (
    <>
        <section className="contact container section" id="contact">
            <h2 className="section__title">Get in touch!</h2>

            <div className="contact__container grid">
                <div className="contact__info">
                    <h3 className="contact__title">Be the first one trying thsi tool out</h3>
                    <p className="contact__details">Be one of the first to try Alfred and become part of our community. Enjoy benefits like 5 free interactions and join us in our continuous improvement journey.</p>
                </div>

                <form action="" className="contact__info" ref={form} onSubmit={sendEmail}>
                    <div className="contact__form-group">
                        <div className="contact__form-div">
                            <input type="text" className="contact__form-input" placeholder="Insert your name" name='user_name' onChange={(e) => setName(e.target.value)}/>
                        </div>

                        <div className="contact__form-div">
                            <input type="email" className="contact__form-input" placeholder="Insert your email" name='user_email' onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                    </div>

                        <div className="contact__form-div">
                            <input type="text" className="contact__form-input" placeholder="Insert your subjet"/>
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <textarea name="message" id="" cols="30" rows="10" className="contact__form-input" placeholder="Write your message" onChange={(e) => setMessage(e.target.value)}></textarea>
                        </div>
                    
                    
                    <input type="submit" className="btn" value='Send Message' disabled={!isFormValid} onClick={() => alert()} />
                </form>
            </div>
        </section>
    </>
  )
}

export default Form
