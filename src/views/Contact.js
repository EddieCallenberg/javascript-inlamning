import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer/Footer'
import LetsConnect from '../components/LetsConnect/LetsConnect'
import ContactInformation from '../components/ContactInformation/ContactInformation'
import ContactForm from '../components/ContactForm/ContactForm'
import ContaqctMap from '../components/ContactMap/ContaqctMap'

const Contact = () => {
  return (
    <>
        <Header />
        <main>
          <LetsConnect />
          <ContactInformation />
          <ContactForm />
          <ContaqctMap />
        </main>
        <Footer />
    </>
  )
}

export default Contact