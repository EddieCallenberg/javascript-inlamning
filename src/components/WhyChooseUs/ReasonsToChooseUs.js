import React from 'react'

const ReasonsToChooseUs = ({icon, title, description}) => {
  return (
    <div className="wcu-card">
        <div className="icon-wrapper">
            <i className={icon} />
        </div>
        <div>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default ReasonsToChooseUs