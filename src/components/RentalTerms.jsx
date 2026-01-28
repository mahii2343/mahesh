import React from 'react';
import { FaFileContract, FaIdCard, FaGasPump, FaClock, FaExclamationTriangle, FaTachometerAlt, FaUserShield, FaMapMarkedAlt } from 'react-icons/fa';
import { GiFullMotorcycleHelmet } from 'react-icons/gi';

const RentalTerms = () => {
    const terms = [
        {
            icon: <FaIdCard className="text-4xl text-primary-500" />,
            title: 'Identity Verification',
            gradient: 'from-primary-500 to-primary-700',
            items: [
                'Original driving license to be submitted. If physical is not available, digital copy (mParivahan/DigiLocker) is accepted.',
                'Valid identity proof (Aadhaar/PAN).'
            ]
        },
        {
            icon: <FaGasPump className="text-4xl text-primary-500" />,
            title: 'Battery & Charging',
            gradient: 'from-zinc-800 to-zinc-900',
            items: [
                'Battery is provided at 80%+ charge. Please return with similar charge or as per agreement.',
                'Charging cable/Portable charger available on request.'
            ]
        },
        {
            icon: <FaClock className="text-4xl text-primary-500" />,
            title: 'Subscription Tenure',
            gradient: 'from-zinc-900 to-black',
            items: [
                'Rent-to-own plans are calculated for 10 months (300 days).',
                'Daily/Weekly extensions must be requested 6 hours in advance.'
            ]
        },
        {
            icon: <FaFileContract className="text-4xl text-primary-500" />,
            title: 'Ownership Path',
            gradient: 'from-primary-600 to-primary-800',
            items: [
                'Asset ownership is transferred to the rider after successful completion of all payments.',
                'Vehicle documents will be handed over post-tenure.'
            ]
        },
        {
            icon: <FaTachometerAlt className="text-4xl text-primary-500" />,
            title: 'Usage Limit',
            gradient: 'from-zinc-800 to-zinc-900',
            items: [
                'Weekly/Monthly plans include standard mileage. Additional KM charges applicable if limit is exceeded.',
                'Real-time GPS tracking for vehicle security.'
            ]
        },
        {
            icon: <FaUserShield className="text-4xl text-primary-500" />,
            title: 'Insurance & Safety',
            gradient: 'from-zinc-900 to-black',
            items: [
                'Vehicles are covered under comprehensive insurance.',
                'Helmet is mandatory. Sub-letting of the vehicle is strictly prohibited.'
            ]
        }
    ];

    return (
        <section id="rental-terms" className="py-24 bg-black relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-900/10 rounded-full filter blur-[120px] z-0"></div>
            <div className="container-custom relative z-10">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20 text-primary-400 rounded-full font-semibold text-sm mb-4 uppercase tracking-widest">
                        Policies
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Rent-to-Own
                        <span className="text-primary-500"> Guidelines</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Transparent terms designed to support your journey towards vehicle ownership.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {terms.map((term, index) => (
                        <div
                            key={index}
                            className="card bg-zinc-900 border-white/5 hover:border-primary-500/30 transition-all duration-300 overflow-hidden"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-white/5 rounded-2xl">
                                        {term.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white">{term.title}</h3>
                                </div>
                                <ul className="space-y-4">
                                    {term.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start text-gray-400">
                                            <span className="text-primary-500 mr-3 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                                            <span className="text-sm leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Important Notice */}
                <div className="mt-20 bg-primary-500/5 border border-primary-500/20 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="flex flex-col md:flex-row items-start gap-8 relative z-10">
                        <div className="p-4 bg-primary-500/20 rounded-2xl">
                            <FaExclamationTriangle className="text-4xl text-primary-500" />
                        </div>
                        <div>
                            <h4 className="text-2xl font-bold text-white mb-4">Important Commitment</h4>
                            <p className="text-gray-400 leading-relaxed text-lg max-w-4xl">
                                By choosing LycasGo, you enter a partnership towards clean mobility.
                                We commit to providing you with a reliable EV, and we expect riders to adhere to safe driving practices and timely payments.
                                Violation of terms may affect your path to ownership.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RentalTerms;
