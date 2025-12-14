import React from 'react';
import Hero from '../components/Hero';
import BikePreview from '../components/BikePreview';
import Services from '../components/Services';
import About from '../components/About';
import Reviews from '../components/Reviews';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <>
            <Hero />
            <BikePreview />
            <Services />
            <About />
            <Reviews />
            <Contact />
        </>
    );
};

export default Home;
