import React from 'react';
import { FaCheckCircle, FaMotorcycle, FaShieldAlt, FaClock } from 'react-icons/fa';

const About = () => {
    const features = [
        {
            icon: <FaMotorcycle className="text-4xl text-primary-600" />,
            title: 'Wide Selection',
            description: 'Choose from scooters to sports bikes and adventure motorcycles'
        },
        {
            icon: <FaShieldAlt className="text-4xl text-accent-600" />,
            title: 'Well Maintained',
            description: 'Regular service and safety checks on all vehicles'
        },
        {
            icon: <FaClock className="text-4xl text-primary-600" />,
            title: 'Flexible Hours',
            description: 'Open 7 AM to 10 PM daily for your convenience'
        },
        {
            icon: <FaCheckCircle className="text-4xl text-accent-600" />,
            title: 'Easy Booking',
            description: 'Quick booking process via WhatsApp'
        }
    ];

    return (
        <section id="about" className="section-padding relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-black z-0"></div>
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary-900/20 rounded-full filter blur-[100px] z-0"></div>

            <div className="container-custom relative z-10">
                {/* About LycasGo */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                    <div className="order-2 md:order-1">
                        <span className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20 text-primary-400 rounded-full font-semibold text-sm mb-4">
                            About Us
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            About <span className="text-primary-500">LycasGo</span>
                        </h2>
                        <h3 className="text-xl font-medium text-gray-300 mb-8 italic">"Ride the Future. Go Electric."</h3>

                        <div className="flex flex-col space-y-4">
                            <a href="https://www.lycasgo.in" className="inline-flex items-center text-primary-500 font-bold hover:text-primary-400 transition-colors text-lg">
                                Visit www.lycasgo.in <span className="ml-2">→</span>
                            </a>
                        </div>
                    </div>

                    <div className="order-1 md:order-2">
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary-500 rounded-3xl transform rotate-3 opacity-20 filter blur-lg"></div>
                            <img
                                src="/images/lycas-about-city.png"
                                alt="LycasGo Future City"
                                loading="lazy"
                                className="relative rounded-3xl shadow-2xl border border-white/10 w-full hover:scale-[1.02] transition-transform duration-500"
                            />
                        </div>
                    </div>
                </div>

                {/* Why Riders Choose Lycas */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Why Riders Choose <span className="text-primary-500">Lycas</span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-4xl mx-auto mb-12">
                        Lycas Bike Rental provides a strategic pathway for delivery professionals and daily commuters to achieve vehicle ownership.
                        Our model empowers riders to generate immediate income without the burden of an upfront purchase—culminating in full ownership of the asset.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="card p-8 text-left border-l-4 border-primary-500 hover:shadow-xl hover:shadow-primary-500/10 transition-all bg-zinc-900">
                            <div className="w-14 h-14 bg-primary-500/10 text-primary-500 rounded-full flex items-center justify-center text-2xl mb-6">
                                💸
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Flexible & Affordable</h3>
                            <p className="text-gray-400">
                                No need to buy a bike upfront. Easy daily or monthly payment plans perfect for delivery partners.
                            </p>
                        </div>
                        <div className="card p-8 text-left border-l-4 border-primary-500 hover:shadow-xl hover:shadow-primary-500/10 transition-all bg-zinc-900">
                            <div className="w-14 h-14 bg-primary-500/10 text-primary-500 rounded-full flex items-center justify-center text-2xl mb-6">
                                🚀
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Earn While You Ride</h3>
                            <p className="text-gray-400">
                                Perfect for Zepto, Blinkit, Zomato, Swiggy, Amazon, and Flipkart partners. Low risk, high convenience.
                            </p>
                        </div>
                        <div className="card p-8 text-left border-l-4 border-primary-500 hover:shadow-xl hover:shadow-primary-500/10 transition-all bg-zinc-900">
                            <div className="w-14 h-14 bg-primary-500/10 text-primary-500 rounded-full flex items-center justify-center text-2xl mb-6">
                                🎁
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Path to Ownership</h3>
                            <p className="text-gray-400">
                                Ride daily and move closer to ownership. Bike becomes yours after 10 months. Free 1-month recharge included.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Key Benefits List */}
                <div className="bg-zinc-900 border border-white/10 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/10 rounded-full filter blur-[60px]"></div>
                    <h3 className="text-2xl font-bold mb-8 text-center md:text-left relative z-10">Key Benefits for Riders</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                        {[
                            "No need to buy a bike upfront",
                            "Perfect for delivery partners (Zepto, Blinkit, Zomato, etc.)",
                            "Bike ownership after 10 months",
                            "Simple process & quick onboarding",
                            "Easy daily or monthly payments",
                            "Earn while you ride",
                            "Free 1-month recharge",
                            "Low risk, high convenience"
                        ].map((benefit, index) => (
                            <div key={index} className="flex items-center space-x-3">
                                <FaCheckCircle className="text-primary-500 flex-shrink-0" />
                                <span className="text-gray-300">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
