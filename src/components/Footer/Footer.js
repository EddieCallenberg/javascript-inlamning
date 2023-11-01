import React from 'react'
import FooterCosmetic from '../../assets/images/background-lines-white-right.svg'
import CritoInfo from './CritoInfo'
import FooterLink from './FooterLink'

const Footer = () => {

    const companyLinks = [
        {url: '/about', text: "About"},
        {url: '/features', text: "Features"},
        {url: '/works', text: "Works"},
        {url: '/career', text: "Career"}
    ]

    const helpLinks = [
        {url: '/customer-support', text: "Customer Support"},
        {url: '/delivery-details', text: "Delivery Details"},
        {url: '/terms-conditions', text: "Terms & Conditions"},
        {url: '/privacy-policy', text: "Privacy Policy"},
    ]

    const resourcesLinks = [
        {url: '/free-ebooks', text: "Free eBooks"},
        {url: '/development-tutorial', text: "Development Tutorial"},
        {url: '/how-to-blog', text: "How to - Blog"},
        {url: '/youtube-playlist', text: "Youtube Playlist"}
    ]

    const links = [
        {url: '/free-ebooks', text: "Free eBooks"},
        {url: '/development-tutorial', text: "Development Tutorial"},
        {url: '/how-to-blog', text: "How to - Blog"},
        {url: '/youtube-playlist', text: "Youtube Playlist"}
    ]

  return (
    <footer className="dark-background">
        <div className="container">
          <div className="footer-wrapper">
            <CritoInfo />
            <FooterLink title="Company" links={companyLinks} />
            <FooterLink title="Help" links={helpLinks} />
            <FooterLink title="Resources" links={resourcesLinks} />
            <FooterLink title="Links" links={links} />
          </div>
          <div className="footer-wrapper-two">
            <p>© 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
            <div className="footer-socials">
              <a href="https://www.facebook.com" target="_blank" className="socialmedia-links"><i className="fa-brands fa-facebook" /></a>
              <a href="https://www.twitter.com" target="_blank" className="socialmedia-links"><i className="fa-brands fa-square-x-twitter" /></a>
              <a href="https://www.instagram.com" target="_blank" className="socialmedia-links"><i className="fa-brands fa-instagram" /></a>
              <a href="https://www.linkedin.com" target="_blank" className="socialmedia-links"><i className="fa-brands fa-linkedin" /></a>
            </div>
          </div>
        </div>
        <img className="footer-cosmetic" src={FooterCosmetic} alt="" />
    </footer>
  )
}

export default Footer