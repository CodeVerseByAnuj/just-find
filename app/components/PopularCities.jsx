'use client';

import React, { useState } from 'react';
import { Container } from './ui/Container';

function PopularCities() {
  const [selectedCity, setSelectedCity] = useState(null);

  const cities = [
    {
      id: 1,
      name: 'Mumbai',
      state: 'Maharashtra',
      businesses: '15,200+',
      image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=400&h=300&fit=crop',
      highlights: ['Gateway of India', 'Marine Drive', 'Bollywood Hub'],
      categories: ['Restaurants', 'Hotels', 'Entertainment', 'Shopping'],
      growth: '+12%'
    },
    {
      id: 2,
      name: 'Delhi',
      state: 'Delhi',
      businesses: '18,500+',
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=300&fit=crop',
      highlights: ['Red Fort', 'India Gate', 'Connaught Place'],
      categories: ['Healthcare', 'Education', 'Government', 'Food'],
      growth: '+15%'
    },
    {
      id: 3,
      name: 'Bangalore',
      state: 'Karnataka',
      businesses: '12,800+',
      image: 'https://images.unsplash.com/photo-1596176530529-78163a4f36d1?w=400&h=300&fit=crop',
      highlights: ['Silicon Valley of India', 'Garden City', 'Tech Hub'],
      categories: ['IT Services', 'Cafes', 'Startups', 'Healthcare'],
      growth: '+20%'
    },
    {
      id: 4,
      name: 'Chennai',
      state: 'Tamil Nadu',
      businesses: '10,500+',
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400&h=300&fit=crop',
      highlights: ['Marina Beach', 'Cultural Capital', 'Auto Hub'],
      categories: ['Manufacturing', 'Healthcare', 'Education', 'Tourism'],
      growth: '+10%'
    },
    {
      id: 5,
      name: 'Pune',
      state: 'Maharashtra',
      businesses: '8,900+',
      image: 'https://images.unsplash.com/photo-1595662848942-28a709bbb94c?w=400&h=300&fit=crop',
      highlights: ['Oxford of East', 'IT Hub', 'Cultural City'],
      categories: ['Education', 'IT', 'Automotive', 'Healthcare'],
      growth: '+18%'
    },
    {
      id: 6,
      name: 'Hyderabad',
      state: 'Telangana',
      businesses: '9,200+',
      image: 'https://images.unsplash.com/photo-1604734869115-68ba6dbefcab?w=400&h=300&fit=crop',
      highlights: ['Cyberabad', 'Pharma City', 'HITEC City'],
      categories: ['Pharma', 'IT', 'Biotechnology', 'Food'],
      growth: '+16%'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Explore Popular Cities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Discover amazing businesses in India's top cities. From bustling metros 
            to emerging business hubs, find what you need wherever you are.
          </p>

          {/* Quick Stats */}
          <div className="flex justify-center items-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center">
              <i className="fas fa-map-marker-alt text-red-500 mr-2"></i>
              <span>500+ Cities</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-building text-blue-500 mr-2"></i>
              <span>50,000+ Businesses</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-chart-line text-green-500 mr-2"></i>
              <span>Growing Daily</span>
            </div>
          </div>
        </div>

        {/* Cities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {cities.map((city) => (
            <div
              key={city.id}
              className="group cursor-pointer"
              onMouseEnter={() => setSelectedCity(city.id)}
              onMouseLeave={() => setSelectedCity(null)}
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-gray-100">
                {/* City Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={city.image}
                    alt={city.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Growth Badge */}
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    <i className="fas fa-trending-up mr-1"></i>
                    {city.growth}
                  </div>

                  {/* City Name Overlay */}
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold">{city.name}</h3>
                    <p className="text-gray-200">{city.state}</p>
                  </div>
                </div>

                {/* City Info */}
                <div className="p-6">
                  {/* Business Count */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <i className="fas fa-store text-primary mr-2"></i>
                      <span className="font-semibold text-gray-900">{city.businesses} Businesses</span>
                    </div>
                    <button className="text-primary hover:text-primary/80 transform hover:scale-110 transition-all">
                      <i className="fas fa-external-link-alt"></i>
                    </button>
                  </div>

                  {/* Highlights */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Popular Areas:</h4>
                    <div className="flex flex-wrap gap-2">
                      {city.highlights.slice(0, 2).map((highlight, index) => (
                        <span
                          key={index}
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Categories */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Top Categories:</h4>
                    <div className="flex flex-wrap gap-2">
                      {city.categories.slice(0, 3).map((category, index) => (
                        <span
                          key={index}
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Explore Button */}
                  <button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white font-semibold py-3 rounded-xl transition-all duration-300 transform group-hover:scale-105">
                    <i className="fas fa-search mr-2"></i>
                    Explore {city.name}
                  </button>
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Location Services Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Find Businesses Anywhere in India
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Whether you're in a major city or a small town, our comprehensive 
                directory helps you discover local businesses, read reviews, and 
                connect with service providers near you.
              </p>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {[
                  { icon: 'fas fa-map-marked-alt', text: 'GPS-based location search' },
                  { icon: 'fas fa-route', text: 'Distance and directions' },
                  { icon: 'fas fa-clock', text: 'Real-time business hours' },
                  { icon: 'fas fa-phone', text: 'Direct contact information' }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                      <i className={`${feature.icon} text-primary text-sm`}></i>
                    </div>
                    <span className="text-gray-700">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="flex-1 bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-xl transition-colors">
                  <i className="fas fa-crosshairs mr-2"></i>
                  Use Current Location
                </button>
                <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-colors">
                  <i className="fas fa-list mr-2"></i>
                  Browse All Cities
                </button>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-2xl p-8 text-center">
                <div className="w-24 h-24 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-6 hover:rotate-0 transition-transform duration-300">
                  <i className="fas fa-map-marked-alt text-white text-3xl"></i>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">500+ Cities</h4>
                <p className="text-gray-600">And growing every day</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default PopularCities;