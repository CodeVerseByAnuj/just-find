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
            answer: "Simply enter your location in the search bar along with the type of business you're looking for. Our location-based search will show you the most relevant businesses in your area, sorted by distance and ratings."
        },
        {
            question: "Is it free to use Just Find?",
            answer: "Yes! Just Find is completely free for users to search and discover local businesses. Business owners can also create a basic listing for free, with premium options available for enhanced visibility."
        },
        {
            question: "How do I list my business on Just Find?",
            answer: "Business owners can easily list their business by clicking the 'List Your Business' button and filling out the registration form. You'll need to provide basic information about your business, location, hours, and contact details."
        },
        {
            question: "How are businesses ranked in search results?",
            answer: "Our search results are ranked based on multiple factors including relevance to your search, customer ratings and reviews, distance from your location, business completion score, and user engagement metrics."
        },
        {
            question: "Can I leave reviews for businesses?",
            answer: "Yes! We encourage users to leave honest reviews and ratings for businesses they've visited. This helps other users make informed decisions and helps businesses improve their services."
        },
        {
            question: "How do I report incorrect business information?",
            answer: "If you notice incorrect information about a business, you can report it by clicking the 'Report Issue' button on the business listing page. We'll review and update the information as needed."
        },
        {
            question: "Do you offer customer support?",
            answer: "Absolutely! Our customer support team is available 24/7 to help with any questions or issues. You can reach us through the contact form, email, or live chat feature on our website."
        },
        {
            question: "How often is business information updated?",
            answer: "Business information is updated continuously. Business owners can update their information anytime, and we also verify details regularly. Users can also suggest updates if they notice changes."
        }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h3>
                    <p className="text-gray-600 text-lg">Get answers to common questions about using Just Find</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                            <button
                                className="w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                                onClick={() => toggleFAQ(index)}
                                aria-expanded={openIndex === index}
                            >
                                <div className="flex justify-between items-center">
                                    <h4 className="text-lg font-semibold text-gray-900 pr-4">
                                        {faq.question}
                                    </h4>
                                    <div className={`transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}>
                                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </button>
                            
                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                            }`}>
                                <div className="px-6 pb-4">
                                    <p className="text-gray-700 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact CTA */}
                <div className="text-center mt-12 p-6 bg-gray-50 rounded-lg">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Still have questions?</h4>
                    <p className="text-gray-600 mb-4">Our support team is here to help you get the most out of Just Find</p>
                    <button className="bg-primary hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50">
                        Contact Support
                    </button>
                </div>
            </div>
        </section>
    );
}

export default FAQ;