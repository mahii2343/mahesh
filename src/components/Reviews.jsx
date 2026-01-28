import React from 'react';
import { FaStar, FaQuoteLeft, FaExternalLinkAlt } from 'react-icons/fa';

const Reviews = () => {
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [isPaused, setIsPaused] = React.useState(false);

    // Top reviews from business profile - now 4 reviews
    const topReviews = [
        {
            name: 'Rajesh Kumar',
            rating: 5,
            date: 'December 2024',
            review: 'Excellent service! The bike was in perfect condition and the staff was very helpful. Highly recommend for anyone looking to rent bikes in Chittoor.',
            avatar: 'RK'
        },
        {
            name: 'Priya Sharma',
            rating: 5,
            date: 'November 2024',
            review: 'Great experience! Doorstep delivery was very convenient. The bike was clean and well-maintained. Will definitely rent again!',
            avatar: 'PS'
        },
        {
            name: 'Arun Reddy',
            rating: 5,
            date: 'November 2024',
            review: 'Amazing bikes and affordable prices! The booking process was smooth and the team was very professional. Perfect for exploring Chittoor.',
            avatar: 'AR'
        },
        {
            name: 'Sneha Patel',
            rating: 5,
            date: 'October 2024',
            review: 'Best bike rental service in Chittoor! The bikes are well-maintained and the customer support is excellent. Highly satisfied with the service.',
            avatar: 'SP'
        }
    ];

    // Auto-slide functionality
    React.useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % topReviews.length);
            }, 4000); // Change slide every 4 seconds

            return () => clearInterval(interval);
        }
    }, [isPaused, topReviews.length]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <section id="reviews" className="py-24 bg-black relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-900/5 rounded-full filter blur-[120px]"></div>
            <div className="container-custom relative z-10">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20 text-primary-400 rounded-full font-semibold text-sm mb-4 uppercase tracking-widest">
                        Testimonials
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        What Our Riders
                        <span className="text-primary-500"> Say About Us</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Join hundreds of satisfied riders who have found their perfect EV partner with LycasGo.
                    </p>
                </div>

                {/* Auto-sliding Reviews Carousel */}
                <div
                    className="relative max-w-4xl mx-auto"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {topReviews.map((review, index) => (
                                <div
                                    key={index}
                                    className="w-full flex-shrink-0 px-4"
                                >
                                    <div className="card bg-zinc-900 border-white/5 hover:border-primary-500/30 transition-all duration-500 p-8 shadow-2xl">
                                        <FaQuoteLeft className="text-5xl text-primary-500/20 mb-6" />

                                        {/* Rating Stars */}
                                        <div className="flex gap-1 mb-4">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <FaStar
                                                    key={star}
                                                    className={`text-xl ${star <= review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                                />
                                            ))}
                                        </div>

                                        {/* Review Text */}
                                        <p className="text-gray-300 text-lg leading-relaxed mb-8 italic">
                                            "{review.review}"
                                        </p>

                                        {/* Reviewer Info */}
                                        <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-black font-extrabold text-xl shadow-lg shadow-primary-500/20">
                                                {review.avatar}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white text-lg">{review.name}</h4>
                                                <p className="text-sm text-primary-500 font-medium">{review.date}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex justify-center gap-3 mt-10">
                        {topReviews.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`h-2 rounded-full transition-all duration-500 ${index === currentSlide
                                    ? 'bg-primary-500 w-12'
                                    : 'bg-zinc-800 w-4 hover:bg-zinc-700'
                                    }`}
                                aria-label={`Go to review ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Write a Review Button */}
                    <div className="flex justify-center mt-12">
                        <a
                            href="https://g.page/r/CbaiUivwsOL9EBM/review"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                        >
                            Write a Google Review
                            <FaExternalLinkAlt className="ml-2 text-sm" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
