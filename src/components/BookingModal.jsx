import React, { useState, useEffect } from 'react';
import { FaTimes, FaWhatsapp, FaCalendarAlt, FaClock, FaMapMarkerAlt, FaCheckCircle, FaPhone } from 'react-icons/fa';

const BookingModal = ({ isOpen, onClose, bikeName }) => {
    const [pickupDate, setPickupDate] = useState('');
    const [pickupTime, setPickupTime] = useState('11:00');
    const [dropoffDate, setDropoffDate] = useState('');
    const [dropoffTime, setDropoffTime] = useState('11:00');
    const [location, setLocation] = useState('Chittoor');
    const [destination, setDestination] = useState('');
    const [showTerms, setShowTerms] = useState(false);
    const [acceptedTerms, setAcceptedTerms] = useState(false);

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
        setShowTerms(false);
        setAcceptedTerms(false);
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
        if (!showTerms) {
            // Validate destination is filled
            if (!destination || destination.trim() === '') {
                alert('Please enter your destination.');
                return;
            }
            setShowTerms(true);
            return;
        }

        if (!acceptedTerms) {
            alert('Please accept the terms and conditions to proceed.');
            return;
        }

        const duration = calculateDuration();
        const message = encodeURIComponent(
            `Hi! I would like to book the ${bikeName}.\n\n` +
            `📅 Pickup: ${formatDateForDisplay(pickupDate)} at ${pickupTime}\n` +
            `📅 Dropoff: ${formatDateForDisplay(dropoffDate)} at ${dropoffTime}\n` +
            `📍 Pickup Location: ${location}\n` +
            `🎯 Destination: ${destination}\n` +
            `⏱️ Duration: ${duration} day(s)\n\n` +
            `I have read and accepted the terms and conditions.\n\n` +
            `Please confirm availability.`
        );
        const whatsappLink = `https://wa.me/9515567932?text=${message}`;
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
        'Chittoor',
        'Tirupati',
        'Madanapalle',
        'Puttur',
        'Srikalahasti'
    ];

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in text-white">
            <div className="bg-zinc-900 border border-white/10 rounded-2xl shadow-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-scale-in">
                {/* Header */}
                <div className="bg-primary-600 px-6 py-4 flex items-center justify-between sticky top-0 z-10 shadow-lg">
                    <h2 className="text-xl font-bold text-black uppercase tracking-tight">
                        {showTerms ? 'Terms & Conditions' : 'Secure Your Ride'}
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-black/80 hover:text-black transition-colors"
                    >
                        <FaTimes className="text-xl" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6">
                    {!showTerms ? (
                        <>
                            {/* Selected Vehicle Info */}
                            <div className="mb-8 p-4 bg-primary-500/10 border border-primary-500/20 rounded-xl">
                                <p className="text-gray-400 text-sm mb-1 uppercase tracking-widest font-bold">Interested In</p>
                                <p className="text-2xl font-bold text-white">{bikeName}</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                {/* Pickup Date */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-400 mb-2">Preferred Date</label>
                                    <div className="relative">
                                        <input
                                            type="date"
                                            value={pickupDate}
                                            onChange={(e) => setPickupDate(e.target.value)}
                                            min={formatDateForInput(new Date())}
                                            className="w-full px-4 py-3 bg-zinc-800 border border-white/10 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white"
                                        />
                                    </div>
                                </div>
                                {/* Pickup Time */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-400 mb-2">Approx. Time</label>
                                    <div className="relative">
                                        <select
                                            value={pickupTime}
                                            onChange={(e) => setPickupTime(e.target.value)}
                                            className="w-full px-4 py-3 bg-zinc-800 border border-white/10 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white appearance-none"
                                        >
                                            {timeOptions.map((time) => {
                                                const hour = parseInt(time.split(':')[0]);
                                                const minute = time.split(':')[1];
                                                let displayHour = hour;
                                                let period = 'AM';
                                                if (hour === 0) displayHour = 12;
                                                else if (hour === 12) period = 'PM';
                                                else if (hour > 12) { displayHour = hour - 12; period = 'PM'; }
                                                return (
                                                    <option key={`pickup-${time}`} value={time} className="bg-zinc-800">
                                                        {`${displayHour}:${minute} ${period}`}
                                                    </option>
                                                );
                                            })}
                                        </select>
                                        <FaClock className="absolute right-4 top-1/2 transform -translate-y-1/2 text-primary-500 pointer-events-none" />
                                    </div>
                                </div>
                            </div>

                            {/* Full Name / Phone if needed? The current form seems to rely on WhatsApp capture. 
                                Let's add Name field for better user experience if we want, 
                                but the original didn't have it in modal. Staying consistent with original fields. */}

                            <div className="mb-10">
                                <label className="block text-sm font-semibold text-gray-400 mb-2">Your Location <span className="text-primary-500">*</span></label>
                                <input
                                    type="text"
                                    value={destination}
                                    onChange={(e) => setDestination(e.target.value)}
                                    placeholder="Enter your current location..."
                                    className="w-full px-4 py-4 bg-zinc-800 border border-white/10 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder:text-gray-600"
                                    required
                                />
                            </div>
                        </>
                    ) : (
                        <>
                            {/* Terms and Conditions */}
                            <div className="mb-10 max-h-96 overflow-y-auto bg-black/50 rounded-2xl p-6 border border-white/10">
                                <h3 className="font-bold text-primary-500 mb-6 flex items-center">
                                    <FaCheckCircle className="mr-2" /> LycasGo Rental Policy
                                </h3>
                                <div className="space-y-6 text-sm text-gray-300">
                                    <div className="border-l-2 border-primary-500/30 pl-4">
                                        <h4 className="font-bold text-white mb-2 uppercase tracking-wider text-xs">Required Documents</h4>
                                        <ul className="list-disc list-inside space-y-1 ml-2">
                                            <li>Original Driving License</li>
                                            <li>Aadhar Card / PAN Card</li>
                                        </ul>
                                    </div>
                                    <div className="border-l-2 border-primary-500/30 pl-4">
                                        <h4 className="font-bold text-white mb-2 uppercase tracking-wider text-xs">Path to Ownership</h4>
                                        <p>Asset belongs to the company until full tenure (10 months/300 days) is completed. Early termination subject to terms.</p>
                                    </div>
                                    <div className="border-l-2 border-primary-500/30 pl-4">
                                        <h4 className="font-bold text-white mb-2 uppercase tracking-wider text-xs">Maintenance</h4>
                                        <p>Routine maintenance is included. Damages due to negligence borne by the rider.</p>
                                    </div>
                                    <div className="border-l-2 border-primary-500/30 pl-4">
                                        <h4 className="font-bold text-white mb-2 uppercase tracking-wider text-xs">Booking Rules</h4>
                                        <ul className="list-disc list-inside space-y-1 ml-2 text-xs">
                                            <li>No sub-letting</li>
                                            <li>Helmet mandatory</li>
                                            <li>Adhere to road safety laws</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Acceptance Checkbox */}
                            <div className="mb-10 p-4 bg-primary-500/5 rounded-xl border border-primary-500/20">
                                <label className="flex items-center cursor-pointer group">
                                    <input
                                        type="checkbox"
                                        checked={acceptedTerms}
                                        onChange={(e) => setAcceptedTerms(e.target.checked)}
                                        className="w-6 h-6 text-primary-500 border-white/20 rounded focus:ring-primary-500 bg-zinc-800"
                                    />
                                    <span className="ml-4 text-sm text-gray-300 group-hover:text-white transition-colors">
                                        I accept the LycasGo terms and conditions.
                                    </span>
                                </label>
                            </div>
                        </>
                    )}

                    {/* Action Buttons */}
                    <div className="space-y-4">
                        <button
                            onClick={handleBookNow}
                            className={`w-full py-5 rounded-2xl font-bold text-lg flex items-center justify-center transition-all ${!acceptedTerms && showTerms
                                ? 'bg-zinc-800 text-gray-600 cursor-not-allowed'
                                : 'bg-primary-500 text-black hover:bg-primary-400 shadow-xl shadow-primary-500/20'
                                }`}
                        >
                            <FaWhatsapp className="text-2xl mr-3" />
                            {showTerms ? 'Confirm on WhatsApp' : 'Lock My Choice'}
                        </button>

                        {!showTerms && (
                            <a
                                href="tel:9515567932"
                                className="w-full py-4 rounded-2xl border border-white/10 text-white font-semibold flex items-center justify-center hover:bg-white/5 transition-all"
                            >
                                <FaPhone className="mr-3" /> Still Have Questions?
                            </a>
                        )}

                        {showTerms && (
                            <button
                                onClick={() => setShowTerms(false)}
                                className="w-full py-4 text-gray-500 hover:text-white transition-colors font-medium"
                            >
                                Go Back to Details
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
