import React from 'react'
import './Slider.css'

const brands = [
    'Wedding Aura',
    'Urban Lights Events',
    'Royal Palace Banquets',
    'Skyline Conferences',
    'Infinity Productions',
    'Golden Frame Studios',
    'Velvet Night Club',
    'Grand Regal Hotels',
]

const Slider = () => {
    // duplicate list for seamless infinite scroll
    const loopBrands = [...brands, ...brands]

    return (
        <section className="brand-strip">
            <div className="brand-strip__inner">
                <p className="brand-strip__eyebrow">Brands & Venues We Work With</p>

                <div className="brand-strip__mask">
                    <div className="brand-strip__row">
                        {loopBrands.map((name, index) => (
                            <div className="brand-strip__pill" key={index}>
                                <span className="brand-strip__text">{name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Slider