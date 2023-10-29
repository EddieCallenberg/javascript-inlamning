import React from 'react'

const ServiceBox = ({title, description, url}) => {
  return (
    <div className="our-services-card">
        <hr />
        <h4>
            {title}
        </h4>
        <p>{description}</p>
        <a href={url}><i className="fa-solid fa-arrow-right" /></a>
    </div>
  )
}

export default ServiceBox