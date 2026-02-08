import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaRoad, FaArrowRight } from 'react-icons/fa';
import PreBookingForm from './PreBookingForm';

const BikePreview = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBike, setSelectedBike] = useState('');

    const handleBookClick = (bikeName) => {
        setSelectedBike(bikeName);
        setIsModalOpen(true);
    };

    // EV focused preview
    const bikes = [
        {
            name: 'LYCAS LD 1200W',
            variant: 'Thunder Black',
            image: '/images/lycas_thunder_black.jpg',
            kmRange: 120,
            price: 199,
            category: 'Electric Scooter',
            features: ['Ownership Path', 'GPS Tracking', 'Fast Charging'],
            isElectric: true
        },
        {
            name: 'LYCAS LD 1200W',
            variant: 'Neon Green',
            image: '/images/lycas_thunder_black.jpg',
            kmRange: 120,
            price: 199,
            category: 'Electric Scooter',
            features: ['Eco-Friendly', 'Maintenance Inc.', 'Insurance Incl.'],
            isElectric: true
        }
    ];

    return (
        <section id="bike-preview" className="py-24 bg-black relative overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary-900/5 rounded-full filter blur-[120px]"></div>
            <div className="container-custom relative z-10">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20 text-primary-400 rounded-full font-semibold text-sm mb-4 uppercase tracking-widest">
                        Available Now
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Featured
                        <span className="text-primary-500"> EV Options</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Explore our high-performance electric scooters designed for the modern rider.
                    </p>
                </div>

                {/* Horizontal Scrolling Bikes */}
                <div className="relative">
                    <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide" style={{ scrollBehavior: 'smooth' }}>
                        {bikes.map((bike, index) => (
                            <div
                                key={index}
                                className="bike-card flex-shrink-0 w-[300px] md:w-[350px] snap-start animate-scale-in bg-zinc-900 border border-white/5 rounded-3xl overflow-hidden hover:border-primary-500/30 transition-all duration-500 group"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Image */}
                                <div className="relative overflow-hidden h-56 bg-black/40 flex items-center justify-center p-6">
                                    <img
                                        src={bike.image}
                                        alt={bike.name}
                                        loading="lazy"
                                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="inline-block px-3 py-1 bg-primary-500 text-black text-[10px] font-bold rounded-full uppercase tracking-tighter shadow-lg shadow-primary-500/20">
                                            {bike.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-1">{bike.name}</h3>
                                            <p className="text-sm text-primary-500 font-medium">{bike.variant}</p>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-2xl font-black text-white">₹{bike.price}</span>
                                            <span className="text-gray-500 text-xs block">/day</span>
                                        </div>
                                    </div>

                                    {/* Specs */}
                                    <div className="flex items-center gap-4 mb-6 py-4 border-y border-white/5">
                                        <div className="flex items-center text-sm text-gray-400">
                                            <FaRoad className="text-primary-500 mr-2" />
                                            <span>{bike.kmRange}km Range</span>
                                        </div>
                                    </div>

                                    {/* Features */}
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {bike.features.map((feature, idx) => (
                                            <span
                                                key={idx}
                                                className="text-[10px] bg-white/5 text-gray-300 px-3 py-1 rounded-full border border-white/5"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Book Button */}
                                    <button
                                        onClick={() => handleBookClick(bike.name)}
                                        className="btn-primary w-full py-4 text-sm font-bold shadow-lg shadow-primary-500/10 hover:shadow-primary-500/30 transition-all duration-300"
                                    >
                                        <FaWhatsapp className="text-lg mr-2" />
                                        Secure This Ride
                                    </button>
                                </div>
                            </div>
                        ))}

                        {/* View More Card */}
                        <Link
                            to="/bikes"
                            className="flex-shrink-0 w-[300px] md:w-[350px] snap-start"
                        >
                            <div className="h-full flex flex-col items-center justify-center p-8 bg-zinc-900 border border-white/5 rounded-3xl hover:border-primary-500/30 transition-all duration-500 group min-h-[500px]">
                                <div className="w-20 h-20 bg-primary-500/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <FaArrowRight className="text-3xl text-primary-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">View Full Fleet</h3>
                                <p className="text-gray-400 text-center mb-8">
                                    Explore our entire collection of sustainable EV solutions.
                                </p>
                                <span className="text-primary-500 font-bold flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                                    Explore More <FaArrowRight />
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Pre-booking Form */}
            <PreBookingForm
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                bikeName={selectedBike || 'LYCAS LD 1200W'}
            />
        </section>
    );
};

export default BikePreview;
