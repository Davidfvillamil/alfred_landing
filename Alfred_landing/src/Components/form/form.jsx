import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

import './form.css';
import '../Modal/modal.css';

function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_5jepyw9', 'template_muyub85', form.current, 'kixPAo62u5waeF82w')
            .then((result) => {
                console.log(result.text);
                setIsModalOpen(true); // Abrir el modal después de enviar el correo exitosamente
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((error) => {
                console.log(error.text);
            });
    };

    useEffect(() => {
        setIsFormValid(name.trim() !== '' && email.trim() !== '');
    }, [name, email]);

    const closeModal = () => {
        setIsModalOpen(false); // Función para cerrar el modal
    };

    return (
        <>
            <section className="contact container section" id="contact">
                <h2 className="section__title">Join the Waitlist!</h2>

                <div className="contact__container grid">
                    <div className="contact__info">
                        <h3 className="contact__title">Secure Your Spot: Get Early Access to Alfred!</h3>
                        <p className="contact__details">Be among the first to experience Alfred's groundbreaking features! Join our waitlist now for early access. Enter your email and embark on your journey to English fluency with Alfred!</p>
                    </div>

                    <form action="" className="contact__info" ref={form} onSubmit={sendEmail}>
                        <div className="contact__form-group">
                            <div className="contact__form-div">
                                <input type="text" className="contact__form-input" placeholder="What's your name?" name='user_name' value={name} onChange={(e) => setName(e.target.value)} />
                            </div>

                            <div className="contact__form-div">
                                <input type="email" className="contact__form-input" placeholder="What's your email" name='user_email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <textarea name="message" cols="30" rows="10" className="contact__form-input" placeholder="Share with us your experience and challenges in practicing speaking." value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                        </div>

                        <input type="submit" className="btn" value='Join Waitlist' disabled={!isFormValid} />

                        {/* Modal */}
                        {isModalOpen &&
                            <div className='modal'>
                                <div className='overlay' onClick={closeModal}></div>
                                <div className="modal-content">
                                    <h2> Thank you for joining the waitlist!</h2>
                                    <p>
                                       
                                        By joining the waitlist, you're setting yourself up for success with Alfred. Soon, you'll have the opportunity to experience Alfred firsthand and embark on your journey to IELTS preparation excellence.

                                    </p>
                                    <p>
                                        Stay tuned! We'll be reaching out to you shortly to provide more information and guide you through the next steps. In the meantime, get ready to dive into a world of personalized learning and effective study strategies
                                    </p>
                                    <button className='close-modal' onClick={() => setIsModalOpen(false)}>Close</button>
                                </div>
                            </div>
                        }
                    </form>
                </div>
            </section>
        </>
    );
}

export default Form;

