import React from 'react';
import './Map.css';

const Map = () => {
    return (
        <section className="map">
            <div className="map__content">
                <h3>Glorious occasion & Events</h3>
                <p>Visit us at our venue location.</p>
                <div className="map__frame">
                    <iframe
                        title="Glorious occasion & Events"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3438.300966328751!2d76.80190687468094!3d30.484231897601624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fc7e0e496be95%3A0x63338cc0e66e8245!2sGlorious%20occasion%20%26%20Events!5e0!3m2!1sen!2sin!4v1764962050515!5m2!1sen!2sin"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </section>
    );
};

export default Map;