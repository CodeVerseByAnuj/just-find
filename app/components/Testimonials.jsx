import React from 'react'

function Testimonials() {
    return (
        <>
            < section className="py-16 bg-gray-50" >
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">What Our Users Say</h3>
                        <p className="text-gray-600 text-lg">Discover why thousands trust us to find the best local businesses</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Testimonial 1 */}
                        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
                            <div className="flex items-center mb-4">
                                <div className="flex text-yellow-400">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                            </div>
                            <p className="text-gray-700 mb-4 italic">
                                "Found the perfect restaurant for my anniversary dinner in minutes! The search results were exactly what I was looking for."
                            </p>
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold mr-3">
                                    S
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Sarah Johnson</h4>
                                    <p className="text-gray-600 text-sm">Local Food Enthusiast</p>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
                            <div className="flex items-center mb-4">
                                <div className="flex text-yellow-400">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                            </div>
                            <p className="text-gray-700 mb-4 italic">
                                "As a business owner, being listed here has significantly increased my customer base. Great platform!"
                            </p>
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold mr-3">
                                    M
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Mike Chen</h4>
                                    <p className="text-gray-600 text-sm">Restaurant Owner</p>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
                            <div className="flex items-center mb-4">
                                <div className="flex text-yellow-400">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                            </div>
                            <p className="text-gray-700 mb-4 italic">
                                "The location-based search is incredibly accurate. I can find healthcare services near me with ease!"
                            </p>
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold mr-3">
                                    E
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Emily Rodriguez</h4>
                                    <p className="text-gray-600 text-sm">Healthcare Professional</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Trust indicators */}
                    <div className="text-center mt-12">
                        <div className="flex justify-center items-center space-x-8 text-gray-600">
                            <div className="text-center">
                                <h4 className="text-2xl font-bold text-primary">10K+</h4>
                                <p className="text-sm">Happy Users</p>
                            </div>
                            <div className="text-center">
                                <h4 className="text-2xl font-bold text-primary">5K+</h4>
                                <p className="text-sm">Local Businesses</p>
                            </div>
                            <div className="text-center">
                                <h4 className="text-2xl font-bold text-primary">4.9</h4>
                                <p className="text-sm">Average Rating</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Testimonials
