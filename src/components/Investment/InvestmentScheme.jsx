import React from 'react';
import { FaChartLine, FaCalendarAlt, FaPercentage } from 'react-icons/fa';

const InvestmentScheme = () => {
    const plans = [
        { period: '1-6 Months', return: '2%', label: 'Initial Growth' },
        { period: '6-12 Months', return: '2.5%', label: 'Steady Rise' },
        { period: '12-18 Months', return: '3%', label: 'Prime Yield' },
        { period: '18-24 Months', return: '3.5%', label: 'Maximum Return' },
    ];

    return (
        <div className="card p-8 bg-zinc-900 border border-white/5 h-full">
            <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mr-4">
                    <FaChartLine className="text-2xl text-green-500" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white">Investment Plans</h3>
                    <p className="text-sm text-gray-400">24-Month Growth Strategy (For ₹1 Lakh)</p>
                </div>
            </div>

            <div className="space-y-4">
                {plans.map((plan, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                        <div className="flex items-center">
                            <FaCalendarAlt className="text-primary-500 mr-3" />
                            <span className="text-gray-200 font-medium">{plan.period}</span>
                        </div>
                        <div className="flex flex-col items-end">
                            <span className="text-xl font-bold text-green-400">{plan.return}</span>
                            <span className="text-xs text-gray-500">{plan.label}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 p-4 bg-primary-500/10 rounded-lg border border-primary-500/20 text-center">
                <p className="text-primary-400 font-semibold">
                    <FaPercentage className="inline mr-1" />
                    All investments settled after 24 months
                </p>
            </div>
        </div>
    );
};

export default InvestmentScheme;
