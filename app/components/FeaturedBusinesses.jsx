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
        <section className="py-12 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Featured Businesses</h3>
                    <p className="text-gray-600 text-lg">Top-rated businesses in your area</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {businessesList.map(business => (
                        <div key={business.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
                            <div className="relative">
                                <img
                                    src={business.image}
                                    alt={business.name}
                                    className="w-full h-48 object-cover rounded-t-lg"
                                />
                                {business.verified && (
                                    <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
                                        <i className="fas fa-check-circle mr-1"></i>
                                        Verified
                                    </div>
                                )}
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="text-xl font-semibold text-gray-900">{business.name}</h4>
                                    <div className="flex items-center">
                                        <i className="fas fa-star text-yellow-400 mr-1"></i>
                                        <span className="text-sm font-medium">{business.rating}</span>
                                    </div>
                                </div>

                                <p className="text-primary text-sm font-medium mb-2">{business.category}</p>

                                <div className="flex items-center text-gray-600 text-sm mb-2">
                                    <i className="fas fa-map-marker-alt mr-2"></i>
                                    <span>{business.address}</span>
                                </div>

                                <div className="flex items-center text-gray-600 text-sm mb-4">
                                    <i className="fas fa-phone mr-2"></i>
                                    <span>{business.phone}</span>
                                </div>

                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500">{business.reviews} reviews</span>
                                    <div className="space-x-2">
                                        <button className="text-primary hover:text-primary-dark">
                                            <i className="fas fa-phone"></i>
                                        </button>
                                        <button className="text-primary hover:text-primary-dark">
                                            <i className="fas fa-directions"></i>
                                        </button>
                                        <button className="text-primary hover:text-primary-dark">
                                            <i className="fas fa-heart"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-8">
                    <button className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-lg transition duration-200">
                        View More Businesses
                    </button>
                </div>
            </div>
        </section>
    )
}

export default FeaturedBusinesses