import React from 'react'

function Header() {
    return (
        <header class="bg-white shadow-md sticky top-0 z-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                            <h1 class="text-2xl font-bold text-primary">
                                <i class="fas fa-search-location mr-2"></i>
                                JustFind
                            </h1>
                        </div>
                    </div>

                    <nav class="hidden md:block">
                        <div class="ml-10 flex items-baseline space-x-4">
                            <a href="#" class="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Business Listing</a>
                            <a href="#" class="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">B2B</a>
                            <a href="#" class="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Advertise</a>
                            <a href="#" class="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-dark">Sign In</a>
                        </div>
                    </nav>

                    <div class="md:hidden">
                        <button class="text-gray-700 hover:text-primary">
                            <i class="fas fa-bars text-xl"></i>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header