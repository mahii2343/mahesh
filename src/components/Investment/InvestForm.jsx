import React, { useState } from 'react';
import { FaUser, FaPhone, FaIdCard, FaUserFriends, FaExclamationCircle } from 'react-icons/fa';

const InvestForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        aadhar: '',
        fatherName: '',
        motherName: '',
        emergencyContact: '',
        phone: '',
        interest: 'Investment Plan'
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const message = encodeURIComponent(
            `*New Investment Inquiry*\n\n` +
            `*Name:* ${formData.name}\n` +
            `*Phone:* ${formData.phone}\n` +
            `*Aadhar:* ${formData.aadhar}\n` +
            `*Father's Name:* ${formData.fatherName}\n` +
            `*Mother's Name:* ${formData.motherName}\n` +
            `*Emergency Contact:* ${formData.emergencyContact}\n` +
            `*Interested In:* ${formData.interest}`
        );
        window.open(`https://wa.me/9515567932?text=${message}`, '_blank');
    };

    return (
        <div className="card p-8 bg-zinc-900 border border-white/5 h-full">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Start Your Journey</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-semibold text-gray-400 mb-1">Full Name</label>
                    <div className="relative">
                        <FaUser className="absolute left-3 top-3 text-gray-500" />
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="input-primary w-full pl-10"
                            placeholder="Enter your name"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-400 mb-1">Phone Number</label>
                    <div className="relative">
                        <FaPhone className="absolute left-3 top-3 text-gray-500" />
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="input-primary w-full pl-10"
                            placeholder="Enter your mobile number"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-400 mb-1">Aadhar Number</label>
                    <div className="relative">
                        <FaIdCard className="absolute left-3 top-3 text-gray-500" />
                        <input
                            type="text"
                            name="aadhar"
                            value={formData.aadhar}
                            onChange={handleChange}
                            required
                            className="input-primary w-full pl-10"
                            placeholder="XXXX-XXXX-XXXX"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-semibold text-gray-400 mb-1">Father's Name</label>
                        <div className="relative">
                            <FaUserFriends className="absolute left-3 top-3 text-gray-500" />
                            <input
                                type="text"
                                name="fatherName"
                                value={formData.fatherName}
                                onChange={handleChange}
                                required
                                className="input-primary w-full pl-10"
                                placeholder="Father's Name"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-400 mb-1">Mother's Name</label>
                        <div className="relative">
                            <FaUserFriends className="absolute left-3 top-3 text-gray-500" />
                            <input
                                type="text"
                                name="motherName"
                                value={formData.motherName}
                                onChange={handleChange}
                                required
                                className="input-primary w-full pl-10"
                                placeholder="Mother's Name"
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-400 mb-1">Emergency Contact</label>
                    <div className="relative">
                        <FaExclamationCircle className="absolute left-3 top-3 text-gray-500" />
                        <input
                            type="tel"
                            name="emergencyContact"
                            value={formData.emergencyContact}
                            onChange={handleChange}
                            required
                            className="input-primary w-full pl-10"
                            placeholder="Emergency Contact Number"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-400 mb-1">Interested In</label>
                    <select
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        className="input-primary w-full pl-4 bg-zinc-800 border-zinc-700 text-white"
                    >
                        <option value="Investment Plan">Investment Plan (24 Months)</option>
                        <option value="Sub-Rental Investment">Sub-Rental Investment (3-50L)</option>
                        <option value="Finance Option">Finance/Loan Option</option>
                    </select>
                </div>

                <button type="submit" className="btn-primary w-full justify-center mt-4">
                    Apply Now
                </button>
            </form>
        </div>
    );
};

export default InvestForm;
