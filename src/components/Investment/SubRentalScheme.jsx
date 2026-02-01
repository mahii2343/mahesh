import React from 'react';
import { FaMotorcycle, FaRupeeSign, FaHandHoldingUsd } from 'react-icons/fa';

const SubRentalScheme = () => {
    return (
        <div className="card p-8 bg-zinc-900 border border-white/5 h-full">
            <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mr-4">
                    <FaMotorcycle className="text-2xl text-blue-500" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white">Sub-Rental Investment</h3>
                    <p className="text-sm text-gray-400">Earn monthly from EV rentals</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 p-4 rounded-lg border border-white/10 text-center">
                    <p className="text-sm text-gray-400 mb-1">Investment Range</p>
                    <p className="text-xl font-bold text-white">₹3L - ₹50L</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg border border-white/10 text-center">
                    <p className="text-sm text-gray-400 mb-1">Vehicle Cost Coverage</p>
                    <p className="text-xl font-bold text-white">60%</p>
                </div>
            </div>

            <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-6 rounded-lg border border-blue-500/20 text-center mb-6">
                <div className="flex flex-col items-center">
                    <FaHandHoldingUsd className="text-3xl text-blue-400 mb-3" />
                    <p className="text-lg text-gray-300 mb-1">Monthly Earnings</p>
                    <h4 className="text-3xl font-bold text-white">₹6,000</h4>
                    <p className="text-xs text-gray-400 mt-2">Per ₹1 Lakh Investment</p>
                </div>
            </div>
            <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                <h4 className="text-md font-bold text-white mb-2">Cheap Model Vehicles</h4>
                <p className="text-sm text-gray-400">
                    We utilize cost-effective vehicle models. Check all reading details during traveling.
                </p>
            </div>
        </div>
    );
};

export default SubRentalScheme;
