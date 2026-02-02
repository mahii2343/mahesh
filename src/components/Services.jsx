import React from 'react';
import { FaMotorcycle, FaCheckCircle, FaTools, FaHeadset, FaTruck, FaShieldAlt, FaWhatsapp } from 'react-icons/fa';

const Services = () => {
    const services = [
        {
            icon: <FaMotorcycle className="text-5xl" />,
            title: 'EV Scooter Ownership',
            description: 'Transition from rider to owner. Our rent-to-own model is designed for long-term value.',
            gradient: 'from-primary-500 to-primary-700',
            features: ['Ownership in 10 months', 'No upfront cost', 'Flexible daily plans']
        },
        {
            icon: <FaTruck className="text-5xl" />,
            title: 'Hassle-free Maintenance',
            description: 'We take care of the bike while you focus on your earnings. Regular service included.',
            gradient: 'from-accent-500 to-accent-700',
            features: ['Free periodic service', 'Battery health checks', 'Quick replacements']
        },
        {
            icon: <FaCheckCircle className="text-5xl" />,
            title: 'Zero Emission Rides',
            description: 'Contribute to a greener planet with every ride. Silent and cost-effective mobility.',
            gradient: 'from-green-500 to-emerald-700',
            features: ['Zero tailpipe emissions', 'Eco-friendly fleet', 'Sustainable future']
        },
        {
            icon: <FaTools className="text-5xl" />,
            title: 'Delivery Partner Support',
            description: 'Optimized for Zepto, Blinkit, and others. Built for the gig economy.',
            gradient: 'from-blue-500 to-cyan-600',
            features: ['High payload capacity', 'Reliable motor', 'Tough build']
        },
        {
            icon: <FaHeadset className="text-5xl" />,
            title: '24/7 Roadside Assist',
            description: 'Never get stuck. Our team is a WhatsApp message away for any assistance.',
            gradient: 'from-purple-500 to-purple-700',
            features: ['WhatsApp priority support', 'On-spot fixes', 'Towing if needed']
        },
        {
            icon: <FaShieldAlt className="text-5xl" />,
            title: 'Safe & Secure',
            description: 'Every rental comes with a safety kit and full insurance coverage.',
            gradient: 'from-orange-500 to-red-600',
            features: ['Insurance included', 'Safety helmet provided', 'Verified vehicles']
        }
    ];

    return (
        <section id="services" className="py-24 bg-black relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-900/10 rounded-full filter blur-[120px] -translate-y-1/2"></div>

            <div className="container-custom relative z-10">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20 text-primary-400 rounded-full font-semibold text-sm mb-4 uppercase tracking-widest">
                        Core Benefits
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Everything You Need for a
                        <span className="text-primary-500"> Sustainable Future</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        We don't just rent bikes; we provide a pathway to ownership and a greener way to move through your city.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="card hover-lift group animate-scale-in bg-zinc-900 border-white/5"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className={`bg-gradient-to-br ${service.gradient} p-8 text-white relative overflow-hidden`}>
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full filter blur-2xl transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-700"></div>
                                <div className="flex justify-between items-start mb-6 relative z-10">
                                    <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl">
                                        {service.icon}
                                    </div>
                                    <span className="text-6xl opacity-10 font-bold">0{index + 1}</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-3 relative z-10">{service.title}</h3>
                                <p className="text-white/80 text-sm leading-relaxed relative z-10">{service.description}</p>
                            </div>

                            <div className="p-6 bg-zinc-900">
                                <ul className="space-y-3">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-gray-400">
                                            <FaCheckCircle className="text-primary-500 mr-2 flex-shrink-0" />
                                            <span className="text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="mt-24 text-center bg-zinc-900 border border-white/5 rounded-3xl p-12 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <h3 className="text-3xl font-bold text-white mb-4 relative z-10">
                        Ready to Join the Revolution?
                    </h3>
                    <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto relative z-10">
                        Become a LycasGo partner today and transform the way you earn and ride.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                        <a
                            href="https://wa.me/9515567932?text=Hi!%20I%20would%20like%20to%20learn%20more%20about%20LycasGo%20EV%20scooters"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary text-lg"
                        >
                            <FaWhatsapp className="mr-2" /> Book on WhatsApp
                        </a>
                        <button
                            onClick={() => {
                                const element = document.getElementById('bike-preview');
                                if (element) element.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="btn-secondary text-lg"
                        >
                            Explore Pricing
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
