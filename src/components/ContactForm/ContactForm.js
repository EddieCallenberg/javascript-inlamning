import React from 'react'
import ContactFormComp from './ContactFormComp'

const ContactForm = () => {
  return (
    <section>
        <div className="container feedback-form-section-wrapper biege-background">
          <h2>Leave us a message<br />for any information.</h2>
          <ContactFormComp />
        </div>
    </section>
  )
}

export default ContactForm