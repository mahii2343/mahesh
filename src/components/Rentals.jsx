import React, { useState } from 'react';
import { FaWhatsapp, FaArrowRight, FaCheckCircle, FaChargingStation, FaShieldAlt, FaMobileAlt } from 'react-icons/fa';
import PreBookingForm from './PreBookingForm';

const Rentals = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const bike = {
        name: 'LYCAS LD 1200W',
        price: '154',
        image: '/images/lycas-scooter-transparent.png',
        features: [
            '120km Range / Charge',
            'GPS Tracking Included',
            'Zero Maintenance Cost',
            '24/7 Roadside Assistance'
        ]
    };

    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-900/5 rounded-full filter blur-[120px]"></div>
            <div className="container-custom relative z-10">
                <div className="text-center mb-20">
                    <span className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20 text-primary-400 rounded-full font-semibold text-sm mb-4 uppercase tracking-widest">
                        Smart Mobility
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
                        Electric Rental
                        <span className="text-primary-500"> Simplified</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Experience the most advanced EV scooter in Chittoor. No fuel, no hassle, just pure electric performance.
                    </p>
                </div>

                <div className="bg-zinc-900/50 backdrop-blur-sm border border-white/5 rounded-[3rem] overflow-hidden group">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                        {/* Image Side */}
                        <div className="relative h-[400px] lg:h-auto bg-black/40 flex items-center justify-center p-12 overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.1)_0%,transparent_100%)]"></div>
                            <img
                                src={bike.image}
                                alt={bike.name}
                                className="relative z-10 w-full max-w-md object-contain transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute bottom-8 left-8">
                                <span className="bg-primary-500 text-black font-black px-6 py-2 rounded-full text-sm shadow-xl shadow-primary-500/20">
                                    AVAILABLE NOW
                                </span>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="p-8 md:p-16 flex flex-col justify-center">
                            <h2 className="text-4xl font-bold text-white mb-4">{bike.name}</h2>
                            <div className="flex items-baseline gap-2 mb-8">
                                <span className="text-5xl font-black text-primary-500">₹{bike.price}</span>
                                <span className="text-gray-500 text-lg">/per day</span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                                {bike.features.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <FaCheckCircle className="text-primary-500 flex-shrink-0" />
                                        <span className="text-gray-300 font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-6">
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="flex-1 bg-primary-500 hover:bg-primary-400 text-black font-black py-5 rounded-2xl transition-all duration-300 shadow-xl shadow-primary-500/10 flex items-center justify-center gap-2"
                                >
                                    Pre-book Now <FaArrowRight />
                                </button>
                                <a
                                    href="https://wa.me/7032160046"
                                    className="flex-1 bg-white/5 border border-white/10 text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-2 hover:bg-white/10 transition-all backdrop-blur-sm"
                                >
                                    <FaWhatsapp className="text-xl" /> WhatsApp Support
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Micro Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
                    <div className="p-8 bg-zinc-900/30 border border-white/5 rounded-3xl">
                        <FaChargingStation className="text-4xl text-primary-500 mb-6" />
                        <h3 className="text-xl font-bold text-white mb-2">Home Charging</h3>
                        <p className="text-gray-400">Easy home charging setup included with every monthly rental plan.</p>
                    </div>
                    <div className="p-8 bg-zinc-900/30 border border-white/5 rounded-3xl">
                        <FaShieldAlt className="text-4xl text-primary-500 mb-6" />
                        <h3 className="text-xl font-bold text-white mb-2">Fully Insured</h3>
                        <p className="text-gray-400">Comprehensive insurance coverage for a worry-free riding experience.</p>
                    </div>
                    <div className="p-8 bg-zinc-900/30 border border-white/5 rounded-3xl">
                        <FaMobileAlt className="text-4xl text-primary-500 mb-6" />
                        <h3 className="text-xl font-bold text-white mb-2">App Enabled</h3>
                        <p className="text-gray-400">Track your range, speed and location directly from our smart mobile app.</p>
                    </div>
                </div>
            </div>

            <PreBookingForm
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                bikeName={bike.name}
            />
        </section>
    );
};

export default Rentals;
