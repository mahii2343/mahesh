import React, { useState } from 'react';
import { FaTimes, FaWhatsapp, FaArrowRight, FaShieldAlt, FaCheckCircle } from 'react-icons/fa';

const PreBookingForm = ({ isOpen, onClose, bikeName = 'LYCAS LD 1200W' }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        location: '',
        plan: 'Monthly Rent-to-Own'
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const message = encodeURIComponent(
            `*New Pre-Booking Request*\n\n` +
            `🚲 *Model:* ${bikeName}\n` +
            `👤 *Name:* ${formData.name}\n` +
            `📞 *Phone:* ${formData.phone}\n` +
            `📍 *Location:* ${formData.location}\n` +
            `📊 *Plan:* ${formData.plan}\n\n` +
            `I'm interested in pre-booking this EV. Please contact me with more details.`
        );
        window.open(`https://wa.me/7032160046?text=${message}`, '_blank');
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-fade-in">
            <div className="bg-zinc-900 border border-white/10 rounded-[2.5rem] shadow-3xl w-full max-w-lg overflow-hidden animate-scale-in">
                <div className="bg-primary-500 p-8 flex justify-between items-center">
                    <div>
                        <h2 className="text-2xl font-black text-black">PRE-BOOK NOW</h2>
                        <p className="text-black/70 font-bold text-sm uppercase tracking-tighter">Secure your spot in the EV revolution</p>
                    </div>
                    <button onClick={onClose} className="text-black/50 hover:text-black transition-colors">
                        <FaTimes className="text-2xl" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Full Name</label>
                        <input
                            required
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:ring-2 focus:ring-primary-500 outline-none transition-all placeholder:text-gray-600"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">WhatsApp Number</label>
                        <input
                            required
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone Number"
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:ring-2 focus:ring-primary-500 outline-none transition-all placeholder:text-gray-600"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Current Location</label>
                        <input
                            required
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            placeholder="Village/City"
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:ring-2 focus:ring-primary-500 outline-none transition-all placeholder:text-gray-600"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Select Plan</label>
                        <select
                            name="plan"
                            value={formData.plan}
                            onChange={handleChange}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:ring-2 focus:ring-primary-500 outline-none transition-all appearance-none cursor-pointer"
                        >
                            <option value="Monthly Rent-to-Own" className="bg-zinc-900">Monthly Rent-to-Own</option>
                            <option value="Daily Rental" className="bg-zinc-900">Daily Rental</option>
                            <option value="Full Purchase" className="bg-zinc-900">Full Purchase</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-primary-500 hover:bg-primary-400 text-black font-black py-5 rounded-2xl shadow-xl shadow-primary-500/10 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3"
                    >
                        REQUEST PRE-BOOKING <FaWhatsapp className="text-xl" />
                    </button>

                    <p className="text-center text-xs text-gray-500 mt-4 flex items-center justify-center gap-2">
                        <FaCheckCircle className="text-primary-500" /> Guaranteed availability upon confirmation
                    </p>
                </form>
            </div>
        </div>
    );
};

export default PreBookingForm;
