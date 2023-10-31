import React from 'react'

const ReviewsCard = ({description, imgUrl, rName, role}) => {
  return (
    <div className="reviews-card">
        <div className="stars-wrapper">
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
        </div>
        <p>{description}</p>
        <div className="customer">
            <img src={imgUrl} alt="Portrait of reviewer" />
            <div>
                <h4>{rName}</h4>
                <p>{role}</p>
            </div>
        </div>
    </div>
  )
}

export default ReviewsCard