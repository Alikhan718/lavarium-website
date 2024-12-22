import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import Gallery from '@/components/Gallery'
import BathDescription from '@/components/BathDescription'
import PriceList from '@/components/PriceList'
import Promotions from '@/components/Promotions'
import Cuisine from '@/components/Cuisine'
import AttractionText from '@/components/AttractionText'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-inverse text-secondary">
      <Header />
      <main>
        <Hero />
        <Services />
        <BathDescription />
        <Gallery />
        <PriceList />
        <Promotions />
        <Cuisine />
        <Testimonials />
        <AttractionText />
      </main>
      <Footer />
    </div>
  )
}

