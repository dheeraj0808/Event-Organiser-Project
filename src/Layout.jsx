import React from 'react'
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'
import Crousal from './component/Crousal/Crousal'
import Map from './component/Map/Map.jsx'
import About from './component/About Us/About.jsx'
import Why from './component/Why Us/Why.jsx'
import Services from './component/Services/Services.jsx'
import Gallery from './component/Gallery/Gallery.jsx'
import Testimonial from './component/Testimonial/Testimonial.jsx'
import Slider from './component/Slider/Slider.jsx'
import Cta from './component/CTA/Cta.jsx'

const layout = () => {
    return (
        <>
            <Header />
            <Crousal />
            <About />
            <Slider />
            <Services />
            <Why />
            <Gallery />
            <Cta />
            <Testimonial />
            <Map />
            <Footer />
        </>
    )
}

export default layout