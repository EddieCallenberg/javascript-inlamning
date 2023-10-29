import React from 'react'
import ServiceBox from './ServiceBox'
import SectionTitle from './generics/SectionTitle'
import Button from './generics/Button'

const OurServices = () => {

    const services = [
        {title: "Business Advice", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url: "services/business-advice"},
        {title: "Startup Business", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url: "services/startup-business"},
        {title: "Financial Advice", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url: "services/financial-advice"},
        {title: "Risk Management", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url: "services/risk-management"}
    ]


  return (
    <section className="biege-background os-container-wrapper">
        <div className="container">
            <div className="our-services-wrapper">
                <SectionTitle title="Our Services" description="We Provide The Best Consulting Services" />
                <div className="cards-wrapper">
                    {
                        services.map((service, index) => (
                            <ServiceBox key={index} title={service.title} description={service.description} url={service.url} />
                        ))
                    }
                </div>
                <div className="btn-wrapper">
                    <Button type="btn-trans" url="/sercices" title="Browse Services" />
                </div>
            </div>
        </div>
        <img
            className="services-cosmetic-elements"
            src="images/background-lines-right.svg"
            alt=""
        />
    </section>

  )
}

export default OurServices