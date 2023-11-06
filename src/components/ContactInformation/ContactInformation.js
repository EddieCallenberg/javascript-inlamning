import React from 'react'
import ContactCard from './ContactCard'

const ContactInformation = () => {

    const contactInfos = [
        {iconClass: "fa-solid fa-location-dot", title: "Visit us", textLineOne: "Sveavägen 31", textLineTwo: "111 34 STOCKHOLM"},
        {iconClass: "fa-solid fa-phone", title: "Call us", textLineOne: "+46 (8) 121 470 50", textLineTwo: "+46 (8) 121 470 51"},
        {iconClass: "fa-solid fa-envelope", title: "Email us", textLineOne: "info@crito.com", textLineTwo: "suport@crito.com"}
    ]

  return (
    <section>
        <div className="container contact-contact-info">
          {
            contactInfos.map((contactInfo, index) => (
                <ContactCard key={index} iconClass={contactInfo.iconClass} title={contactInfo.title} textLineOne={contactInfo.textLineOne} textLineTwo={contactInfo.textLineTwo} />
            ))
          }
        </div>
    </section>
  )
}

export default ContactInformation