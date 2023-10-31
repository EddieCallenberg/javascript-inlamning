import React from 'react'
import Button from '../generics/Button'
import SectionTitle from '../generics/SectionTitle'
import FeatureCard from './FeatureCard'

const features = [
    {title: "Business Advice", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.", icon: "fa-sharp fa-regular fa-handshake"},
    {title: "Startup Business", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.", icon: "fa-regular fa-lightbulb-on"},
    {title: "Financial Advice", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.", icon: "fa-solid fa-display-chart-up-circle-dollar"},
    {title: "Risk Management", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.", icon: "fa-regular fa-box-circle-check"}
]

const FeatureSection = () => {
  return (
    <section>
        <div className="container">
          <div className="features">
            <div className="features-content">
              <SectionTitle title="Features" description="Our Accounting is trusted by thousands of companies" />
              <Button type="btn-theme" title="Learn More" url="/learn-more" />
            </div>
            <div className="features-cards">
              {
                features.map((feature, index) => (
                    <FeatureCard key={index} title={feature.title} description={feature.description} icon={feature.icon} />
                ))
              }
            </div>
          </div>
        </div>
    </section>
  )
}

export default FeatureSection