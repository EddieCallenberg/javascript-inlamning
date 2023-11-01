import React from 'react'
import Button from '../generics/Button'
import BackgroundWavyLines from '../../assets/images/background-wavy-lines.svg'

const NewsletterSignup = () => {
  return (
    <section className="biege-background newsletter-signup">
        <div className="container">
            <div className="newsletter-wrapper">
                <h2>Get News Updates By Signup</h2>
                <div className="mail-and-btn">
                    <input type="mail" placeholder="username@domain.com" />
                    <Button type="btn-theme" title="Sign up" url="/signup" />
                </div>
            </div>
        </div>
        <img className="newsletter-cosmetic" src={BackgroundWavyLines} alt="cosmetic element" />
    </section>
  )
}

export default NewsletterSignup