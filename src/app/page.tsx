import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import PillarsSection from '../components/PillarsSection'
import FranchiseSection from '../components/FranchiseSection'
import TestimonialsSection from '../components/TestimonialsSection'
import FAQSection from '../components/FAQSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <HeroSection />
        <AboutSection />
        <PillarsSection />
        <FranchiseSection />
        <TestimonialsSection />
        <FAQSection />
      </main>
      
      <Footer />
    </div>
  )
}