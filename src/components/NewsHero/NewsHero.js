import React from 'react'
import BackLines from '../../assets/images/background-lines.svg'

const NewsHero = () => {
  return (
    <section className="biege-background lcwc">
        <div className="container lets-connect-wrapper">
          <nav className="lets-connect-nav">
            <a href="/">Home</a>
            <a className="active-alt" href="/news">News</a>
          </nav>
          <h1>News</h1>
        </div>
        <img src={BackLines} alt="" />
    </section>
  )
}

export default NewsHero