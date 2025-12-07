import React from 'react';
import './Why.css';

const Why = () => {
    const pillars = [
        { title: 'End-to-End Planning', desc: 'From venue scouting to day-of coordination, every detail is handled for you.' },
        { title: 'Creative Décor', desc: 'Tailored themes, florals, and lighting that match your story and brand.' },
        { title: 'Reliable Vendors', desc: 'Curated partners for catering, entertainment, AV, and logistics.' },
        { title: 'On-Site Excellence', desc: 'A calm, experienced team ensuring timelines, flow, and guest comfort.' },
    ];

    return (
        <section className="why" id="why">
            <div className="why__inner">
                <div className="why__header">
                    <p className="why__eyebrow">Why Choose Us</p>
                    <h2 className="why__title">Seamless events designed for lasting memories.</h2>
                    <p className="why__body">
                        We combine meticulous planning, creative styling, and warm hospitality to deliver weddings, birthdays,
                        and corporate experiences that feel effortless and unforgettable.
                    </p>
                </div>
                <div className="why__grid">
                    {pillars.map((item) => (
                        <div key={item.title} className="why__card">
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Why;