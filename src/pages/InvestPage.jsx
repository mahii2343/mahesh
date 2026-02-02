import React, { useEffect } from 'react';
import InvestmentScheme from '../components/Investment/InvestmentScheme';
import SubRentalScheme from '../components/Investment/SubRentalScheme';
import FinanceOptions from '../components/Investment/FinanceOptions';
import InvestForm from '../components/Investment/InvestForm';

const InvestPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 pb-20 bg-black min-h-screen">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20 text-primary-400 rounded-full font-semibold text-sm mb-4">
                        Grow With Us
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Investment <span className="text-primary-500">& Finance</span> Options
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Secure your future with our high-return investment plans or get easy financing for your EV journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    <InvestmentScheme />
                    <SubRentalScheme />
                    <FinanceOptions />
                </div>

                {/* New Promotional Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <div className="rounded-2xl overflow-hidden border border-white/10 hover:border-primary-500/30 transition-all duration-300 group">
                        <img
                            src="/images/investment_12l.jpg"
                            alt="12 Lakh Investment Plan"
                            className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    <div className="rounded-2xl overflow-hidden border border-white/10 hover:border-primary-500/30 transition-all duration-300 group">
                        <img
                            src="/images/investment_6l.jpg"
                            alt="6 Lakh Investment Plan"
                            className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>

                <div className="max-w-3xl mx-auto">
                    <InvestForm />
                </div>
            </div>
        </div>
    );
};

export default InvestPage;
