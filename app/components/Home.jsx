import Layout from "./Layout";
import Heoro from "./Heoro";
import Categories from "./Categories";
import FeaturedBusinesses from "./FeaturedBusinesses";
import Testimonials from "./Testimonials";
import FAQ from "./FAQ";
import ContactForm from "./ContactForm";

function Home() {
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

export default Home
