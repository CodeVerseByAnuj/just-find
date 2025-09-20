import React from 'react'
import Layout from './components/Layout'
import Heoro from './components/Heoro'
import Categories from './components/Categories'
import FeaturedBusinesses from './components/FeaturedBusinesses'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import ContactForm from './components/ContactForm'

function HomePage() {
  return (
    <Layout>
      <h2 className="text-3xl font-bold mb-4 text-center">Welcome to JustFind</h2>
      <p className="text-gray-700 text-center mb-8">Your B2B marketplace and business directory.</p>
      <Heoro/>
      <Categories/>
      <FeaturedBusinesses/>
      <Testimonials/>
      <FAQ/>
      <ContactForm/>
    </Layout>
  )
}

export default HomePage