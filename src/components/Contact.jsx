import React, { useState } from 'react';
import { FaWhatsapp, FaPhone, FaEnvelope, FaInstagram, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        bike: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const message = encodeURIComponent(
            `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nInterested in: ${formData.bike}\nMessage: ${formData.message}`
        );
        window.open(`https://wa.me/7032160046?text=${message}`, '_blank');
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const contactInfo = [
        {
            icon: <FaPhone className="text-2xl" />,
            title: 'Call Us',
            details: ['7032160046', '7842560046'],
            link: 'tel:7032160046',
            gradient: 'from-primary-500 to-primary-700'
        },
        {
            icon: <FaWhatsapp className="text-2xl" />,
            title: 'WhatsApp',
            details: ['Quick booking & support' , "9959761403"],
            link: 'https://wa.me/7032160046',
            gradient: 'from-green-500 to-green-700'
        },
        {
            icon: <FaEnvelope className="text-2xl" />,
            title: 'Email',
            details: ['support@lycasgo.com'],
            link: 'mailto:support@lycasgo.com',
            gradient: 'from-accent-500 to-accent-700'
        },
        {
            icon: <FaInstagram className="text-2xl" />,
            title: 'Instagram',
            details: ['@lycasgo_official'],
            link: 'https://www.instagram.com/lycasgo_official',
            gradient: 'from-pink-500 to-purple-700'
        }
    ];

    return (
        <section id="contact" className="section-padding bg-black relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-900/10 rounded-full filter blur-[120px] z-0"></div>

            <div className="container-custom relative z-10">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20 text-primary-400 rounded-full font-semibold text-sm mb-4">
                        Get In Touch
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Ready to
                        <span className="text-primary-500"> Start Your Journey?</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Contact us today to book your EV scooter or learn more about our rent-to-own plans.
                    </p>
                </div>

                {/* Contact Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {contactInfo.map((contact, index) => (
                        <a
                            key={index}
                            href={contact.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card hover-lift animate-scale-in group"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className={`bg-gradient-to-br ${contact.gradient} p-6 text-white`}>
                                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                    {contact.icon}
                                </div>
                                <h3 className="text-lg font-bold mb-2">{contact.title}</h3>
                                {contact.details.map((detail, idx) => (
                                    <p key={idx} className="text-white/90 text-sm">{detail}</p>
                                ))}
                            </div>
                        </a>
                    ))}
                </div>

                {/* Main Contact Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="card p-8 bg-zinc-900 border border-white/5">
                        <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="input-primary w-full"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="input-primary w-full"
                                    placeholder="Enter your phone number"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="input-primary w-full"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-300 mb-2">EV Scooter Choice</label>
                                <select
                                    name="bike"
                                    value={formData.bike}
                                    onChange={handleChange}
                                    className="input-primary w-full bg-zinc-800 border-zinc-700 text-white"
                                >
                                    <option value="">Select a model</option>
                                    <option value="LYCAS LD 1200W">LYCAS (LD) 1200W</option>
                                    <option value="Monthly Subscription">Monthly Subscription Plan</option>
                                    <option value="Daily Rental">Daily Rental Plan</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="input-primary w-full"
                                    placeholder="Tell us about your rental needs..."
                                ></textarea>
                            </div>
                            <button type="submit" className="btn-primary w-full justify-center">
                                <FaWhatsapp className="text-xl mr-2" />
                                Send via WhatsApp
                            </button>
                        </form>
                    </div>

                    {/* Business Information */}
                    <div className="space-y-6">
                        {/* Business Hours */}
                        <div className="card p-8">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mr-4">
                                    <FaClock className="text-2xl text-primary-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">Business Hours</h3>
                                    <p className="text-sm text-gray-400">Available all week</p>
                                </div>
                            </div>
                            <div className="bg-primary-500/5 rounded-xl p-6 border border-primary-500/20">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="font-semibold text-white">Monday - Sunday</span>
                                    <span className="text-primary-500 font-bold">7:00 AM - 10:00 PM</span>
                                </div>
                                <p className="text-sm text-gray-600">Extended hours for your convenience</p>
                            </div>
                        </div>

                        {/* Quick Contact */}
                        <div className="card p-8 bg-gradient-to-br from-zinc-900 to-black text-white border-primary-500/20">
                            <h3 className="text-2xl font-bold mb-4 text-primary-500">Need Immediate Assistance?</h3>
                            <p className="text-gray-300 mb-4">
                                Welcome to LycasGo! Your eco-friendly mobility partner.
                                We're here to help you ride, earn, and own your EV scooter.
                            </p>
                            <p className="text-gray-300 mb-6">
                                Our team is ready to assist you. Contact us and start your journey today!
                            </p>
                            <div className="space-y-3">
                                <a
                                    href="https://wa.me/7032160046?text=Hi%20LycasGo!%0A%0AI%20need%20immediate%20assistance%20with%20EV%20rental.%20Please%20help%20me%20with%20the%20booking%20process."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center bg-white text-primary-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                                >
                                    <FaWhatsapp className="text-2xl mr-3" />
                                    Chat on WhatsApp
                                </a>
                                <a
                                    href="tel:7032160046"
                                    className="flex items-center justify-center bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/30"
                                >
                                    <FaPhone className="text-xl mr-3" />
                                    Call: 7032160046
                                </a>
                            </div>
                        </div>

                        {/* Location Notice */}
                        <div className="card p-6 bg-gray-50 border border-gray-200">
                            <div className="flex items-start">
                                <FaMapMarkerAlt className="text-primary-600 text-xl mt-1 mr-3 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">Service Area</h4>
                                    <p className="text-sm text-gray-600">
                                        We provide bike rental services across Chittoor. Contact us for delivery locations.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
