import React from 'react'

const ContactCard = ({iconClass, title, textLineOne, textLineTwo}) => {
  return (
    <div className="contact-card">
        <div className="contact-card-top">
            <div className="icon-container">
                <i className={iconClass} />
            </div>
            <h2>{title}</h2>
        </div>
        <div className="contact-card-bottom">
            <p>{textLineOne} <br /> {textLineTwo}</p>
        </div>
    </div>
  )
}

export default ContactCard