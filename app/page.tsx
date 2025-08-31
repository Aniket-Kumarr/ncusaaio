import Hero from '@/components/Hero'
import Features from '@/components/Features'
import About from '@/components/About'
import Presidents from '@/components/Presidents'
import Events from '@/components/Events'
import Team from '@/components/Team'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Presidents />
      <Events />
      <Team />
      <Contact />
      <Footer />
    </main>
  )
}
