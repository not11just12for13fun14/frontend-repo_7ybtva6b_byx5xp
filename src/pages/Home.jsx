import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import FeaturedModels from '../components/FeaturedModels'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <div className="bg-emerald-50/10 min-h-screen">
      <Navbar/>
      <Hero/>
      <FeaturedModels/>
      <Footer/>
    </div>
  )
}
