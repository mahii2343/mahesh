import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const About = () => {

    return (
        <section id="about" className="section-padding relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-black z-0"></div>
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary-900/20 rounded-full filter blur-[100px] z-0"></div>

            <div className="container-custom relative z-10">
                {/* About LycasGo */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                    <div className="order-2 md:order-1">
                        <span className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20 text-primary-400 rounded-full font-semibold text-sm mb-4">
                            About Us
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            About <span className="text-primary-500">LycasGo</span>
                        </h2>
                        <h3 className="text-xl font-medium text-gray-300 mb-8 italic">&ldquo;Ride the Future. Go Electric.&rdquo;</h3>

                        <div className="flex flex-col space-y-4">
                            <a href="https://www.lycasgo.in" className="inline-flex items-center text-primary-500 font-bold hover:text-primary-400 transition-colors text-lg">
                                Visit www.lycasgo.in <span className="ml-2">→</span>
                            </a>
                        </div>
                    </div>

                    <div className="order-1 md:order-2">
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary-500 rounded-3xl transform rotate-3 opacity-20 filter blur-lg"></div>
                            <img
                                src="/images/logo.png"
                                alt="LycasGo Logo"
                                loading="lazy"
                                className="relative rounded-3xl shadow-2xl border border-white/10 w-full hover:scale-[1.02] transition-transform duration-500"
                            />
                        </div>
                    </div>
                </div>

                {/* Why Riders Choose Lycas */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Why Riders Choose <span className="text-primary-500">Lycas</span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-4xl mx-auto mb-12">
                        Lycas Bike Rental provides a strategic pathway for delivery professionals and daily commuters to achieve vehicle ownership.
                        Our model empowers riders to generate immediate income without the burden of an upfront purchase—culminating in full ownership of the asset.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="card p-8 text-left border-l-4 border-primary-500 hover:shadow-xl hover:shadow-primary-500/10 transition-all bg-zinc-900">
                            <div className="w-14 h-14 bg-primary-500/10 text-primary-500 rounded-full flex items-center justify-center text-2xl mb-6">
                                💸
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Flexible & Affordable</h3>
                            <p className="text-gray-400">
                                No need to buy a bike upfront. Easy daily or monthly payment plans perfect for delivery partners.
                            </p>
                        </div>
                        <div className="card p-8 text-left border-l-4 border-primary-500 hover:shadow-xl hover:shadow-primary-500/10 transition-all bg-zinc-900">
                            <div className="w-14 h-14 bg-primary-500/10 text-primary-500 rounded-full flex items-center justify-center text-2xl mb-6">
                                🚀
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Earn While You Ride</h3>
                            <p className="text-gray-400">
                                Perfect for Zepto, Blinkit, Zomato, Swiggy, Amazon, and Flipkart partners. Low risk, high convenience.
                            </p>
                        </div>
                        <div className="card p-8 text-left border-l-4 border-primary-500 hover:shadow-xl hover:shadow-primary-500/10 transition-all bg-zinc-900">
                            <div className="w-14 h-14 bg-primary-500/10 text-primary-500 rounded-full flex items-center justify-center text-2xl mb-6">
                                🎁
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Path to Ownership</h3>
                            <p className="text-gray-400">
                                Ride daily and move closer to ownership. Bike becomes yours after 10 months. Free 1-month recharge included.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Key Benefits List */}
                <div className="bg-zinc-900 border border-white/10 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/10 rounded-full filter blur-[60px]"></div>
                    <h3 className="text-2xl font-bold mb-8 text-center md:text-left relative z-10">Key Benefits for Riders</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                        {[
                            "No need to buy a bike upfront",
                            "Perfect for delivery partners (Zepto, Blinkit, Zomato, etc.)",
                            "Bike ownership after 10 months",
                            "Simple process & quick onboarding",
                            "Easy daily or monthly payments",
                            "Earn while you ride",
                            "Free 1-month recharge",
                            "Low risk, high convenience"
                        ].map((benefit, index) => (
                            <div key={index} className="flex items-center space-x-3">
                                <FaCheckCircle className="text-primary-500 flex-shrink-0" />
                                <span className="text-gray-300">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Founders Section */}
                <div className="mt-20">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20 text-primary-400 rounded-full font-semibold text-sm mb-4">
                            Leadership Team
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Meet Our <span className="text-primary-500">Founders</span>
                        </h2>
                        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                            Visionary leaders committed to revolutionizing sustainable mobility and empowering delivery professionals across India.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Founder Card */}
                        <div className="group relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
                            <div className="relative bg-zinc-900 border border-white/10 rounded-3xl p-8 hover:border-primary-500/30 transition-all duration-300">
                                <div className="flex flex-col items-center text-center">
                                    <div className="relative mb-6">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-accent-500/20 rounded-full blur-xl"></div>
                                        <img
                                            src="/images/founder.jpeg"
                                            alt="Mahesh Rachakonda - Founder"
                                            loading="lazy"
                                            className="relative w-32 h-32 rounded-full object-cover border-4 border-primary-500/30 shadow-2xl"
                                        />
                                        <div className="absolute bottom-0 right-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                                            ✓
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Mahesh Rachakonda</h3>
                                    <p className="text-primary-500 font-semibold mb-4">Founder & CEO</p>
                                    <p className="text-gray-400 mb-6 leading-relaxed">
                                        Visionary entrepreneur with over 15 years of experience in sustainable mobility solutions. 
                                        Passionate about creating accessible electric vehicle ownership pathways for delivery professionals 
                                        and building a greener future for urban transportation.
                                    </p>
                                    <div className="flex flex-wrap gap-3 justify-center">
                                        <span className="px-3 py-1 bg-primary-500/10 border border-primary-500/20 text-primary-400 rounded-full text-sm">
                                            🚀 Innovation
                                        </span>
                                        <span className="px-3 py-1 bg-primary-500/10 border border-primary-500/20 text-primary-400 rounded-full text-sm">
                                            💚 Sustainability
                                        </span>
                                        <span className="px-3 py-1 bg-primary-500/10 border border-primary-500/20 text-primary-400 rounded-full text-sm">
                                            🤝 Community
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Co-Founder Card */}
                        <div className="group relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-accent-600 to-primary-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
                            <div className="relative bg-zinc-900 border border-white/10 rounded-3xl p-8 hover:border-accent-500/30 transition-all duration-300">
                                <div className="flex flex-col items-center text-center">
                                    <div className="relative mb-6">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-accent-500/20 to-primary-500/20 rounded-full blur-xl"></div>
                                        <img
                                            src="/images/cofounder.jpeg"
                                            alt="Co-Founder Name"
                                            loading="lazy"
                                            className="relative w-32 h-32 rounded-full object-cover border-4 border-accent-500/30 shadow-2xl"
                                        />
                                        <div className="absolute bottom-0 right-0 w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                                            ✓
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Co-Founder</h3>
                                    <p className="text-accent-500 font-semibold mb-4">Sai Sree Kagithala</p>
                                    <p className="text-gray-400 mb-6 leading-relaxed">
                                        Strategic operations expert with deep expertise in scaling mobility platforms. 
                                        Focused on optimizing customer experience and building efficient systems that 
                                        support thousands of delivery partners across multiple cities.
                                    </p>
                                    <div className="flex flex-wrap gap-3 justify-center">
                                        <span className="px-3 py-1 bg-accent-500/10 border border-accent-500/20 text-accent-400 rounded-full text-sm">
                                            📊 Operations
                                        </span>
                                        <span className="px-3 py-1 bg-accent-500/10 border border-accent-500/20 text-accent-400 rounded-full text-sm">
                                            🎯 Strategy
                                        </span>
                                        <span className="px-3 py-1 bg-accent-500/10 border border-accent-500/20 text-accent-400 rounded-full text-sm">
                                            🌱 Growth
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Company Vision */}
                    <div className="mt-16 text-center">
                        <div className="bg-gradient-to-r from-primary-900/30 to-accent-900/30 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
                            <h3 className="text-2xl font-bold text-white mb-6">Our Vision</h3>
                            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                                To revolutionize urban mobility by making electric vehicle ownership accessible to everyone, 
                                starting with the delivery professionals who keep our cities moving. We&apos;re building a future 
                                where sustainable transportation is not just a choice, but a reality for millions.
                            </p>
                            <div className="mt-8 flex flex-wrap gap-4 justify-center">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-primary-500">150+</div>
                                    <div className="text-sm text-gray-400">Happy Riders</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-accent-500">5+</div>
                                    <div className="text-sm text-gray-400">Cities</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-green-500">100%</div>
                                    <div className="text-sm text-gray-400">Electric Fleet</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
