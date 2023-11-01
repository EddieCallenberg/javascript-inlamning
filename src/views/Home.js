import React from 'react'
import Header from '../components/Header'
import Showcase from '../components/Showcase'
import CompaniesSection from '../components/CompaniesSection'
import OurServices from '../components/OurServices'
import FeatureSection from '../components/FeatureSection/FeatureSection'
import AboutCompany from '../components/AboutCompany/AboutCompany'
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs'
import ProjectCase from '../components/ProjectCase/ProjectCase'
import TeamAndTestimonial from '../components/TeamAndTestimonial/TeamAndTestimonial'
import BlogSection from '../components/BlogSection/BlogSection'
import NewsletterSignup from '../components/NewsletterSignup/NewsletterSignup'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <>
        <Header />
        <main>
            <Showcase />
            <CompaniesSection />
            <FeatureSection />
            <AboutCompany />
            <OurServices />
            <WhyChooseUs />
            <ProjectCase />
            <TeamAndTestimonial />
            <BlogSection />
            <NewsletterSignup />
        </main>
        <Footer />
    </>
  )
}

export default Home