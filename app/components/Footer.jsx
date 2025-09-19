import React from 'react'

function Footer() {
    return (
        <footer class="bg-secondary text-white py-12">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <h5 class="text-xl font-bold mb-4">
                            <i class="fas fa-search-location mr-2"></i>
                            JustFind
                        </h5>
                        <p class="text-gray-300 mb-4">India's premier business directory connecting customers with local businesses.</p>
                        <div class="flex space-x-4">
                            <a href="#" class="text-gray-300 hover:text-white"><i class="fab fa-facebook text-xl"></i></a>
                            <a href="#" class="text-gray-300 hover:text-white"><i class="fab fa-twitter text-xl"></i></a>
                            <a href="#" class="text-gray-300 hover:text-white"><i class="fab fa-instagram text-xl"></i></a>
                            <a href="#" class="text-gray-300 hover:text-white"><i class="fab fa-linkedin text-xl"></i></a>
                        </div>
                    </div>

                    <div>
                        <h6 class="text-lg font-semibold mb-4">Quick Links</h6>
                        <ul class="space-y-2">
                            <li><a href="#" class="text-gray-300 hover:text-white">About Us</a></li>
                            <li><a href="#" class="text-gray-300 hover:text-white">Contact</a></li>
                            <li><a href="#" class="text-gray-300 hover:text-white">Privacy Policy</a></li>
                            <li><a href="#" class="text-gray-300 hover:text-white">Terms of Service</a></li>
                        </ul>
                    </div>

                    <div>
                        <h6 class="text-lg font-semibold mb-4">For Business</h6>
                        <ul class="space-y-2">
                            <li><a href="#" class="text-gray-300 hover:text-white">List Your Business</a></li>
                            <li><a href="#" class="text-gray-300 hover:text-white">Advertise</a></li>
                            <li><a href="#" class="text-gray-300 hover:text-white">B2B Solutions</a></li>
                            <li><a href="#" class="text-gray-300 hover:text-white">Analytics</a></li>
                        </ul>
                    </div>

                    <div>
                        <h6 class="text-lg font-semibold mb-4">Contact Info</h6>
                        <div class="space-y-2 text-gray-300">
                            <p><i class="fas fa-phone mr-2"></i> 1800-123-4567</p>
                            <p><i class="fas fa-envelope mr-2"></i> support@justfind.com</p>
                            <p><i class="fas fa-map-marker-alt mr-2"></i> Mumbai, India</p>
                        </div>
                    </div>
                </div>

                <div class="border-t border-gray-600 mt-8 pt-8 text-center">
                    <p class="text-gray-300">&copy; 2024 JustFind. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer