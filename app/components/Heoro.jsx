'use client';
import React, { useState } from 'react'
import { Section, Container } from './ui/Container'
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaSearch, FaMapMarkerAlt, FaCrosshairs, FaSpinner, FaUtensils, FaBed, FaHospital, FaSpa, FaCheckCircle, FaStar, FaUsers } from 'react-icons/fa'

function Hero() {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  const popularSearches = ['Restaurants', 'Hotels', 'Beauty Salons', 'Gyms', 'Doctors', 'Shopping'];

  const handleSearch = (e) => {
    e.preventDefault();
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  return (
    <Section className="relative overflow-hidden min-h-[450px] flex items-center bg-[hsl(var(--primary))]">
      {/* Background Gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary to-secondary/80"></div>
      <div className="absolute inset-0 bg-black/20"></div> */}

      {/* Floating Background Blurs */}
      <div className="absolute top-16 left-16 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-16 right-16 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <Container className="relative z-10">
        {/* Hero Heading */}
        <div className="text-center text-white mb-12">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Find Your Perfect
            <span className="block bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              Local Business
            </span>
          </h1>
          {/* <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover amazing restaurants, hotels, healthcare services, and more in your city. Connect with trusted local businesses instantly.
          </p> */}

          {/* Trust Indicators */}
          {/* <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-200">
            <div className="flex items-center gap-2"><FaCheckCircle className="text-green-400"/>50,000+ Verified Businesses</div>
            <div className="flex items-center gap-2"><FaStar className="text-yellow-400"/>1M+ Reviews</div>
            <div className="flex items-center gap-2"><FaUsers className="text-blue-400"/>2M+ Happy Users</div>
          </div> */}
          
          {/* Test bg-primary */}
          {/* <div className="bg-primary text-white p-4 rounded-lg mt-4 mx-auto max-w-xs">
            Test: bg-primary working
          </div> */}
        </div>

        {/* Search Form */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto transform hover:scale-105 transition-transform duration-300">
          <form onSubmit={handleSearch} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative group">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors"/>
                <Input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="What are you looking for?"
                  className="pl-12 py-4 text-lg border-2 border-gray-200 focus:border-primary rounded-xl"
                />
              </div>

              <div className="relative group">
                <Input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Enter location or use current"
                  className="pl-12 py-4 text-lg border-2 border-gray-200 focus:border-primary rounded-xl"
                />
                <button type="button" className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary hover:text-primary/80" title="Use current location">
                  <FaCrosshairs />
                </button>
              </div>
            </div>

            {/* <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button
                type="submit"
                size="lg"
                className={`w-full sm:w-auto px-8 py-4 text-lg rounded-xl bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:from-secondary hover:to-primary transition-all duration-300 ${isAnimating ? 'animate-pulse' : ''}`}
                disabled={isAnimating}
              >
                {isAnimating ? <><FaSpinner className="animate-spin mr-2"/> Searching...</> : <><FaSearch className="mr-2"/> Find Businesses</>}
              </Button>

              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-gray-500 text-sm">or try:</span>
                {popularSearches.slice(0,3).map((search, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSearchTerm(search)}
                    className="text-primary hover:text-primary/80 text-sm font-medium border border-primary/20 px-3 py-1 rounded-full hover:bg-primary/5 transition-colors"
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div> */}
          </form>
        </div>

        {/* Quick Actions */}
        {/* <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {[
            { icon: FaUtensils, label: 'Restaurants', color: 'bg-red-500' },
            { icon: FaBed, label: 'Hotels', color: 'bg-blue-500' },
            { icon: FaHospital, label: 'Healthcare', color: 'bg-green-500' },
            { icon: FaSpa, label: 'Beauty & Spa', color: 'bg-pink-500' }
          ].map((action, idx) => {
            const Icon = action.icon;
            return (
              <button key={idx} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-white hover:bg-white/20 transition-all duration-300 group">
                <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform`}>
                  <Icon className="text-white text-lg"/>
                </div>
                <span className="text-sm font-medium">{action.label}</span>
              </button>
            )
          })}
        </div> */}
      </Container>
    </Section>
  )
}

export default Hero
