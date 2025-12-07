import React from 'react';
import './Services.css';

const services = [
    {
        title: 'Show Organisers',
        desc: 'We organise shows that leave audiences spellbound.',
        img: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80',
    },
    {
        title: 'Stage Show Organisers',
        desc: 'Music, singing, dancing, or any shows with the best arrangements.',
        img: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
    },
    {
        title: 'Theme Party Organisers',
        desc: 'Exclusive party ideas tailored to your selected theme.',
        img: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80',
    },
    {
        title: 'Consultation',
        desc: 'Rich knowledge and guidance for tailored event needs.',
        img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    },
    {
        title: 'Event Management Companies',
        desc: 'Manage your company events at your space, affordably.',
        img: 'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&w=800&q=80',
    },
    {
        title: 'Event Organisers',
        desc: 'Any kind of event, occasion, or campaign—covered.',
        img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80',
    },
    {
        title: 'Exhibition Organisers',
        desc: 'All amenities required for successful exhibitions.',
        img: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80',
    },
    {
        title: 'Game Show Organisers',
        desc: 'Engrossing and entertaining game shows for your audience.',
        img: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=800&q=80',
    },
];

const Services = () => {
    return (
        <section className="services" id="services">
            <div className="services__inner">
                <div className="services__header">
                    <p className="services__eyebrow">Our Services</p>
                    <h2 className="services__title">Versatile event solutions for every occasion.</h2>
                    <p className="services__body">
                        From intimate gatherings to large-scale productions, we plan, design, and deliver experiences that feel effortless.
                    </p>
                </div>

                <div className="services__grid">
                    {services.map((item) => (
                        <div key={item.title} className="service__card">
                            <div className="service__image">
                                <img src={item.img} alt={item.title} />
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                            <button type="button">Enquire Now</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;