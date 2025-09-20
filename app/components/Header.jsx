'use client'
import React, { useState } from 'react'
import { FaSearchLocation, FaBars, FaTimes } from 'react-icons/fa'

const navLinks = [
    { name: 'Business Listing', href: '#' },
    { name: 'B2B', href: '#' },
    { name: 'Advertise', href: '#' },
]

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 sticky top-0 z-50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <h1 className="text-2xl font-bold gradient-text animate-slide-in-left flex items-center gap-2">
                            <FaSearchLocation className="text-primary animate-float" />
                            JustFind
                        </h1>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-700 hover:text-primary px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-gray-50 hover:scale-105"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#"
                                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg text-sm font-medium shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
                            >
                                Sign In
                            </a>
                        </div>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-700 hover:text-primary p-2 rounded-lg transition-all duration-300 hover:bg-gray-50"
                        >
                            {isMobileMenuOpen ? (
                                <FaTimes className="text-xl transition-transform duration-300" />
                            ) : (
                                <FaBars className="text-xl transition-transform duration-300" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="md:hidden animate-slide-in-up">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg shadow-lg mt-2 border border-gray-100">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-700 hover:text-primary block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-gray-50"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#"
                                className="bg-red-600 hover:bg-red-700 text-white block px-4 py-3 rounded-lg text-sm font-medium text-center transition-all duration-300"
                            >
                                Sign In
                            </a>


                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header
