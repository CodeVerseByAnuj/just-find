'use client';
import React, { useState } from 'react'

const categoriesList = [
  { id: 1, name: 'Restaurants', icon: 'fas fa-utensils', count: '12,500+', color: 'bg-red-500', description: 'Fine dining & casual eateries' },
  { id: 2, name: 'Hotels', icon: 'fas fa-bed', count: '8,200+', color: 'bg-blue-500', description: 'Luxury & budget accommodations' },
  { id: 3, name: 'Beauty & Spa', icon: 'fas fa-spa', count: '6,800+', color: 'bg-pink-500', description: 'Wellness & beauty services' },
  { id: 4, name: 'Healthcare', icon: 'fas fa-hospital', count: '9,500+', color: 'bg-green-500', description: 'Medical & healthcare providers' },
  { id: 5, name: 'Education', icon: 'fas fa-graduation-cap', count: '4,300+', color: 'bg-purple-500', description: 'Schools & training centers' },
  { id: 6, name: 'Automobile', icon: 'fas fa-car', count: '7,100+', color: 'bg-orange-500', description: 'Car services & dealerships' },
  { id: 7, name: 'Real Estate', icon: 'fas fa-home', count: '5,600+', color: 'bg-indigo-500', description: 'Property & real estate agents' },
  { id: 8, name: 'Travel', icon: 'fas fa-plane', count: '3,900+', color: 'bg-teal-500', description: 'Travel agencies & tours' },
  { id: 9, name: 'Fitness', icon: 'fas fa-dumbbell', count: '2,800+', color: 'bg-yellow-500', description: 'Gyms & fitness centers' },
  { id: 10, name: 'Shopping', icon: 'fas fa-shopping-cart', count: '11,200+', color: 'bg-gray-500', description: 'Retail stores & shopping' },
  { id: 11, name: 'Entertainment', icon: 'fas fa-film', count: '4,700+', color: 'bg-red-400', description: 'Movies, events & entertainment' },
  { id: 12, name: 'Por Services', icon: 'fas fa-briefcase', count: '8,900+', color: 'bg-blue-400', description: 'Legal, accounting & consulting' }
]

function Categories() {
    const [hoveredCategory, setHoveredCategory] = useState(null);

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-20 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Enhanced Header */}
                <div className="text-center mb-16">
                    <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Explore Popular Categories
                    </h3>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                        Discover thousands of verified businesses across various categories. 
                        From dining to healthcare, we've got you covered.
                    </p>
                    
                    {/* Category Stats */}
                    <div className="flex justify-center items-center space-x-8 text-sm text-gray-500">
                        <div className="flex items-center">
                            <i className="fas fa-check-circle text-green-500 mr-2"></i>
                            <span>All Verified Businesses</span>
                        </div>
                        <div className="flex items-center">
                            <i className="fas fa-clock text-blue-500 mr-2"></i>
                            <span>Updated Daily</span>
                        </div>
                        <div className="flex items-center">
                            <i className="fas fa-shield-alt text-purple-500 mr-2"></i>
                            <span>Quality Assured</span>
                        </div>
                    </div>
                </div>

                {/* Enhanced Categories Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mb-12">
                    {categoriesList.map(category => (
                        <div
                            key={category.id}
                            className="group relative"
                            onMouseEnter={() => setHoveredCategory(category.id)}
                            onMouseLeave={() => setHoveredCategory(null)}
                        >
                            {/* Main Card */}
                            <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                
                                <div className="p-6 text-center relative z-10">
                                    {/* Icon Container */}
                                    <div className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                                        <i className={`${category.icon} text-white text-2xl`}></i>
                                    </div>
                                    
                                    {/* Category Info */}
                                    <h4 className="font-bold text-gray-900 mb-2 text-lg group-hover:text-primary transition-colors">
                                        {category.name}
                                    </h4>
                                    <p className="text-sm text-gray-500 font-medium mb-2">
                                        {category.count}
                                    </p>
                                    
                                    {/* Description - shows on hover */}
                                    <div className={`transition-all duration-300 overflow-hidden ${
                                        hoveredCategory === category.id ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                                    }`}>
                                        <p className="text-xs text-gray-600 mt-2">
                                            {category.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Hover Effect Bar */}
                                <div className={`absolute bottom-0 left-0 right-0 h-1 ${category.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
                            </div>

                            {/* Floating Badge */}
                            <div className={`absolute -top-2 -right-2 w-6 h-6 ${category.color} rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100`}>
                                <i className="fas fa-arrow-right text-white text-xs"></i>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Enhanced CTA Section */}
                {/* <div className="text-center">
                    <div className="bg-gradient-to-r from-primary/10 via-blue-500/10 to-purple-500/10 rounded-3xl p-8 max-w-4xl mx-auto backdrop-blur-sm border border-white/20">
                        <h4 className="text-2xl font-bold text-gray-900 mb-4">
                            Can't Find What You're Looking For?
                        </h4>
                        <p className="text-gray-600 mb-6 text-lg">
                            Explore more categories or use our advanced search to find exactly what you need.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                            <button className="bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg">
                                <i className="fas fa-th-large mr-2"></i>
                                View All Categories
                            </button>
                            <button className="bg-white hover:bg-gray-50 text-primary border-2 border-primary font-semibold py-3 px-8 rounded-xl transition-all duration-200 transform hover:scale-105">
                                <i className="fas fa-search mr-2"></i>
                                Advanced Search
                            </button>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    )
}

export default Categories