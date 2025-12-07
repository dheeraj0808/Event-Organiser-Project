import React, { useState } from 'react'
import './Header.css'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(prev => !prev)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className="header">
      <div className="header__main-row">
        <div className="header__brand">Event Organiser</div>

        <div className="header__right">
          {/* nav contains only links */}
          <nav
            className={
              'header__nav' + (isOpen ? ' header__nav--open' : '')
            }
          >
            <a href="#home" className="header__link" onClick={closeMenu}>
              Home
            </a>
            <a href="#services" className="header__link" onClick={closeMenu}>
              Services
            </a>
            <a href="#about" className="header__link" onClick={closeMenu}>
              About Us
            </a>
            <a href="#why" className="header__link" onClick={closeMenu}>
              Why Us
            </a>
            <a href="#gallery" className="header__link" onClick={closeMenu}>
              Gallery
            </a>
            <a
              href="#testimonial"
              className="header__link"
              onClick={closeMenu}
            >
              Testimonials
            </a>
          </nav>

          {/* Contact Us stays always visible (desktop + mobile) */}
          <a href="#contact" className="header__btn">
            Contact Us
          </a>

          {/* Mobile-only toggle button (hidden on desktop) */}
          <button
            className="header__toggle"
            type="button"
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <span className="header__toggle-line" />
            <span className="header__toggle-line" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header