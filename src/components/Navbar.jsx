import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll spy to detect active section
    useEffect(() => {
        const handleScrollSpy = () => {
            const sections = ['home', 'bike-preview', 'services', 'about', 'reviews', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const sectionId of sections) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        if (location.pathname === '/') {
            window.addEventListener('scroll', handleScrollSpy);
            handleScrollSpy(); // Initial check
            return () => window.removeEventListener('scroll', handleScrollSpy);
        }
    }, [location.pathname]);

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

    const isActive = (sectionId) => {
        return location.pathname === '/' && activeSection === sectionId;
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 shadow-lg py-3 backdrop-blur-md border-b border-white/10' : 'bg-transparent py-4'
            }`}>
            <div className="container-custom">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center group gap-3">
                        <div className="relative">
                            <div className="absolute -inset-2 bg-primary-500/20 rounded-full blur-md group-hover:bg-primary-500/30 transition-all"></div>
                            <img src="/images/lycas-logo-app.png" alt="LycasGo Logo" className="h-10 w-auto relative z-10" />
                        </div>
                        <div className="flex items-baseline font-display text-2xl md:text-3xl tracking-tighter">
                            <span className="font-bold text-white group-hover:text-primary-400 transition-colors">LYCAS</span>
                            <span className="font-extrabold text-primary-500 ml-1">GO</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <button
                            onClick={() => scrollToSection('home')}
                            className={`font-medium transition-colors duration-200 ${isActive('home') ? 'text-primary-500' : 'text-gray-300 hover:text-white'}`}
                        >
                            Home
                        </button>
                        <Link to="/bikes" className="text-gray-300 hover:text-white font-medium transition-colors duration-200">
                            Bikes
                        </Link>
                        <Link to="/rentals" className="text-gray-300 hover:text-white font-medium transition-colors duration-200">
                            Rentals
                        </Link>
                        <button
                            onClick={() => scrollToSection('services')}
                            className={`font-medium transition-colors duration-200 ${isActive('services') ? 'text-primary-500' : 'text-gray-300 hover:text-white'}`}
                        >
                            Services
                        </button>
                        <button
                            onClick={() => scrollToSection('about')}
                            className={`font-medium transition-colors duration-200 ${isActive('about') ? 'text-primary-500' : 'text-gray-300 hover:text-white'}`}
                        >
                            About
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className={`font-medium transition-colors duration-200 ${isActive('contact') ? 'text-primary-500' : 'text-gray-300 hover:text-white'}`}
                        >
                            Contact
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-white hover:text-primary-500 transition-colors duration-200"
                    >
                        {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden mt-4 py-4 border-t border-white/10 animate-slide-down bg-zinc-900/95 backdrop-blur-xl rounded-2xl px-4 absolute left-4 right-4 shadow-2xl">
                        <div className="flex flex-col space-y-4">
                            <button onClick={() => scrollToSection('home')} className="text-gray-200 hover:text-primary-500 font-medium text-left transition-colors duration-200">
                                Home
                            </button>
                            <Link to="/bikes" onClick={() => setIsOpen(false)} className="text-gray-200 hover:text-primary-500 font-medium text-left transition-colors duration-200">
                                Bikes
                            </Link>
                            <Link to="/rentals" onClick={() => setIsOpen(false)} className="text-gray-200 hover:text-primary-500 font-medium text-left transition-colors duration-200">
                                Rentals
                            </Link>
                            <button onClick={() => scrollToSection('services')} className="text-gray-200 hover:text-primary-500 font-medium text-left transition-colors duration-200">
                                Services
                            </button>
                            <button onClick={() => scrollToSection('about')} className="text-gray-200 hover:text-primary-500 font-medium text-left transition-colors duration-200">
                                About
                            </button>
                            <button onClick={() => scrollToSection('contact')} className="text-gray-200 hover:text-primary-500 font-medium text-left transition-colors duration-200">
                                Contact
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
