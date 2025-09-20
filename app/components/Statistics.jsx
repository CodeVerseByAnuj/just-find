'use client';
import React, { useState, useEffect } from 'react';
import { Container } from './ui/Container';

function Statistics() {
  const [isVisible, setIsVisible] = useState(false);
  
  const stats = [
    {
      id: 1,
      number: 50000,
      suffix: '+',
      label: 'Verified Businesses',
      icon: 'fas fa-store',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      id: 2,
      number: 2000000,
      suffix: '+',
      label: 'Happy Customers',
      icon: 'fas fa-users',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      id: 3,
      number: 1500000,
      suffix: '+',
      label: 'Reviews & Ratings',
      icon: 'fas fa-star',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100'
    },
    {
      id: 4,
      number: 500,
      suffix: '+',
      label: 'Cities Covered',
      icon: 'fas fa-map-marked-alt',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    }
  ];

  const [animatedNumbers, setAnimatedNumbers] = useState(
    stats.reduce((acc, stat) => {
      acc[stat.id] = 0;
      return acc;
    }, {})
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('statistics-section');
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
    if (isVisible) {
      stats.forEach((stat) => {
        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = stat.number / steps;
        let currentStep = 0;

        const timer = setInterval(() => {
          currentStep++;
          const currentValue = Math.min(
            Math.floor(increment * currentStep),
            stat.number
          );
          
          setAnimatedNumbers(prev => ({
            ...prev,
            [stat.id]: currentValue
          }));

          if (currentStep >= steps) {
            clearInterval(timer);
          }
        }, duration / steps);
      });
    }
  }, [isVisible]);

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K';
    }
    return num.toString();
  };

  return (
    <section 
      id="statistics-section"
      className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl"></div>
      </div>

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by Millions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join the fastest-growing community of business seekers and discover 
            why millions trust us to find the perfect local services.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:scale-105"
            >
              {/* Icon */}
              <div className={`w-16 h-16 ${stat.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${stat.icon} ${stat.color} text-2xl`}></i>
              </div>

              {/* Number */}
              <div className="mb-4">
                <span className="text-4xl md:text-5xl font-bold text-gray-900">
                  {formatNumber(animatedNumbers[stat.id] || 0)}
                  <span className={stat.color}>{stat.suffix}</span>
                </span>
              </div>

              {/* Label */}
              <p className="text-gray-600 font-medium text-lg">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-primary/80 text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Find Your Perfect Business?
            </h3>
            <p className="text-xl text-gray-100 mb-6">
              Join millions of satisfied customers and discover amazing local services today.
            </p>
            <button className="bg-white text-primary hover:bg-gray-50 font-semibold py-4 px-8 rounded-xl transition-colors duration-200 text-lg">
              Get Started Now
              <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Statistics;