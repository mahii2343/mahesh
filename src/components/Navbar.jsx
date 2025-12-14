import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setIsOpen(false);
    };

    const whatsappNumber = '7032160046';
    const whatsappMessage = encodeURIComponent('Hi! I would like to rent a bike. Can you please help me with the details?');
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-3' : 'bg-white/95 backdrop-blur-sm py-4'
            }`}>
            <div className="container-custom">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3">
                        <img
                            src="/images/logo.png"
                            alt="Rent A Ride Logo"
                            className="h-16 w-auto object-contain"
                        />
                    </Link>
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-primary-600 font-semibold transition-colors duration-200">
                            Home
                        </button>
                        <Link to="/bikes" className="text-gray-700 hover:text-primary-600 font-semibold transition-colors duration-200">
                            Bikes
                        </Link>
                        <Link to="/attractions" className="text-gray-700 hover:text-primary-600 font-semibold transition-colors duration-200">
                            Attractions
                        </Link>
                        <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-primary-600 font-semibold transition-colors duration-200">
                            Services
                        </button>
                        <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-primary-600 font-semibold transition-colors duration-200">
                            About
                        </button>
                        <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-primary-600 font-semibold transition-colors duration-200">
                            Contact
                        </button>
                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 btn-primary">
                            <FaWhatsapp className="text-xl" />
                            <span>Book Now</span>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-gray-700 hover:text-primary-600 transition-colors duration-200"
                    >
                        {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden mt-4 py-4 border-t border-gray-200 animate-slide-down">
                        <div className="flex flex-col space-y-4">
                            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-primary-600 font-semibold text-left transition-colors duration-200">
                                Home
                            </button>
                            <Link to="/bikes" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-primary-600 font-semibold text-left transition-colors duration-200">
                                Bikes
                            </Link>
                            <Link to="/attractions" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-primary-600 font-semibold text-left transition-colors duration-200">
                                Attractions
                            </Link>
                            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-primary-600 font-semibold text-left transition-colors duration-200">
                                Services
                            </button>
                            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-primary-600 font-semibold text-left transition-colors duration-200">
                                About
                            </button>
                            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-primary-600 font-semibold text-left transition-colors duration-200">
                                Contact
                            </button>
                            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary justify-center">
                                <FaWhatsapp className="text-xl mr-2" />
                                Book Now
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
