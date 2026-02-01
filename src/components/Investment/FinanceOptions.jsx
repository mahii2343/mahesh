import React from 'react';
import { FaPercent, FaMoneyBillWave, FaCheckCircle } from 'react-icons/fa';

const FinanceOptions = () => {
    return (
        <div className="card p-8 bg-zinc-900 border border-white/5 h-full">
            <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mr-4">
                    <FaMoneyBillWave className="text-2xl text-yellow-500" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white">Finance Options</h3>
                    <p className="text-sm text-gray-400">Easy loan approvals for your vehicle</p>
                </div>
            </div>

            <div className="space-y-6">
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">Loan Amount</span>
                        <span className="text-xl font-bold text-white">₹66,000 - ₹3 Lakhs</span>
                    </div>
                    <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                        <div className="bg-yellow-500 h-full w-3/4"></div>
                    </div>
                </div>

                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">Finance Coverage</span>
                        <span className="text-xl font-bold text-yellow-400">10% - 60%</span>
                    </div>
                    <p className="text-xs text-gray-500">Low cost CIBIL score checks available</p>
                </div>

                <div className="space-y-2">
                    <div className="flex items-center text-gray-300 text-sm">
                        <FaCheckCircle className="text-green-500 mr-2" />
                        <span>Quick Processing</span>
                    </div>
                    <div className="flex items-center text-gray-300 text-sm">
                        <FaCheckCircle className="text-green-500 mr-2" />
                        <span>Minimal Documentation</span>
                    </div>
                    <div className="flex items-center text-gray-300 text-sm">
                        <FaCheckCircle className="text-green-500 mr-2" />
                        <span>Flexible Repayment Terms</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FinanceOptions;
