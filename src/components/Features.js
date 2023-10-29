import React from 'react'

const Features = () => {
  return (
    <section>
        <div className="container">
            <div className="features">
                <div className="features-content">
                    <h2>Features</h2>
                    <h3>Our Accounting is trusted by thousands of companies</h3>
                    <a href="service.html" className="btn-theme">Learn more<i className="fa-regular fa-arrow-up-right"></i></a>
                </div>

                <div className="features-cards">

                    <div className="features-cards-content">
                        <i className="fa-regular fa-box-circle-check"></i>
                        <h4>Business Advice</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features