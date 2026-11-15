import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingContact from './components/FloatingContact'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Doctors from './pages/Doctors'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'
import Appointment from './pages/Appointment'
import NotFound from './pages/NotFound'

function PageFrame({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.28 }}
    >
      {children}
    </motion.main>
  )
}

export default function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname])

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageFrame><Home /></PageFrame>} />
          <Route path="/about" element={<PageFrame><About /></PageFrame>} />
          <Route path="/services" element={<PageFrame><Services /></PageFrame>} />
          <Route path="/doctors" element={<PageFrame><Doctors /></PageFrame>} />
          <Route path="/testimonials" element={<PageFrame><Testimonials /></PageFrame>} />
          <Route path="/contact" element={<PageFrame><Contact /></PageFrame>} />
          <Route path="/appointment" element={<PageFrame><Appointment /></PageFrame>} />
          <Route path="*" element={<PageFrame><NotFound /></PageFrame>} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <FloatingContact />
    </>
  )
}
