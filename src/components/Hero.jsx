import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaArrowDown } from 'react-icons/fa';

const Hero = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const backgroundImages = [
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2940&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2940&auto=format&fit=crop'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const whatsappNumber = '7032160046';
    const whatsappMessage = encodeURIComponent('Hi! I would like to book a bike. Can you please provide me with more details?');
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="relative h-screen w-full overflow-hidden">
            {/* Background Images with Transition */}
            {backgroundImages.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImage ? 'opacity-100' : 'opacity-0'
                        }`}
                    style={{
                        backgroundImage: `url(${image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
            ))}

            {/* Overlay */}
            <div className="overlay-dark" />

            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-center">
                <div className="container-custom px-4">
                    <div className="text-center animate-slide-up">
                        <div className="inline-block mb-4">
                            <span className="inline-flex items-center px-6 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-semibold">
                                🏍️ Premium Bike Rentals in Hyderabad
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-shadow-lg leading-tight">
                            Ride Your Dream
                            <br />
                            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                                Bike Today
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-100 mb-12 max-w-3xl mx-auto text-shadow">
                            Experience the freedom of self-driving bike rentals. Choose from our wide range of bikes and hit the road!
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up animation-delay-200">
                            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-10 py-4">
                                <FaWhatsapp className="text-2xl mr-3" />
                                Book Now on WhatsApp
                            </a>
                            <button onClick={() => scrollToSection('bikes')} className="btn-secondary text-lg px-10 py-4">
                                View Our Bikes
                                <FaArrowDown className="ml-3 animate-bounce" />
                            </button>
                        </div>

                        {/* Features Quick View */}
                        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-slide-up animation-delay-400">
                            <div className="bg-gradient-to-br from-primary-500 to-primary-700 p-6 rounded-2xl shadow-xl backdrop-blur-sm border border-primary-400/30 hover:scale-105 transition-transform duration-300">
                                <div className="text-4xl mb-3">⚡</div>
                                <h3 className="text-white font-bold text-lg mb-2">Starting at ₹499/day</h3>
                                <p className="text-white/90 text-sm">Affordable pricing for everyone</p>
                            </div>
                            <div className="bg-gradient-to-br from-accent-500 to-accent-700 p-6 rounded-2xl shadow-xl backdrop-blur-sm border border-accent-400/30 hover:scale-105 transition-transform duration-300">
                                <div className="text-4xl mb-3">🔧</div>
                                <h3 className="text-white font-bold text-lg mb-2">Well Maintained</h3>
                                <p className="text-white/90 text-sm">Regular service & hygiene checks</p>
                            </div>
                            <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-6 rounded-2xl shadow-xl backdrop-blur-sm border border-purple-400/30 hover:scale-105 transition-transform duration-300">
                                <div className="text-4xl mb-3">⏰</div>
                                <h3 className="text-white font-bold text-lg mb-2">7 AM - 10 PM Daily</h3>
                                <p className="text-white/90 text-sm">Extended business hours</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
                    <div className="w-1 h-3 bg-white rounded-full animate-pulse" />
                </div>
            </div>

            {/* Image Indicators */}
            <div className="absolute bottom-8 right-8 flex gap-2 z-20">
                {backgroundImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImage ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75'
                            }`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;

