import React from 'react';
import './about.css';

const About = () => {
  return (
    <section className="about">
      <div className="about__inner">
        <div className="about__text">
          <p className="about__eyebrow">About Us</p>
          <h2 className="about__title">Crafting memorable events with precision and heart.</h2>
          <p className="about__body">
            At The Glorious Events, we design weddings, birthdays, and corporate experiences that feel effortless and unforgettable.
            Our team handles every detail—from venue styling and vendor coordination to guest flow and showtime—so you can enjoy the moments that matter.
          </p>
          <div className="about__stats">
            <div>
              <div className="stat__number">350+</div>
              <div className="stat__label">Events Delivered</div>
            </div>
            <div>
              <div className="stat__number">12+</div>
              <div className="stat__label">Years of Experience</div>
            </div>
            <div>
              <div className="stat__number">4.9★</div>
              <div className="stat__label">Client Satisfaction</div>
            </div>
          </div>
          <div className="about__highlights">
            <span>End-to-end planning</span>
            <span>Creative décor & styling</span>
            <span>On-day coordination</span>
            <span>Vendor & logistics</span>
          </div>
        </div>
        <div className="about__card">
          <div className="about__badge">Premium Event Partner</div>
          <p>
            “We believe every celebration deserves thoughtful detail, warm hospitality, and a seamless flow that lets you stay present with your guests.”
          </p>
          <div className="about__signature">— Team Glorious</div>
        </div>
      </div>
    </section>
  );
};

export default About;