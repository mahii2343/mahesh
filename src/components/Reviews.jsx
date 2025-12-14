import React, { useState } from 'react';
import { FaStar, FaQuoteLeft, FaUser } from 'react-icons/fa';

const Reviews = () => {
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        review: ''
    });
    const [submitted, setSubmitted] = useState(false);

    // Top reviews from business profile
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
        }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the review to your backend
        console.log({ ...formData, rating });
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', review: '' });
            setRating(0);
        }, 3000);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="reviews" className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-50">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full font-semibold text-sm mb-4">
                        Customer Reviews
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        What Our Customers
                        <span className="gradient-text"> Say</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Read reviews from our satisfied customers and share your experience with us.
                    </p>
                </div>

                {/* Top Reviews Display */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {topReviews.map((review, index) => (
                        <div
                            key={index}
                            className="card hover-lift animate-scale-in"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="p-8">
                                <FaQuoteLeft className="text-4xl text-primary-200 mb-4" />

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
                                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                    "{review.review}"
                                </p>

                                {/* Reviewer Info */}
                                <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-bold">
                                        {review.avatar}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">{review.name}</h4>
                                        <p className="text-sm text-gray-500">{review.date}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Review Submission Form */}
                <div className="max-w-3xl mx-auto">
                    <div className="card">
                        <div className="bg-gradient-to-r from-primary-500 to-primary-700 p-6 text-white rounded-t-2xl">
                            <h3 className="text-2xl font-bold mb-2">Share Your Experience</h3>
                            <p className="text-white/90">We'd love to hear about your rental experience!</p>
                        </div>

                        <div className="p-8">
                            {submitted ? (
                                <div className="text-center py-8">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                    <h4 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h4>
                                    <p className="text-gray-600">Your review has been submitted successfully.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Rating Selection */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Your Rating *
                                        </label>
                                        <div className="flex gap-2">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <button
                                                    key={star}
                                                    type="button"
                                                    onClick={() => setRating(star)}
                                                    onMouseEnter={() => setHoverRating(star)}
                                                    onMouseLeave={() => setHoverRating(0)}
                                                    className="focus:outline-none transition-transform hover:scale-110"
                                                >
                                                    <FaStar
                                                        className={`text-3xl ${star <= (hoverRating || rating)
                                                                ? 'text-yellow-400'
                                                                : 'text-gray-300'
                                                            }`}
                                                    />
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Name Input */}
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Your Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                            placeholder="Enter your name"
                                        />
                                    </div>

                                    {/* Email Input */}
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Your Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                            placeholder="Enter your email"
                                        />
                                    </div>

                                    {/* Review Textarea */}
                                    <div>
                                        <label htmlFor="review" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Your Review *
                                        </label>
                                        <textarea
                                            id="review"
                                            name="review"
                                            value={formData.review}
                                            onChange={handleChange}
                                            required
                                            rows="5"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                                            placeholder="Share your experience with us..."
                                        ></textarea>
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={rating === 0}
                                        className="w-full btn-primary justify-center text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        Submit Review
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
