import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__column footer__column--brand">
          <div className="footer__logo">Event Organiser</div>
          <p className="footer__tagline">
            Curating weddings, corporate events and celebrations that feel effortless and truly
            memorable.
          </p>

          <a href="tel:+918887088870" className="footer__cta-btn">
            Call For Consultation
          </a>
        </div>

        <div className="footer__column">
          <h4>Quick Links</h4>
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer__column">
          <h4>Event Types</h4>
          <span>Weddings &amp; Receptions</span>
          <span>Corporate Shows &amp; Launches</span>
          <span>Birthdays &amp; Social Gatherings</span>
          <span>Stage &amp; Live Performances</span>
        </div>

        <div className="footer__column footer__column--right">
          <h4>Office</h4>
          <p className="footer__address">
            Vip Road, Zirakpur<br />
            Punjab, India
          </p>

          <div className="footer__contact">
            <a href="tel:+918887088870" className="footer__contact-line">
              <span>Phone:</span>
              <span>+91-88870-88870</span>
            </a>
            <a href="mailto:care@eventorganiser.com" className="footer__contact-line">
              <span>Email:</span>
              <span>care@eventorganiser.com</span>
            </a>
          </div>

          <div className="footer__social">
            <a
              href="https://www.google.com"
              aria-label="Facebook"
              className="footer__social-icon footer__social-icon--fb"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.google.com"
              aria-label="Instagram"
              className="footer__social-icon footer__social-icon--ig"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.google.com"
              aria-label="LinkedIn"
              className="footer__social-icon footer__social-icon--ln"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© 2025 Event Organiser. All rights reserved.| Developed by Dheeraj Singh</span>
      </div>
    </footer>
  )
}

export default Footer