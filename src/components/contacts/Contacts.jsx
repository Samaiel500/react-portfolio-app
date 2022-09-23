import React, { useRef } from 'react'
import './contacts.css'
import { MdOutlineMail, MdContactPhone } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com'


const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_orckigs', 'template_1yozt3e', form.current, 'PSRTraaNVOUf5WlP-')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <section id='contacts'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contacts__container">
        <div className="contacts__options">
          <article className="contacts__option">
            <MdOutlineMail className='contacts__option-icon'/>
            <h4>Email</h4>
            <h5>samaiel500@gmail.com</h5>
            <a href="mailto:samaiel500@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className="contacts__option">
            <MdContactPhone className='contacts__option-icon'/>
            <h4>Messenger</h4>
            <h5>egatortutorials</h5>
            <a href="https://vk.com" target='_blank'>Send a message</a>
          </article>
          <article className="contacts__option">
            <BsWhatsapp className='contacts__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+7(910)486-37-10</h5>
            <a href="https://api.whatsapp/send?phone=+79104863710" target='_blank'>Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button className='btn btn-primary' type='submit'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contacts