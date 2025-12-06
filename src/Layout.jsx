import React from 'react'
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'
import Crousal from './component/Crousal/Crousal'
import Map from './component/Map/Map.jsx'
import About from './component/About Us/About.jsx'
import Why from './component/Why Us/Why.jsx'
const layout = () => {
    return (
        <>
            <Header />
            <Crousal />
            <About />
            <Why />
            <Map />
            <Footer />
        </>
    )
}

export default layout