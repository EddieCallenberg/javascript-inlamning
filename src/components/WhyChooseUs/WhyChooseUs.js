import React from 'react'
import BusinessWomen from '../../assets/images/business-women.png'
import ReasonsToChooseUs from './ReasonsToChooseUs'

const WhyChooseUs = () => {

    const reasons = [
        {icon: "fa-regular fa-handshake", title: "Process Excellence", description: "Lorem, ipsum dolor sit amet consectetur."},
        {icon: "fa-brands fa-codepen", title: "Strategic Planning", description: "Lorem, ipsum dolor sit amet consectetur."},
        {icon: "fa-sharp fa-regular fa-pen-nib", title: "Experience Design", description: "Lorem, ipsum dolor sit amet consectetur."},
        {icon: "fa-light fa-head-side-gear", title: "Artificial Inteligence", description: "Lorem, ipsum dolor sit amet consectetur."}
    ]

  return (
    <section className="cosmetic-one">
    <div className="container">
      <div className="why-choose-us-wrapper">
        <div className="why-choose-us-content">
          <h2>Why Choose Us</h2>
          <h3>Why We Are The Best Business Consulting Agency</h3>
          <div className="why-choose-us-cards">
            {
                reasons.map((reason, index) => (
                    <ReasonsToChooseUs key={index} icon={reason.icon} title={reason.title} description={reason.description} />
                ))
            }
          </div>
        </div>
        <img src={BusinessWomen} alt="two business-women at a table" />
        <div className="cosmetic-box biege-background" />
      </div>
    </div>
  </section>
  )
}

export default WhyChooseUs