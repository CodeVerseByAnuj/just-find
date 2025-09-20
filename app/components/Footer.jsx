import React from 'react';

function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div>
              <h5 className="text-2xl font-bold mb-4 flex items-center">
                <i className="fas fa-search-location mr-3 text-primary animate-pulse"></i>
                <span className="gradient-text">JustFind</span>
              </h5>
              <p className="text-gray-300 leading-relaxed">
                India's premier business directory connecting customers with local businesses across the nation.
              </p>
            </div>
            
            {/* Social Media Links */}
            <div className="flex space-x-4">
              {[
                { icon: 'fab fa-facebook', label: 'Facebook', color: 'hover:text-blue-400' },
                { icon: 'fab fa-twitter', label: 'Twitter', color: 'hover:text-blue-300' },
                { icon: 'fab fa-instagram', label: 'Instagram', color: 'hover:text-pink-400' },
                { icon: 'fab fa-linkedin', label: 'LinkedIn', color: 'hover:text-blue-500' }
              ].map((social, index) => (
                <a 
                  key={index}
                  href="#" 
                  className={`group p-3 bg-gray-800/50 rounded-full text-gray-300 ${social.color} 
                    transition-all duration-300 hover:scale-110 hover:bg-gray-700/70 
                    hover:shadow-lg hover:shadow-primary/20`}
                  aria-label={social.label}
                >
                  <i className={`${social.icon} text-lg group-hover:scale-110 transition-transform duration-200`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h6 className="text-lg font-semibold mb-6 text-gray-100 border-b border-gray-700 pb-2">
              Quick Links
            </h6>
            <ul className="space-y-3">
              {['About Us', 'Contact', 'Privacy Policy', 'Terms of Service'].map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-primary transition-all duration-200 
                      hover:translate-x-2 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 opacity-0 
                      group-hover:opacity-100 transition-opacity duration-200"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Section */}
          <div>
            <h6 className="text-lg font-semibold mb-6 text-gray-100 border-b border-gray-700 pb-2">
              For Business
            </h6>
            <ul className="space-y-3">
              {['List Your Business', 'Advertise', 'B2B Solutions', 'Analytics'].map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-secondary transition-all duration-200 
                      hover:translate-x-2 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-secondary rounded-full mr-3 opacity-0 
                      group-hover:opacity-100 transition-opacity duration-200"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h6 className="text-lg font-semibold mb-6 text-gray-100 border-b border-gray-700 pb-2">
              Contact Info
            </h6>
            <div className="space-y-4">
              {[
                { icon: 'fas fa-phone', text: '1800-123-4567', color: 'text-green-400' },
                { icon: 'fas fa-envelope', text: 'support@justfind.com', color: 'text-blue-400' },
                { icon: 'fas fa-map-marker-alt', text: 'Mumbai, India', color: 'text-red-400' }
              ].map((contact, index) => (
                <div key={index} className="flex items-center text-gray-300 group cursor-pointer">
                  <div className={`p-2 rounded-lg ${contact.color} bg-gray-800/50 mr-4 
                    group-hover:bg-gray-700/70 transition-colors duration-200`}>
                    <i className={`${contact.icon} text-sm`}></i>
                  </div>
                  <span className="group-hover:text-white transition-colors duration-200">
                    {contact.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="text-center mb-8">
            <h6 className="text-xl font-semibold text-gray-100 mb-3">
              Stay Updated with JustFind
            </h6>
            <p className="text-gray-400 mb-6">
              Get the latest business insights and directory updates
            </p>
            <div className="flex max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600 
                  rounded-l-lg text-white placeholder-gray-400 focus:outline-none 
                  focus:border-primary focus:bg-gray-800/70 transition-all duration-200"
              />
              <button className="px-6 py-3 bg-primary hover:bg-primary/90 
                text-white font-medium rounded-r-lg transition-all duration-200 
                hover:shadow-lg hover:shadow-primary/30">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">
              &copy; 2024 <span className="text-primary font-semibold">JustFind</span>. 
              All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                Sitemap
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                Cookies
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                Legal
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer