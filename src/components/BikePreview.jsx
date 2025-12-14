import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaRoad, FaArrowRight } from 'react-icons/fa';
import BookingModal from './BookingModal';

const BikePreview = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBike, setSelectedBike] = useState('');

    const handleBookClick = (bikeName) => {
        setSelectedBike(bikeName);
        setIsModalOpen(true);
    };

    // Only show first 3 bikes
    const bikes = [
        {
            name: 'Honda Activa BS6',
            variant: 'Black',
            image: '/images/activa.png',
            kmRange: 100,
            price: 499,
            extraKm: 3,
            category: 'Scooter',
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
            features: ['Fuel Efficient', 'Reliable', 'Low Maintenance']
        }
    ];

    return (
        <section id="bike-preview" className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-50">
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {bikes.map((bike, index) => (
                        <div
                            key={index}
                            className="bike-card animate-scale-in"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={bike.image}
                                    alt={bike.name}
                                    className="bike-card-image"
                                />
                                <div className="absolute top-3 left-3">
                                    <span className="inline-block px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700">
                                        {bike.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-4">
                                <h3 className="text-xl font-bold text-gray-900 mb-1">{bike.name}</h3>
                                <p className="text-sm text-gray-500 mb-3">{bike.variant}</p>

                                {/* Specs */}
                                <div className="mb-3">
                                    <div className="flex items-center text-sm text-gray-600">
                                        <FaRoad className="text-primary-600 mr-2" />
                                        <span>{bike.kmRange}km/24 hrs</span>
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="mb-3">
                                    <div className="flex flex-wrap gap-1.5">
                                        {bike.features.map((feature, idx) => (
                                            <span
                                                key={idx}
                                                className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-md"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Pricing */}
                                <div className="border-t border-gray-200 pt-3 mb-3">
                                    <div className="flex items-baseline justify-between mb-1">
                                        <div>
                                            <span className="text-2xl font-bold text-gray-900">₹{bike.price}</span>
                                            <span className="text-gray-500 text-sm ml-1">/24hrs</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Extras Section */}
                                <div className="bg-gray-50 rounded-lg p-3 mb-3">
                                    <h4 className="text-xs font-bold text-gray-700 mb-2">Extras</h4>
                                    <div className="space-y-1">
                                        <div className="flex justify-between items-center text-xs">
                                            <span className="text-gray-600">Extra km charge:</span>
                                            <span className="font-semibold text-gray-900">₹{bike.extraKm}/km</span>
                                        </div>
                                        <div className="flex justify-between items-center text-xs">
                                            <span className="text-gray-600">Extra hour charge:</span>
                                            <span className="font-semibold text-gray-900">₹50/hr</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Book Button */}
                                <button
                                    onClick={() => handleBookClick(bike.name)}
                                    className="btn-primary w-full justify-center text-sm py-2.5"
                                >
                                    <FaWhatsapp className="text-lg mr-2" />
                                    Book This Bike
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Show More Button */}
                <div className="text-center mt-12">
                    <Link
                        to="/bikes"
                        className="inline-flex items-center justify-center text-lg px-10 py-4 bg-gray-900 hover:bg-black text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        Show More Bikes
                        <FaArrowRight className="ml-3" />
                    </Link>
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

export default BikePreview;
