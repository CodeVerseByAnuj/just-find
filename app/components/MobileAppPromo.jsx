'use client';
import React, { useState, useEffect } from 'react';
import { Container } from './ui/Container';

function MobileAppPromo() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      id: 1,
      title: 'Find Instantly',
      description: 'Discover businesses near you with GPS-powered search',
      icon: 'fas fa-search-location',
      color: 'text-blue-500'
    },
    {
      id: 2,
      title: 'Read Reviews',
      description: 'Make informed decisions with verified customer reviews',
      icon: 'fas fa-star',
      color: 'text-yellow-500'
    },
    {
      id: 3,
      title: 'Get Directions',
      description: 'Navigate to your destination with integrated maps',
      icon: 'fas fa-route',
      color: 'text-green-500'
    },
    {
      id: 4,
      title: 'Save Favorites',
      description: 'Bookmark your favorite places for quick access',
      icon: 'fas fa-heart',
      color: 'text-red-500'
    }
  ];

  const appStats = [
    { label: 'Downloads', value: '2M+', icon: 'fas fa-download' },
    { label: 'Rating', value: '4.8', icon: 'fas fa-star' },
    { label: 'Reviews', value: '50K+', icon: 'fas fa-comment' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('mobile-app-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section 
      id="mobile-app-section"
      className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="text-white">
            {/* Header */}
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Take Your Search
                <span className="block bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                  On The Go
                </span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Download our mobile app and discover local businesses anytime, anywhere. 
                Get instant access to reviews, directions, and contact information.
              </p>

              {/* App Stats */}
              <div className="flex space-x-8 mb-8">
                {appStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <i className={`${stat.icon} text-primary mr-2`}></i>
                      <span className="text-2xl font-bold">{stat.value}</span>
                    </div>
                    <p className="text-sm text-gray-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-8">Key Features</h3>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div
                    key={feature.id}
                    className={`flex items-start space-x-4 p-4 rounded-xl transition-all duration-500 ${
                      currentFeature === index 
                        ? 'bg-white/10 border border-white/20 transform scale-105' 
                        : 'hover:bg-white/5'
                    }`}
                  >
                    <div className={`w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      currentFeature === index ? 'scale-110' : ''
                    } transition-transform duration-300`}>
                      <i className={`${feature.icon} ${feature.color} text-xl`}></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Download Buttons */}
            <div className="space-y-4">
              <p className="text-lg font-semibold mb-4">Download Now:</p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                {/* App Store Button */}
                <button className="group flex items-center bg-white text-gray-900 hover:bg-gray-100 px-6 py-4 rounded-xl transition-all duration-300 transform hover:scale-105">
                  <div className="mr-4">
                    <i className="fab fa-apple text-2xl"></i>
                  </div>
                  <div className="text-left">
                    <p className="text-xs">Download on the</p>
                    <p className="text-lg font-semibold">App Store</p>
                  </div>
                </button>

                {/* Google Play Button */}
                <button className="group flex items-center bg-white text-gray-900 hover:bg-gray-100 px-6 py-4 rounded-xl transition-all duration-300 transform hover:scale-105">
                  <div className="mr-4">
                    <i className="fab fa-google-play text-2xl"></i>
                  </div>
                  <div className="text-left">
                    <p className="text-xs">Get it on</p>
                    <p className="text-lg font-semibold">Google Play</p>
                  </div>
                </button>
              </div>
            </div>

            {/* QR Code Section */}
            <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                  <i className="fas fa-qrcode text-gray-900 text-2xl"></i>
                </div>
                <div>
                  <p className="font-semibold mb-1">Scan QR Code</p>
                  <p className="text-sm text-gray-300">Quick download link</p>
                </div>
              </div>
            </div>
          </div>

          {/* Phone Mockup Side */}
          <div className="relative">
            {/* Phone Frame */}
            <div className="relative mx-auto w-80 h-160 max-w-sm">
              {/* Phone Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl transform rotate-6 hover:rotate-3 transition-transform duration-500"></div>
              
              {/* Phone Screen */}
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
                {/* Screen Header */}
                <div className="bg-primary text-white p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-bold">JustFind</h4>
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                      <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3">
                    <div className="flex items-center">
                      <i className="fas fa-search text-white/70 mr-3"></i>
                      <span className="text-white/70">Search businesses...</span>
                    </div>
                  </div>
                </div>

                {/* Screen Content */}
                <div className="p-6 h-96 bg-gray-50">
                  {/* Sample Business Cards */}
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="bg-white rounded-lg shadow-sm mb-4 p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                          <i className="fas fa-utensils text-primary"></i>
                        </div>
                        <div className="flex-1">
                          <h5 className="font-semibold text-gray-900">Restaurant Name</h5>
                          <p className="text-sm text-gray-500">0.5 km away</p>
                          <div className="flex items-center mt-1">
                            <div className="flex text-yellow-400">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <i key={star} className="fas fa-star text-xs"></i>
                              ))}
                            </div>
                            <span className="text-xs text-gray-500 ml-2">4.8 (120)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white transform animate-bounce">
                <i className="fas fa-download"></i>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white transform animate-pulse">
                <i className="fas fa-star"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Join 2+ Million Users Today
            </h3>
            <p className="text-gray-300 mb-6">
              Experience the future of local business discovery with our award-winning mobile app.
            </p>
            <button className="bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-200 transform hover:scale-105">
              Download Free App
              <i className="fas fa-mobile-alt ml-2"></i>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default MobileAppPromo;