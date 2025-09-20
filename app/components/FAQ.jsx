'use client';
import React, { useState } from 'react';

function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "How do I search for businesses near me?",
            answer: "Simply enter your location in the search bar along with the type of business you're looking for. Our location-based search will show you the most relevant businesses in your area, sorted by distance and ratings.",
            icon: "🔍"
        },
        {
            question: "Is it free to use Just Find?",
            answer: "Yes! Just Find is completely free for users to search and discover local businesses. Business owners can also create a basic listing for free, with premium options available for enhanced visibility.",
            icon: "💰"
        },
        {
            question: "How do I list my business on Just Find?",
            answer: "Business owners can easily list their business by clicking the 'List Your Business' button and filling out the registration form. You'll need to provide basic information about your business, location, hours, and contact details.",
            icon: "🏢"
        },
        {
            question: "How are businesses ranked in search results?",
            answer: "Our search results are ranked based on multiple factors including relevance to your search, customer ratings and reviews, distance from your location, business completion score, and user engagement metrics.",
            icon: "📊"
        },
        {
            question: "Can I leave reviews for businesses?",
            answer: "Yes! We encourage users to leave honest reviews and ratings for businesses they've visited. This helps other users make informed decisions and helps businesses improve their services.",
            icon: "⭐"
        },
        {
            question: "How do I report incorrect business information?",
            answer: "If you notice incorrect information about a business, you can report it by clicking the 'Report Issue' button on the business listing page. We'll review and update the information as needed.",
            icon: "🚨"
        },
        {
            question: "Do you offer customer support?",
            answer: "Absolutely! Our customer support team is available 24/7 to help with any questions or issues. You can reach us through the contact form, email, or live chat feature on our website.",
            icon: "💬"
        },
        {
            question: "How often is business information updated?",
            answer: "Business information is updated continuously. Business owners can update their information anytime, and we also verify details regularly. Users can also suggest updates if they notice changes.",
            icon: "🔄"
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.15) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mb-6 shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4">
                        Frequently Asked Questions
                    </h3>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                        Get answers to common questions about using Just Find and discover how we can help you connect with local businesses
                    </p>
                </div>

                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="group bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:border-red-100 transition-all duration-500 transform hover:-translate-y-1"
                        >
                            <button
                                className="w-full px-8 py-6 text-left focus:outline-none focus:ring-4 focus:ring-red-100 rounded-2xl"
                                onClick={(e) => {
                                    toggleFAQ(index);
                                    e.currentTarget.blur(); // ye focus remove karega click ke baad
                                }}
                                aria-expanded={openIndex === index}
                            >
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                                            {faq.icon}
                                        </div>
                                        <h4 className="text-lg font-semibold text-gray-900 pr-4 group-hover:text-red-600 transition-colors duration-300">
                                            {faq.question}
                                        </h4>
                                    </div>
                                    <div className={`transform transition-all duration-300 ${openIndex === index ? 'rotate-180 text-red-500' : 'text-gray-400 group-hover:text-red-400'
                                        }`}>
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </button>

                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                }`}>
                                <div className="px-8 pb-6 ml-16">
                                    <div className="bg-gradient-to-r from-gray-50 to-red-50 rounded-xl p-4 border-l-4 border-red-200">
                                        <p className="text-gray-700 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Enhanced Contact CTA */}
                <div className="text-center mt-16 relative">
                    <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                            <div className="flex justify-center mb-4">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                </div>
                            </div>
                            <h4 className="text-2xl font-bold text-white mb-3">Still have questions?</h4>
                            <p className="text-white/90 mb-6 text-lg">Our support team is here to help you get the most out of Just Find</p>
                            <button className="bg-white text-red-500 hover:bg-gray-50 font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                                Contact Support
                                <svg className="w-5 h-5 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FAQ;