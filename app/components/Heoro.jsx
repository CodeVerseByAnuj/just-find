import React from 'react'

function Heoro() {
    return (
        // Search Section Component
       <section class="bg-gradient-to-r from-primary to-primary-dark py-12">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-8">
      <h2 class="text-3xl font-bold text-white mb-4">Find Local Businesses Near You</h2>
      <p class="text-white/90 text-lg">Discover restaurants, hotels, healthcare, and more in your city</p>
    </div>

    <div class="bg-white rounded-lg shadow-lg p-6">
      <form class="space-y-4 md:space-y-0 md:flex md:space-x-4">
        <div class="flex-1">
          <div class="relative">
            <i class="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            <input
              type="text"
              placeholder="What are you looking for?"
              class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg 
                     focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>

        <div class="flex-1">
          <div class="relative">
            <i class="fas fa-map-marker-alt absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            <input
              type="text"
              placeholder="Location"
              class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg 
                     focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>

        <button
          type="submit"
          class="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-lg 
                 transition duration-200 flex items-center justify-center"
        >
          <i class="fas fa-search mr-2"></i>
          Search
        </button>
      </form>
    </div>
  </div>
</section>

    )
}

export default Heoro