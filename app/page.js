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