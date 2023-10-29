import React from 'react'
import Backgroundlines from '../assets/images/background-lines.svg'
import Showcaseimg from '../assets/images/showcase-Image.png'
import Button from './generics/Button'

const Showcase = () => {
  return (
    <section className="showcase">
        <div className="container">
            <div className="content">
                <h1>We Provide The Best Business Solutions</h1>
                <p>
                    Establish your vision and value proposition and turn them into testable
                    prototypes.
                </p>
                <Button type="btn-theme" title="Get Consulting" url="/consulting" />
                <Button type="btn-trans" title="Learn more" url="/Learn-more" />
            </div>
            <img
            src={Showcaseimg}
            alt="image of a man in a suit holding a tablet"
            />
        </div>
        <img className="hero-cosmetic" src={Backgroundlines} alt="" />
    </section>

  )
}

export default Showcase