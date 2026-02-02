import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaWhatsapp, FaArrowDown, FaPhone } from 'react-icons/fa';

const Hero = () => {
    const navigate = useNavigate();

    const whatsappNumber = '9515567932';
    const phoneNumber = '9515567932';
    const whatsappMessage = encodeURIComponent('Hi! I am interested in Lycas Bike Rental. Please share more details.');
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    return (
        <section id="home" className="relative h-[85vh] w-full overflow-hidden pt-16 md:pt-20">
            {/* Background Image */}
            <div
                className="absolute inset-0 transition-opacity duration-1000 opacity-100"
                style={{
                    backgroundImage: `url(/images/lycas-bg-hero.png)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                }}
            />

            {/* Overlay */}
            <div className="overlay-dark bg-black/40 absolute inset-0" />

            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-center">
                <div className="container-custom px-3 md:px-4">
                    <div className="text-center animate-slide-up">
                        <div className="inline-block mb-2 md:mb-3">
                            <span className="inline-flex items-center px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-[10px] md:text-sm font-semibold">
                                🔌 EV FUTURE
                            </span>
                        </div>

                        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-3 md:mb-4 text-shadow-lg leading-tight px-2">
                            Ride the Future.
                            <br />
                            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                                Go Electric.
                            </span>
                        </h1>

                        <p className="text-xs sm:text-sm md:text-lg text-gray-100 mb-6 md:mb-8 max-w-2xl mx-auto text-shadow px-4 leading-relaxed">
                            LycasGo is a modern EV scooter rental service focused on eco-friendly, affordable, and convenient urban mobility.
                            Our electric scooters are designed to deliver smooth, silent, and cost-effective rides while reducing carbon emissions.
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center animate-slide-up animation-delay-200 px-4">
                            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center text-sm md:text-base px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                <FaWhatsapp className="text-lg mr-2" />
                                <span className="whitespace-nowrap">Join LycasGo Revolution</span>
                            </a>
                            <a href={`tel:${phoneNumber}`} className="w-full sm:w-auto inline-flex items-center justify-center text-sm md:text-base px-6 py-3 bg-white hover:bg-gray-100 text-gray-900 font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                <FaPhone className="text-lg mr-2" />
                                <span className="whitespace-nowrap">Call LycasGo</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-5 h-8 border-2 border-white rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-white rounded-full animate-pulse" />
                </div>
            </div>
        </section>
    );
};

export default Hero;

