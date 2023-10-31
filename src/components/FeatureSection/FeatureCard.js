import React from 'react'

const FeatureCard = ({title, icon, description}) => {
  return (
    <div className="features-cards-content">
        <i className={icon} />
        <h4>{title}</h4>
        <p>{description}</p>
    </div>
  )
}

export default FeatureCard