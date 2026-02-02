import React, { useState, useEffect } from 'react';
import { FaTimes, FaMotorcycle } from 'react-icons/fa';

const PromoPopup = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show popup after 2 seconds of page load
        const showTimer = setTimeout(() => {
            setIsVisible(true);
        }, 2000);

        // Auto-hide after 10 seconds
        const hideTimer = setTimeout(() => {
            setIsVisible(false);
        }, 12000); // 2s delay + 10s show = 12s total

        return () => {
            clearTimeout(showTimer);
            clearTimeout(hideTimer);
        };
    }, []);

    const handleClose = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
            <div className="relative bg-zinc-900 border border-white/10 rounded-[2.5rem] shadow-2xl w-full max-w-md overflow-hidden animate-scale-in">
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-5 right-5 z-10 w-10 h-10 bg-black/40 hover:bg-black/60 text-white rounded-full flex items-center justify-center transition-all shadow-lg backdrop-blur-sm border border-white/10"
                    aria-label="Close"
                >
                    <FaTimes className="text-lg" />
                </button>

                {/* Content */}
                <div className="p-10">
                    <div className="text-center mb-8">
                        <span className="inline-block px-4 py-1.5 bg-primary-500/10 border border-primary-500/20 text-primary-400 rounded-full font-bold text-xs uppercase tracking-widest mb-6">
                            New Year Special
                        </span>
                        <h2 className="text-6xl md:text-7xl font-black text-white mb-2 tracking-tighter">
                            20% <span className="text-2xl md:text-3xl font-bold bg-primary-500 text-black px-2 rounded-lg">OFF</span>
                        </h2>
                        <p className="text-gray-400 font-medium">ON YOUR FIRST EV JOURNEY</p>
                    </div>

                    <div className="bg-black/40 border border-white/5 rounded-2xl p-6 mb-8 text-center ring-1 ring-white/5">
                        <p className="text-xs font-bold text-primary-500 uppercase tracking-widest mb-3">Use Promo Code</p>
                        <div className="bg-primary-500 text-black py-4 rounded-xl">
                            <p className="text-3xl font-black tracking-widest">LYCAS20</p>
                        </div>
                        <p className="text-[10px] text-gray-500 mt-4 uppercase">Valid until Jan 31, 2025</p>
                    </div>

                    {/* Call to Action */}
                    <div className="text-center">
                        <a
                            href="https://wa.me/9515567932?text=Hi!%20I%20would%20like%20to%20use%20code%20LYCAS20%20for%2020%25%20off%20my%20EV%20booking"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full inline-block bg-primary-500 hover:bg-primary-400 text-black font-black py-5 px-8 rounded-2xl transition-all duration-300 shadow-xl shadow-primary-500/20 transform hover:-translate-y-1"
                        >
                            Claim Discount on WhatsApp
                        </a>
                        <button
                            onClick={handleClose}
                            className="text-gray-500 hover:text-white text-xs mt-6 font-bold transition-colors uppercase tracking-widest"
                        >
                            No Thanks, I'll pay full price
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PromoPopup;
