import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__brand">Event Organiser</div>
      <nav className="header__nav">
        <a href="#" className="header__link">Home</a>
        <a href="#" className="header__link">Services</a>
        <a href="#" className="header__link">About Us</a>
        <a href="#" className="header__link">Why Us</a>
        <a href="#" className="header__link">Gallery</a>
        <a href="#" className="header__link">Testimonials</a>
        <a href="#" className="header__btn">Contact Us</a>
      </nav>
    </header>
  );
};

export default Header;