import React from 'react'
import './Gallery.css'

const galleryItems = [
  {
    title: 'Grand Wedding Reception',
    location: 'Jaipur Palace',
    image:
      'https://images.unsplash.com/photo-1529636447262-2f8ccc8e087b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Corporate Leadership Summit',
    location: 'Mumbai Convention Center',
    image:
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Live Concert Night',
    location: 'Open Air Arena',
    image:
      'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Elegant Birthday Soirée',
    location: 'Private Lounge',
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Cultural Performance Evening',
    location: 'City Auditorium',
    image:
      'https://images.unsplash.com/photo-1515165562835-c4c9e0737eaa?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Fashion & Lifestyle Showcase',
    location: 'Luxury Ballroom',
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Luxury Engagement Evening',
    location: 'Heritage Courtyard',
    image:
      'https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Gala Dinner & Awards Night',
    location: 'Five-Star Banquet Hall',
    image:
      'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80',
  },
]

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <div className="gallery__inner">
        <header className="gallery__header">
          <p className="gallery__eyebrow">Event Highlights</p>
          <h2 className="gallery__title">Curated Visual Stories</h2>
          <p className="gallery__body">
            A handpicked selection of moments that capture the mood, energy, and
            detail of the experiences we create.
          </p>
        </header>

        <div className="gallery__mosaic">
          {galleryItems.map((item, index) => {
            const isHero = index === 0
            const isTall = index === 3

            const tileClass = [
              'gallery__tile',
              isHero ? 'gallery__tile--hero' : '',
              isTall ? 'gallery__tile--tall' : '',
            ]
              .filter(Boolean)
              .join(' ')

            return (
              <article className={tileClass} key={index}>
                <div className="gallery__tile-media">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="gallery__tile-image"
                  />
                  <div className="gallery__tile-overlay" />
                  <div className="gallery__tile-content">
                    <p className="gallery__tile-label">Signature Event</p>
                    <h3 className="gallery__tile-title">{item.title}</h3>
                    <p className="gallery__tile-location">{item.location}</p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Gallery