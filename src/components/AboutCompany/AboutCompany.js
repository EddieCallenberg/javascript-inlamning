import React from 'react'
import Founder from '../../assets/images/founder.png'
import Noodle from '../../assets/images/about-company-noodle.png'
import Button from '../generics/Button'
import SectionTitle from '../generics/SectionTitle'

const AboutCompany = () => {
  return (
    <section>
        <div className="container">
          <div className="about-company-wrapper">
            <div className="about-company-img">
              <img className="csm-elm" src={Noodle} alt="Cosmetic element" />
              <img src={Founder} alt="Crito's founder" />
              <div className="img-quote">
                <p>Samantha Brown, <span>Founder</span></p>
                <p className="quote-lorem">"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p> 
              </div>
            </div>
            <div className="about-company-content">
              <SectionTitle title="About Company" description="We Are Business Consulting &amp; Credit Repair Experts" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos. </p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.</p>                       
              <div className="about-company-btns">
                <Button type="btn-black" title="Learn more" url="/learn-more" />
                <Button type="btn-trans" title="Intro Video" url="youtube.com" />
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default AboutCompany