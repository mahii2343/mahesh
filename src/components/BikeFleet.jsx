import React, { useState } from 'react';
import { FaWhatsapp, FaBolt, FaTachometerAlt, FaCogs, FaCompactDisc, FaCheckCircle, FaRupeeSign } from 'react-icons/fa';
import PreBookingForm from './PreBookingForm';

const BikeFleet = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState('');

    const handleBookClick = (planName) => {
        setSelectedPlan(planName);
        setIsModalOpen(true);
    };

    return (
        <section id="bikes" className="section-padding bg-white">
            <div className="container-custom">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full font-semibold text-sm mb-4">
                        Lycas Ownership Program
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Ride, Earn & <span className="text-green-600">Own Your Bike</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        A strategic pathway for delivery professionals and daily commuters to achieve vehicle ownership.
                    </p>
                </div>

                {/* Product Showcase */}
                <div className="bg-gray-50 rounded-[40px] p-6 md:p-12 mb-20 shadow-xl border border-gray-100">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Image Side */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-green-200/50 to-transparent rounded-full filter blur-3xl opacity-70"></div>
                            <img
                                src="/images/1769976701639.jpg.jpeg"
                                alt="LYCAS (LD) 1200W"
                                loading="lazy"
                                className="relative z-10 w-full hover:scale-105 transition-transform duration-500 drop-shadow-2xl rounded-2xl"
                            />
                            <div className="absolute top-4 right-4 z-20 bg-black text-white px-6 py-2 rounded-full font-bold shadow-lg">
                                Showroom Price: ₹1,10,000/-
                            </div>
                        </div>

                        {/* Specs Side */}
                        <div>
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">LYCAS (LD) 1200W</h3>
                            <p className="text-green-600 font-semibold text-lg mb-8">High Performance Electric Scooter</p>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-green-300 transition-colors">
                                    <FaBolt className="text-green-500 text-xl mb-2" />
                                    <p className="text-xs text-gray-500 font-semibold uppercase">Motor Power</p>
                                    <p className="text-lg font-bold text-gray-900">1200W</p>
                                </div>
                                <div className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-green-300 transition-colors">
                                    <FaTachometerAlt className="text-green-500 text-xl mb-2" />
                                    <p className="text-xs text-gray-500 font-semibold uppercase">Max Speed</p>
                                    <p className="text-lg font-bold text-gray-900">50-55 Km/h</p>
                                </div>
                                <div className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-green-300 transition-colors">
                                    <FaCogs className="text-green-500 text-xl mb-2" />
                                    <p className="text-xs text-gray-500 font-semibold uppercase">Controller</p>
                                    <p className="text-lg font-bold text-gray-900">80V/72V 45Amp</p>
                                </div>
                                <div className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-green-300 transition-colors">
                                    <FaCompactDisc className="text-green-500 text-xl mb-2" />
                                    <p className="text-xs text-gray-500 font-semibold uppercase">Brake System</p>
                                    <p className="text-lg font-bold text-gray-900">Front & Rear Disc</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-2 text-gray-500 text-sm">
                                <span>• Tyre: 90-90-12</span>
                                <span>• Colour Available</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pricing Plans */}
                <div className="mb-20">
                    <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        💸 Flexible & Affordable Payment Plans
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Initial Cost Card */}
                        <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-green-100 rounded-bl-[100px] -mr-4 -mt-4"></div>
                            <h4 className="text-xl font-bold text-gray-900 mb-6 relative z-10">Initial Payment</h4>
                            <div className="space-y-4 mb-8 relative z-10">
                                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                                    <span className="text-gray-600">Down Payment</span>
                                    <span className="text-xl font-bold text-gray-900">₹15,000</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                                    <span className="text-gray-600">Processing Charges</span>
                                    <span className="text-xl font-bold text-gray-900">₹5,000</span>
                                </div>
                                <div className="bg-green-50 p-3 rounded-lg text-center text-green-800 text-sm font-semibold">
                                    One-time payment to start
                                </div>
                            </div>
                            <button
                                onClick={() => handleBookClick('One-time Payment')}
                                className="w-full py-3 rounded-xl bg-gray-900 text-white font-bold hover:bg-gray-800 transition-colors"
                            >
                                Get Started
                            </button>
                        </div>

                        {/* Monthly Plan Card */}
                        <div className="bg-white rounded-3xl p-8 border-2 border-green-500 shadow-2xl scale-105 relative overflow-hidden transform">
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-green-600"></div>
                            <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                Most Popular
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2">Monthly Plan</h4>
                            <div className="flex items-baseline mb-6">
                                <span className="text-4xl font-extrabold text-gray-900">₹5,500</span>
                                <span className="text-gray-500 ml-2">/month</span>
                            </div>

                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center text-gray-700">
                                    <FaCheckCircle className="text-green-500 mr-3" />
                                    <span>Full ownership after 10 months</span>
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <FaCheckCircle className="text-green-500 mr-3" />
                                    <span>Get 2 weeks free ride</span>
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <FaCheckCircle className="text-green-500 mr-3" />
                                    <span>Free 1-month recharge</span>
                                </li>
                            </ul>

                            <button
                                onClick={() => handleBookClick('Monthly Rent Plan')}
                                className="w-full py-4 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white font-bold hover:shadow-lg hover:scale-[1.02] transition-all"
                            >
                                <FaWhatsapp className="inline mr-2 text-xl" /> Choose Monthly
                            </button>
                        </div>

                        {/* Daily Plan Card */}
                        <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300">
                            <h4 className="text-xl font-bold text-gray-900 mb-2">Daily Option</h4>
                            <div className="flex items-baseline mb-6">
                                <span className="text-4xl font-extrabold text-gray-900">₹199</span>
                                <span className="text-gray-500 ml-2">/day</span>
                            </div>

                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center text-gray-700">
                                    <FaCheckCircle className="text-green-500 mr-3" />
                                    <span>Pay small, earn big</span>
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <FaCheckCircle className="text-green-500 mr-3" />
                                    <span>300 days tenure</span>
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <FaCheckCircle className="text-green-500 mr-3" />
                                    <span>Ownership at end of term</span>
                                </li>
                            </ul>

                            <button
                                onClick={() => handleBookClick('Daily Plan')}
                                className="w-full py-3 rounded-xl bg-gray-900 text-white font-bold hover:bg-gray-800 transition-colors"
                            >
                                Choose Daily
                            </button>
                        </div>
                    </div>
                </div>

                {/* Additional Call to Action */}
                <div className="bg-gradient-to-r from-green-600 to-teal-700 rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl">
                    <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to Own Your Bike?</h3>
                    <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                        Don't just rent. Invest in your future with LycasGo's rent-to-own scheme.
                        Join hundreds of happy riders today!
                    </p>
                    <button
                        onClick={() => handleBookClick('General Inquiry')}
                        className="inline-flex items-center px-8 py-4 bg-white text-green-700 font-bold rounded-full hover:bg-gray-100 transition-all transform hover:-translate-y-1 shadow-lg"
                    >
                        <FaWhatsapp className="mr-2 text-2xl" /> Contact Us Now
                    </button>
                </div>
            </div>

            {/* Pre-booking Form */}
            <PreBookingForm
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                bikeName={`Lycas LD 1200W - ${selectedPlan}`}
            />
        </section>
    );
};

export default BikeFleet;
