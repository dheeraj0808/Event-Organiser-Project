import React, { useEffect, useState } from 'react'
import './Testimonial.css'

const testimonials = [
    {
        name: 'Aarav Sharma',
        role: 'Wedding Client',
        message:
            'They made our special day truly magical. Every detail was handled with so much care and professionalism.',
        image:
            'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80',
    },
    {
        name: 'Priya Verma',
        role: 'Corporate Event',
        message:
            'Flawless execution from start to finish. Our guests were extremely impressed by the ambience and coordination.',
        image:
            'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80',
    },
    {
        name: 'Rahul Mehta',
        role: 'Concert Organiser',
        message:
            'The energy, the lighting, the sound — everything was top-notch. Couldn’t have asked for a better team.',
        image:
            'https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?auto=format&fit=crop&w=400&q=80',
    },
    {
        name: 'Neha Kapoor',
        role: 'Birthday Celebration',
        message:
            'From decor to music, everything was so well planned. Our guests are still talking about the party!',
        image:
            'https://images.unsplash.com/photo-1544723795-432537d12f6c?auto=format&fit=crop&w=400&q=80',
    },
    {
        name: 'Vikram Singh',
        role: 'Product Launch',
        message:
            'They understood our brand and created an event that perfectly matched our identity and goals.',
        image:
            'https://images.unsplash.com/photo-1544723795-3fb0b13cd1c4?auto=format&fit=crop&w=400&q=80',
    },
]

const Testimonial = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [isMobile, setIsMobile] = useState(
        typeof window !== 'undefined' ? window.innerWidth <= 640 : false
    )

    const goNext = () => {
        setActiveIndex(prev => (prev + 1) % testimonials.length)
    }

    const goPrev = () => {
        setActiveIndex(prev => (prev - 1 + testimonials.length) % testimonials.length)
    }

    // auto-slide
    useEffect(() => {
        const interval = setInterval(goNext, 5000) // 5s
        return () => clearInterval(interval)
    }, [])

    // update isMobile on resize (better responsiveness)
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 640)
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    // Rotate list so it feels like infinite loop
    const rotated = [
        ...testimonials.slice(activeIndex),
        ...testimonials.slice(0, activeIndex),
    ]

    // 3 cards on desktop, 1 card on phone
    const itemsPerView = isMobile ? 1 : 3
    const visible = rotated.slice(0, itemsPerView)

    return (
        <section className="testimonial" id="testimonial">
            <div className="testimonial__inner">
                <header className="testimonial__header">
                    <p className="testimonial__eyebrow">What Our Clients Say</p>
                    <h2 className="testimonial__title">Testimonials</h2>
                    <p className="testimonial__body">
                        Real words from clients who trusted us to create unforgettable experiences.
                    </p>
                </header>

                <div className="testimonial__controls">
                    <button
                        className="testimonial__nav-btn testimonial__nav-btn--left"
                        onClick={goPrev}
                        aria-label="Previous testimonials"
                    >
                        ‹
                    </button>

                    <button
                        className="testimonial__nav-btn testimonial__nav-btn--right"
                        onClick={goNext}
                        aria-label="Next testimonials"
                    >
                        ›
                    </button>
                </div>

                <div className="testimonial__grid">
                    {visible.map((item, index) => (
                        <article
                            className="testimonial__card"
                            key={`${item.name}-${index}`}
                        >
                            <div className="testimonial__profile">
                                <div className="testimonial__avatar-wrapper">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="testimonial__avatar"
                                    />
                                </div>
                                <div>
                                    <h3 className="testimonial__name">{item.name}</h3>
                                    <p className="testimonial__role">{item.role}</p>
                                </div>
                            </div>

                            <p className="testimonial__message">“{item.message}”</p>

                            <div className="testimonial__quote-mark">❝</div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonial