import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer/Footer'
import NewsHero from '../components/NewsHero/NewsHero'
import NewsMainSection from '../components/NewsMainSection/NewsMainSection'
import NewsletterSignup from '../components/NewsletterSignup/NewsletterSignup'

const News = () => {
  return (
    <>
    <Header />
    <main>
        <NewsHero />
        <NewsMainSection />
        <NewsletterSignup />
    </main>
    <Footer />
    </>
  )
}

export default News