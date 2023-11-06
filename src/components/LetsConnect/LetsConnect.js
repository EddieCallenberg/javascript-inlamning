import React from 'react'
import BackLines from '../../assets/images/background-lines.svg'

const LetsConnect = () => {
  return (
    <section className="biege-background lcwc">
        <div className="container lets-connect-wrapper">
          <nav className="lets-connect-nav">
            <a href="/npm start">Home</a>
            <a className="active-alt" href="contact.html">Contact</a>
          </nav>
          <h1>Let's Connect</h1>
        </div>
        <img src={BackLines} alt="" />
    </section>
  )
}

export default LetsConnect