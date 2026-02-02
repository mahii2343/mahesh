import React, { useState } from 'react';
import { FaWhatsapp, FaRoad, FaPhone } from 'react-icons/fa';
import PreBookingForm from './PreBookingForm';

const AllVehicles = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBike, setSelectedBike] = useState('');

    const handleBookClick = (bikeName) => {
        setSelectedBike(bikeName);
        setIsModalOpen(true);
    };

    const phoneNumber = '9515567932';

    // EV focused fleet
    const bikes = [
        {
            name: 'LYCAS LD 1200W',
            variant: 'Midnight Edition',
            image: '/images/lycas_thunder_black.jpg',
            kmRange: 120,
            price: 154,
            category: 'Electric Scooter',
            features: ['Ownership Path', 'GPS Tracking', 'Fast Charging'],
            isElectric: true
        },
        {
            name: 'LYCAS LD 1200W',
            variant: 'Eco Green',
            image: '/images/lycas-hero.png',
            kmRange: 120,
            price: 154,
            category: 'Electric Scooter',
            features: ['Maintenance Inc.', 'Insurance Incl.', 'Zero Emissions'],
            isElectric: true
        },
        {
            name: 'LYCAS PRO (Coming Soon)',
            variant: 'Stealth Grey',
            image: '/images/lycas-hero.png',
            kmRange: 150,
            price: 'TBA',
            category: 'High Performance EV',
            features: ['ABS Braking', 'Smart Connectivity', 'High Torque'],
            isPremium: true,
            isElectric: true
        }
    ];

    return (
        <section className="py-24 bg-black relative overflow-hidden mt-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(34,197,94,0.05)_0%,transparent_50%)]"></div>
            <div className="container-custom relative z-10">
                <div className="text-center mb-20">
                    <span className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20 text-primary-400 rounded-full font-semibold text-sm mb-4 uppercase tracking-widest">
                        Complete Fleet
                    </span>
                    <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
                        The LycasGo
                        <span className="text-primary-500"> EV Collection</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto italic">
                        "Your journey to ownership starts with a single charge."
                    </p>
                </div>

                {/* Bikes Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {bikes.map((bike, index) => (
                        <div
                            key={index}
                            className="bg-zinc-900/50 backdrop-blur-sm border border-white/5 rounded-[2rem] overflow-hidden hover:border-primary-500/30 transition-all duration-500 group relative"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Badge */}
                            {bike.isElectric && (
                                <div className="absolute top-6 right-6 z-10">
                                    <span className="inline-block px-3 py-1 bg-primary-500 text-black text-[10px] font-black rounded-full shadow-lg shadow-primary-500/20">
                                        ⚡ ELECTRIC
                                    </span>
                                </div>
                            )}

                            {/* Image */}
                            <div className="relative overflow-hidden h-64 bg-black/40 p-8 flex items-center justify-center">
                                <img
                                    src={bike.image}
                                    alt={bike.name}
                                    loading="lazy"
                                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-6 left-6">
                                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-gray-400 backdrop-blur-md uppercase tracking-widest">
                                        {bike.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-1">{bike.name}</h3>
                                        <p className="text-sm text-primary-500 font-medium">{bike.variant}</p>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-3xl font-black text-white">{typeof bike.price === 'number' ? `₹${bike.price}` : bike.price}</span>
                                        {typeof bike.price === 'number' && <span className="text-gray-500 text-xs block">/day</span>}
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {bike.features.map((feature, idx) => (
                                        <span
                                            key={idx}
                                            className="text-[10px] bg-white/5 text-gray-400 px-3 py-1.5 rounded-lg border border-white/5"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-4">
                                    <button
                                        onClick={() => handleBookClick(bike.name)}
                                        className="flex-1 bg-primary-500 hover:bg-primary-400 text-black font-black py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-primary-500/10"
                                    >
                                        <FaWhatsapp className="text-xl" />
                                        <span>RESERVE</span>
                                    </button>
                                    <a
                                        href={`tel:${phoneNumber}`}
                                        className="w-14 h-14 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl flex items-center justify-center transition-all duration-300"
                                        title="Call Now"
                                    >
                                        <FaPhone className="text-xl" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
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

export default AllVehicles;
