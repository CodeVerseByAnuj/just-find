import React from 'react'

const categoriesList = [
  { id: 1, name: 'Restaurants', icon: 'fas fa-utensils', count: '12,500+', color: 'bg-red-500' },
  { id: 2, name: 'Hotels', icon: 'fas fa-bed', count: '8,200+', color: 'bg-blue-500' },
  { id: 3, name: 'Beauty & Spa', icon: 'fas fa-spa', count: '6,800+', color: 'bg-pink-500' },
  { id: 4, name: 'Healthcare', icon: 'fas fa-hospital', count: '9,500+', color: 'bg-green-500' },
  { id: 5, name: 'Education', icon: 'fas fa-graduation-cap', count: '4,300+', color: 'bg-purple-500' },
  { id: 6, name: 'Automobile', icon: 'fas fa-car', count: '7,100+', color: 'bg-orange-500' },
  { id: 7, name: 'Real Estate', icon: 'fas fa-home', count: '5,600+', color: 'bg-indigo-500' },
  { id: 8, name: 'Travel', icon: 'fas fa-plane', count: '3,900+', color: 'bg-teal-500' },
  { id: 9, name: 'Fitness', icon: 'fas fa-dumbbell', count: '2,800+', color: 'bg-yellow-500' },
  { id: 10, name: 'Shopping', icon: 'fas fa-shopping-cart', count: '11,200+', color: 'bg-gray-500' },
  { id: 11, name: 'Entertainment', icon: 'fas fa-film', count: '4,700+', color: 'bg-red-400' },
  { id: 12, name: 'Professional Services', icon: 'fas fa-briefcase', count: '8,900+', color: 'bg-blue-400' }
]

function Categories() {
    return (
        <section class="py-12">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-10">
                    <h3 class="text-3xl font-bold text-gray-900 mb-4">Popular Categories</h3>
                    <p class="text-gray-600 text-lg">Explore businesses across various categories</p>
                </div>

                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                    {categoriesList.map(category => (
                        <div
                            key={category.id}
                            class="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 cursor-pointer group"
                            data-category={category.name}
                        >
                            <div class="p-6 text-center">
                                <div class={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition duration-300`}>
                                    <i class={`${category.icon} text-white text-2xl`}></i>
                                </div>
                                <h4 class="font-semibold text-gray-900 mb-2">{category.name}</h4>
                                <p class="text-sm text-gray-500">{category.count}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Categories