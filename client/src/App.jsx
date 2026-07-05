import { useState, useCallback } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Process from './components/Process'
import Portfolio from './components/Portfolio'
// import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import ServiceModal from './components/ServiceModal'
import VideoModal from './components/VideoModal'
import { scrollToContact } from './data/siteData'

export default function App() {
  const [videoProject, setVideoProject] = useState(null)
  const [activeService, setActiveService] = useState(null)
  const [contactPrefill, setContactPrefill] = useState(null)

  const handleRequestService = useCallback((service) => {
    setContactPrefill({
      service: service.id,
      message: `Hi, I'm interested in your ${service.title} service. Please contact me with more details.`,
    })
    scrollToContact()
  }, [])

  return (
    <div className="min-h-screen bg-white text-lumovix-navy antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services onViewService={setActiveService} />
        <Process />
        <Portfolio onPlayVideo={setVideoProject} />
        {/* <Testimonials /> */}
        <FAQ />
        <CTA />
        <Contact prefill={contactPrefill} />
      </main>
      <Footer />

      <WhatsAppFloat />

      <ServiceModal
        service={activeService}
        onClose={() => setActiveService(null)}
        onRequestService={handleRequestService}
      />

      <VideoModal
        project={videoProject}
        onClose={() => setVideoProject(null)}
      />
    </div>
  )
}
