import React, { useState, useEffect } from 'react';
import { FaTimes, FaWhatsapp, FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const BookingModal = ({ isOpen, onClose, bikeName }) => {
    const [pickupDate, setPickupDate] = useState('');
    const [pickupTime, setPickupTime] = useState('11:00');
    const [dropoffDate, setDropoffDate] = useState('');
    const [dropoffTime, setDropoffTime] = useState('11:00');
    const [location, setLocation] = useState('Hyderabad');

    // Calculate duration in days
    const calculateDuration = () => {
        if (pickupDate && dropoffDate) {
            const pickup = new Date(pickupDate);
            const dropoff = new Date(dropoffDate);
            const diffTime = dropoff - pickup;
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            return diffDays > 0 ? diffDays : 1;
        }
        return 1;
    };

    // Set default dates on mount
    useEffect(() => {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);

        setPickupDate(formatDateForInput(today));
        setDropoffDate(formatDateForInput(tomorrow));
    }, [isOpen]);

    const formatDateForInput = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const formatDateForDisplay = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-IN', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    };

    const handleBookNow = () => {
        const duration = calculateDuration();
        const message = encodeURIComponent(
            `Hi! I would like to book the ${bikeName}.\n\n` +
            `📅 Pickup: ${formatDateForDisplay(pickupDate)} at ${pickupTime}\n` +
            `📅 Dropoff: ${formatDateForDisplay(dropoffDate)} at ${dropoffTime}\n` +
            `📍 Location: ${location}\n` +
            `⏱️ Duration: ${duration} day(s)\n\n` +
            `Please confirm availability.`
        );
        const whatsappLink = `https://wa.me/7032160046?text=${message}`;
        window.open(whatsappLink, '_blank');
        onClose();
    };

    const timeOptions = [];
    for (let hour = 7; hour <= 22; hour++) {
        const hourStr = hour.toString().padStart(2, '0');
        timeOptions.push(`${hourStr}:00`);
        if (hour < 22) {
            timeOptions.push(`${hourStr}:30`);
        }
    }

    const locations = [
        'Hyderabad',
        'Secunderabad',
        'Gachibowli',
        'Hitech City',
        'Madhapur',
        'Kondapur',
        'Kukatpally',
        'Ameerpet',
        'Jubilee Hills',
        'Banjara Hills'
    ];

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-scale-in">
                {/* Header */}
                <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-4 flex items-center justify-between">
                    <h2 className="text-xl font-bold text-white">Select Date & Time</h2>
                    <button
                        onClick={onClose}
                        className="text-white/80 hover:text-white transition-colors"
                    >
                        <FaTimes className="text-xl" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6">
                    {/* Duration Display */}
                    <div className="mb-6">
                        <p className="text-gray-700 font-semibold">
                            Ride Duration - ({calculateDuration()} day{calculateDuration() > 1 ? 's' : ''})
                        </p>
                    </div>

                    {/* Pickup Section */}
                    <div className="mb-6">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Pickup
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="relative">
                                <input
                                    type="date"
                                    value={pickupDate}
                                    onChange={(e) => setPickupDate(e.target.value)}
                                    min={formatDateForInput(new Date())}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-700"
                                />
                            </div>
                            <div className="relative">
                                <select
                                    value={pickupTime}
                                    onChange={(e) => setPickupTime(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-700 appearance-none bg-white"
                                >
                                    {timeOptions.map((time) => (
                                        <option key={`pickup-${time}`} value={time}>
                                            {time.split(':')[0] > 12
                                                ? `${time.split(':')[0] - 12}:${time.split(':')[1]} PM`
                                                : `${time.split(':')[0]}:${time.split(':')[1]} AM`}
                                        </option>
                                    ))}
                                </select>
                                <FaClock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                            </div>
                        </div>
                    </div>

                    {/* Dropoff Section */}
                    <div className="mb-6">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Dropoff
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="relative">
                                <input
                                    type="date"
                                    value={dropoffDate}
                                    onChange={(e) => setDropoffDate(e.target.value)}
                                    min={pickupDate || formatDateForInput(new Date())}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-700"
                                />
                            </div>
                            <div className="relative">
                                <select
                                    value={dropoffTime}
                                    onChange={(e) => setDropoffTime(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-700 appearance-none bg-white"
                                >
                                    {timeOptions.map((time) => (
                                        <option key={`dropoff-${time}`} value={time}>
                                            {time.split(':')[0] > 12
                                                ? `${time.split(':')[0] - 12}:${time.split(':')[1]} PM`
                                                : `${time.split(':')[0]}:${time.split(':')[1]} AM`}
                                        </option>
                                    ))}
                                </select>
                                <FaClock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                            </div>
                        </div>
                    </div>

                    {/* Location Section */}
                    <div className="mb-8">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Pickup Location
                        </label>
                        <div className="relative">
                            <select
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-700 appearance-none bg-white"
                            >
                                {locations.map((loc) => (
                                    <option key={loc} value={loc}>{loc}</option>
                                ))}
                            </select>
                            <FaMapMarkerAlt className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                        </div>
                    </div>

                    {/* Book Now Button */}
                    <button
                        onClick={handleBookNow}
                        className="w-full btn-primary justify-center py-4 text-lg"
                    >
                        <FaWhatsapp className="text-2xl mr-3" />
                        Book on WhatsApp
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
