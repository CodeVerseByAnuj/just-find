import Layout from "./Layout";
import Heoro from "./Heoro";
import Statistics from "./Statistics";
import Categories from "./Categories";
import FeaturedBusinesses from "./FeaturedBusinesses";
import PopularCities from "./PopularCities";
import Testimonials from "./Testimonials";
import MobileAppPromo from "./MobileAppPromo";
import FAQ from "./FAQ";
import ContactForm from "./ContactForm";

function Home() {
    return (
       <Layout>
         {/* Hero Section with Enhanced Search */}
         <Heoro/>
         
         {/* Business Statistics and Trust Indicators */}
         <Statistics/>
         
         {/* Enhanced Categories with Animations */}
         <Categories/>
         
         {/* Featured Businesses Showcase */}
         <FeaturedBusinesses/>
         
         {/* Popular Cities and Location Features */}
         <PopularCities/>
         
         {/* Customer Testimonials */}
         <Testimonials/>
         
         {/* Mobile App Promotion */}
         <MobileAppPromo/>
         
         {/* Frequently Asked Questions */}
         <FAQ/>
         
         {/* Contact Form */}
         <ContactForm/>
       </Layout>
    )
}

export default Home
