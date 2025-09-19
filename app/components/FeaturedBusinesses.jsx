import React from 'react'

const businessesList = [
  {
    id: 1,
    name: 'Taj Hotel Mumbai',
    category: 'Hotels',
    rating: 4.8,
    reviews: 1248,
    address: 'Apollo Bunder, Mumbai',
    phone: '+91 22 6665 3366',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&h=200&fit=crop',
    verified: true
  },
  {
    id: 2,
    name: 'Spice Garden Restaurant',
    category: 'Restaurants',
    rating: 4.5,
    reviews: 892,
    address: 'Bandra West, Mumbai',
    phone: '+91 22 2640 7890',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&h=200&fit=crop',
    verified: true
  },
  {
    id: 3,
    name: 'Apollo Health Centre',
    category: 'Healthcare',
    rating: 4.7,
    reviews: 564,
    address: 'Andheri East, Mumbai',
    phone: '+91 22 2821 5555',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=300&h=200&fit=crop',
    verified: true
  }
]

function FeaturedBusinesses() {
    return (
        <section class="py-12 bg-gray-100">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-10">
                    <h3 class="text-3xl font-bold text-gray-900 mb-4">Featured Businesses</h3>
                    <p class="text-gray-600 text-lg">Top-rated businesses in your area</p>
                </div>

                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {businessesList.map(business => (
                        <div key={business.id} class="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
                            <div class="relative">
                                <img
                                    src={business.image}
                                    alt={business.name}
                                    class="w-full h-48 object-cover rounded-t-lg"
                                />
                                {business.verified && (
                                    <div class="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
                                        <i class="fas fa-check-circle mr-1"></i>
                                        Verified
                                    </div>
                                )}
                            </div>

                            <div class="p-6">
                                <div class="flex justify-between items-start mb-2">
                                    <h4 class="text-xl font-semibold text-gray-900">{business.name}</h4>
                                    <div class="flex items-center">
                                        <i class="fas fa-star text-yellow-400 mr-1"></i>
                                        <span class="text-sm font-medium">{business.rating}</span>
                                    </div>
                                </div>

                                <p class="text-primary text-sm font-medium mb-2">{business.category}</p>

                                <div class="flex items-center text-gray-600 text-sm mb-2">
                                    <i class="fas fa-map-marker-alt mr-2"></i>
                                    <span>{business.address}</span>
                                </div>

                                <div class="flex items-center text-gray-600 text-sm mb-4">
                                    <i class="fas fa-phone mr-2"></i>
                                    <span>{business.phone}</span>
                                </div>

                                <div class="flex items-center justify-between">
                                    <span class="text-sm text-gray-500">{business.reviews} reviews</span>
                                    <div class="space-x-2">
                                        <button class="text-primary hover:text-primary-dark">
                                            <i class="fas fa-phone"></i>
                                        </button>
                                        <button class="text-primary hover:text-primary-dark">
                                            <i class="fas fa-directions"></i>
                                        </button>
                                        <button class="text-primary hover:text-primary-dark">
                                            <i class="fas fa-heart"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div class="text-center mt-8">
                    <button class="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-lg transition duration-200">
                        View More Businesses
                    </button>
                </div>
            </div>
        </section>
    )
}

export default FeaturedBusinesses