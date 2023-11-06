import React, { useState } from 'react';
import Logotype from '../assets/images/logotye.svg';
import Button from './generics/Button';
import { useLocation, NavLink } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <div className="container">
        <a href='/'>
          <img src={Logotype} alt="Crito logotype" />
        </a>
        <button id='headerMenuBtn' className="menu-bars">
          <i className="fa-solid fa-bars" />
        </button>
        <div className="menu-desktop">
          <div className="menu-desktop-top">
            <div className="contact-information">
              <div className="contact-information-content">
                <i className="fa-solid fa-phone"></i>
                +46 (8) 121 470 50
              </div>
              <div className="contact-information-content">
                <i className="fa-regular fa-envelope"></i>
                info@crito.com
              </div>
              <div className="contact-information-content last">
                <i className="fa-solid fa-location-dot" />
                Sveavägen 31, 111 34 STOCKHOLM
              </div>
            </div>
            <div className="social-media">
              <a
                href="/home"
                target="_blank"
                className="socialmedia-links"
              >
                <i className="fa-brands fa-facebook" />
              </a>
              <a
                href="/home"
                target="_blank"
                className="socialmedia-links"
              >
                <i className="fa-brands fa-square-x-twitter" />
              </a>
              <a
                href="/home"
                target="_blank"
                className="socialmedia-links"
              >
                <i className="fa-brands fa-instagram" />
              </a>
              <a
                href="/home"
                target="_blank"
                className="socialmedia-links"
              >
                <i className="fa-brands fa-linkedin" />
              </a>
            </div>
          </div>
          <div className="menu-desktop-bottom">
            <nav>
              <NavLink exact to="/" activeclassname="active">Home</NavLink>
              <NavLink to="/service" activeclassname="active">Service</NavLink>
              <NavLink to="/news" activeclassname="active">News</NavLink>
              <NavLink to="/contact" activeclassname="active">Contact</NavLink>
            </nav>
            <Button type="btn-theme" title="Log in" url="/login" />
          </div>
        </div>
      </div>
    </header>

  )
}

export default Header