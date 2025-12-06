import React from 'react'
import './Gallery.css'

const galleryItems = [
  {
    title: 'Wedding Reception',
    image:
      'https://images.unsplash.com/photo-1529636447262-2f8ccc8e087b?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Corporate Conference',
    image:
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Live Concert Night',
    image:
      'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Birthday Celebration',
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Cultural Performance',
    image:
      'https://images.unsplash.com/photo-1515165562835-c4c9e0737eaa?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Fashion Showcase',
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80',
  },
]

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <div className="gallery__inner">
        <header className="gallery__header">
          <p className="gallery__eyebrow">Event Highlights</p>
          <h2 className="gallery__title">Gallery</h2>
          <p className="gallery__body">
            A glimpse into the experiences we craft – from intimate gatherings to
            large-scale productions.
          </p>
        </header>

        <div className="gallery__grid">
          {galleryItems.map((item, index) => (
            <article className="gallery__item" key={index}>
              <div className="gallery__image-wrapper">
                <img
                  src={item.image}
                  alt={item.title}
                  className="gallery__image"
                />
                <div className="gallery__overlay" />
                <div className="gallery__caption">
                  <span className="gallery__chip">Event</span>
                  <h3 className="gallery__item-title">{item.title}</h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery