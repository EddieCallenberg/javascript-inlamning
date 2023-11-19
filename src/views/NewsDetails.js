import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer/Footer'
import NewsDetailsBody from '../components/NewsDetailsComp/NewsDetailsBody'
import NewsDetailsSlider from '../components/NewsDetailsSlider/NewsDetailsSlider'

const NewsDetails = () => {
  return (
    <>
    <Header />
    <main>
    <NewsDetailsBody />
    <NewsDetailsSlider />
    </main>
    <Footer />
    </>
  )
}

export default NewsDetails