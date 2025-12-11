import React, { useState } from 'react';
import { FaWhatsapp, FaRoad, FaRupeeSign, FaGasPump } from 'react-icons/fa';
import BookingModal from './BookingModal';

const BikeFleet = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBike, setSelectedBike] = useState('');

    const handleBookClick = (bikeName) => {
        setSelectedBike(bikeName);
        setIsModalOpen(true);
    };

    const bikes = [
        {
            name: 'Honda Activa BS6',
            variant: 'Black',
            image: '/images/activa.png',
            kmRange: 100,
            price: 499,
            extraKm: 3,
            category: 'Scooter',
            color: 'Black',
            features: ['BS6 Engine', 'Fuel Efficient', 'Easy to Ride']
        },
        {
            name: 'TVS Jupiter 125',
            variant: 'Cement Grey',
            image: '/images/jupiter.png',
            kmRange: 100,
            price: 499,
            extraKm: 3,
            category: 'Scooter',
            color: 'Cement',
            features: ['125cc Engine', 'Comfortable Ride', 'Spacious Storage']
        },
        {
            name: 'Hero HF Deluxe',
            variant: 'Black & Grey',
            image: '/images/hf-deluxe.png',
            kmRange: 100,
            price: 499,
            extraKm: 3,
            category: 'Commuter',
            color: 'Black and Grey',
            features: ['Fuel Efficient', 'Reliable', 'Low Maintenance']
        },
        {
            name: 'Ather Rizta',
            variant: 'Violet',
            image: '/images/ather.png',
            kmRange: 80,
            price: 599,
            extraKm: 3,
            category: 'Electric Scooter',
            color: 'Violet',
            features: ['Electric', 'Fast Charging', 'Smart Features'],
            isElectric: true
        },
        {
            name: 'Yamaha R15 V3',
            variant: 'Black',
            image: '/images/r15.png',
            kmRange: 120,
            price: 899,
            extraKm: 4,
            category: 'Sport Bike',
            color: 'Black',
            features: ['155cc Engine', 'Racing Style', 'High Performance'],
            isPremium: true
        },
        {
            name: 'Royal Enfield Himalayan',
            variant: 'Black',
            image: '/images/himalayan.png',
            kmRange: 130,
            price: 1099,
            extraKm: 4,
            category: 'Adventure Bike',
            color: 'Black',
            features: ['411cc Engine', 'Off-Road Ready', 'Long Distance'],
            isPremium: true
        }
    ];

    return (
        <section id="bikes" className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-50">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full font-semibold text-sm mb-4">
                        Our Fleet
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Choose Your Perfect
                        <span className="gradient-text"> Ride</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        From scooters to sports bikes, we have a wide range of well-maintained bikes
                        to suit your needs and budget.
                    </p>
                </div>

                {/* Bikes Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {bikes.map((bike, index) => (
                        <div
                            key={index}
                            className="bike-card animate-scale-in"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Badge */}
                            {(bike.isPremium || bike.isElectric) && (
                                <div className="absolute top-4 right-4 z-10">
                                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white ${bike.isPremium ? 'bg-gradient-to-r from-yellow-500 to-orange-500' : 'bg-gradient-to-r from-green-500 to-emerald-500'
                                        }`}>
                                        {bike.isPremium ? '⭐ PREMIUM' : '⚡ ELECTRIC'}
                                    </span>
                                </div>
                            )}

                            {/* Image */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={bike.image}
                                    alt={bike.name}
                                    className="bike-card-image"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700">
                                        {bike.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-1">{bike.name}</h3>
                                <p className="text-sm text-gray-500 mb-4">{bike.variant}</p>

                                {/* Specs */}
                                <div className="grid grid-cols-2 gap-3 mb-4">
                                    <div className="flex items-center text-sm text-gray-600">
                                        <FaRoad className="text-primary-600 mr-2" />
                                        <span>{bike.kmRange} km included</span>
                                    </div>
                                    <div className="flex items-center text-sm text-gray-600">
                                        <FaGasPump className="text-accent-600 mr-2" />
                                        <span>₹{bike.extraKm}/km extra</span>
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="mb-4">
                                    <div className="flex flex-wrap gap-2">
                                        {bike.features.map((feature, idx) => (
                                            <span
                                                key={idx}
                                                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Pricing */}
                                <div className="border-t border-gray-200 pt-4 mb-4">
                                    <div className="flex items-baseline justify-between mb-2">
                                        <div>
                                            <span className="text-3xl font-bold text-gray-900">₹{bike.price}</span>
                                            <span className="text-gray-500 text-sm ml-1">/24hrs</span>
                                        </div>
                                    </div>
                                    <p className="text-xs text-gray-500">
                                        Extra km: ₹{bike.extraKm}/km + taxes applicable
                                    </p>
                                </div>

                                {/* Book Button */}
                                <button
                                    onClick={() => handleBookClick(bike.name)}
                                    className="btn-primary w-full justify-center"
                                >
                                    <FaWhatsapp className="text-xl mr-2" />
                                    Book This Bike
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Info */}
                <div className="mt-16 bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12 border border-primary-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">📋 Rental Terms</h3>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start">
                                    <span className="text-primary-600 mr-2">•</span>
                                    <span>All prices are for 24-hour rental periods</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary-600 mr-2">•</span>
                                    <span>Helmet provided free with every rental</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary-600 mr-2">•</span>
                                    <span>Valid driving license required</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary-600 mr-2">•</span>
                                    <span>Fuel charges extra as per actual consumption</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">💳 Extra KM Charges</h3>
                            <div className="space-y-3">
                                <div className="bg-white rounded-xl p-4">
                                    <p className="font-semibold text-gray-900 mb-1">Activa, Jupiter, HF Deluxe, Ather</p>
                                    <p className="text-sm text-gray-600">₹3/km + taxes applicable</p>
                                </div>
                                <div className="bg-white rounded-xl p-4">
                                    <p className="font-semibold text-gray-900 mb-1">R15 V3, Himalayan</p>
                                    <p className="text-sm text-gray-600">₹4/km + taxes applicable</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Booking Modal */}
            <BookingModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                bikeName={selectedBike}
            />
        </section>
    );
};

export default BikeFleet;
