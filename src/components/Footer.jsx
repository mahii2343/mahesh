import React from 'react';
import { FaWhatsapp, FaPhone, FaEnvelope, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-gradient-to-br from-dark-800 to-dark-900 text-white">
            <div className="container-custom section-padding">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="mb-4">
                            <img
                                src="/images/logo.png"
                                alt="Rent A Ride Logo"
                                className="h-20 w-auto object-contain"
                            />
                        </div>
                        <p className="text-gray-400 mb-6">
                            Your trusted partner for affordable and convenient bike rentals in Hyderabad.
                            Ride safe, ride smart!
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://wa.me/7032160046"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-200"
                            >
                                <FaWhatsapp className="text-xl" />
                            </a>
                            <a
                                href="https://www.instagram.com/_rentaride_"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:from-pink-600 hover:to-purple-700 transition-colors duration-200"
                            >
                                <FaInstagram className="text-xl" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-3">
                            <li>
                                <button
                                    onClick={() => scrollToSection('home')}
                                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                                >
                                    Home
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('about')}
                                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                                >
                                    About Us
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('services')}
                                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                                >
                                    Services
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('bikes')}
                                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                                >
                                    Our Bikes
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('contact')}
                                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                                >
                                    Contact
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">Our Services</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li className="flex items-start">
                                <span className="text-primary-500 mr-2">•</span>
                                Self Driving Bike Rentals
                            </li>
                            <li className="flex items-start">
                                <span className="text-primary-500 mr-2">•</span>
                                24-Hour Rental Plans
                            </li>
                            <li className="flex items-start">
                                <span className="text-primary-500 mr-2">•</span>
                                Free Helmet Included
                            </li>
                            <li className="flex items-start">
                                <span className="text-primary-500 mr-2">•</span>
                                Well-Maintained Fleet
                            </li>
                            <li className="flex items-start">
                                <span className="text-primary-500 mr-2">•</span>
                                24/7 Customer Support
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <FaPhone className="text-primary-500 mt-1 mr-3 flex-shrink-0" />
                                <div>
                                    <a href="tel:7032160046" className="text-gray-400 hover:text-white transition-colors duration-200 block">
                                        7032160046
                                    </a>
                                    <a href="tel:7842560046" className="text-gray-400 hover:text-white transition-colors duration-200 block">
                                        7842560046
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <FaEnvelope className="text-primary-500 mt-1 mr-3 flex-shrink-0" />
                                <a href="mailto:rentaride111@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-200">
                                    rentaride111@gmail.com
                                </a>
                            </li>
                            <li className="flex items-start">
                                <FaInstagram className="text-primary-500 mt-1 mr-3 flex-shrink-0" />
                                <a href="https://www.instagram.com/_rentaride_" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                                    @_rentaride_
                                </a>
                            </li>
                            <li className="flex items-start">
                                <FaMapMarkerAlt className="text-primary-500 mt-1 mr-3 flex-shrink-0" />
                                <a href="https://maps.app.goo.gl/jtzGAN7bGRheCjNV8" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                                    Chittoor, Andhra Pradesh
                                </a>
                            </li>
                        </ul>
                        <div className="mt-6 bg-gradient-to-r from-primary-600/20 to-accent-600/20 border border-primary-500/30 rounded-xl p-4">
                            <p className="text-sm font-semibold text-white mb-1">Business Hours</p>
                            <p className="text-sm text-gray-300">7:00 AM - 10:00 PM Daily</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm text-center md:text-left">
                            © {currentYear} Rent A Ride. All rights reserved. Made with ❤️ in Hyderabad.
                        </p>
                        <div className="flex space-x-6 text-sm">
                            <button className="text-gray-400 hover:text-white transition-colors duration-200">
                                Privacy Policy
                            </button>
                            <button className="text-gray-400 hover:text-white transition-colors duration-200">
                                Terms of Service
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
