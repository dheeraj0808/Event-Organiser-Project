import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <div className="footer__logo">Event Organiser</div>
          <div className="footer__contact">
            <span>📞 +91-8887088870</span>
            <span>✉️ care@eventorganiser.com</span>
            <div className="footer__social">
              <a href="www.google.com" aria-label="Facebook">f</a>
              <a href="www.google.com" aria-label="Instagram">■</a>
              <a href="www.google.com" aria-label="Linkdein">💼</a>
            </div>
          </div>
        </div>

        <div className="footer__column">
          <h4>Quick Links</h4>
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Gallery</a>
          <a href="#">Contact Us</a>
        </div>

        <div className="footer__column">
          <h4>Services</h4>
          <a href="#">Weddings</a>
          <a href="#">Birthdays</a>
          <a href="#">Corporate Events</a>
          <a href="#">Custom Packages</a>
        </div>

        <div className="footer__column">
          <h4>Information</h4>
          <a href="#">About Us</a>
          <a href="#">FAQs</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms &amp; Conditions</a>
        </div>
      </div>

      <div className="footer__bottom">
        © 2025 All Rights Reserved The Glorious Events | Developed by Dheeraj singh
      </div>
    </footer>
  );
};

export default Footer;