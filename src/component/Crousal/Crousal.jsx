import React, { useState, useEffect } from 'react';
import './Crousal.css';
import img1 from '../../assets/1.jpg';
import img2 from '../../assets/2.jpg';
import img3 from '../../assets/3.jpg';

const slides = [
  { type: 'image', src: img2, alt: 'Outdoor wedding setup' },
  { type: 'image', src: img3, alt: 'Reception dinner lights' },
  { type: 'image', src: img1, alt: 'Images' },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1920&q=80',
    alt: 'Elegant table decor',
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1482575832494-771f74bf6857?auto=format&fit=crop&w=1920&q=80',
    alt: 'Wedding dance floor',
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1503428593586-e225b39bddfe?auto=format&fit=crop&w=1920&q=80',
    alt: 'Birthday party celebration',
  },
];

const Crousal = ({ interval = 5000 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), interval);
    return () => clearInterval(id);
  }, [interval]);

  const goTo = (i) => setIndex((i + slides.length) % slides.length);
  const slide = slides[index];

  return (
    <div className="crousal">
      <div className="crousal__frame">
        {slide.type === 'image' ? (
          <img src={slide.src} alt={slide.alt || 'slide'} />
        ) : (
          <video src={slide.src} autoPlay muted loop playsInline />
        )}

        <div className="crousal__controls">
          <button onClick={() => goTo(index - 1)} aria-label="Previous">‹</button>
          <button onClick={() => goTo(index + 1)} aria-label="Next">›</button>
        </div>

        <div className="crousal__dots">
          {slides.map((_, i) => (
            <span
              key={i}
              className={i === index ? 'dot active' : 'dot'}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Crousal;