import { ArrowRight, ArrowUp, Check, Clock3, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export function SmileLogo() {
  return <span className="logo-mark"><svg viewBox="0 0 24 24" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7.3 3.2c-2.4 0-4.1 1.8-4.1 4.7 0 3.8 2.2 6.1 3.4 9.5.7 2 1.2 3.4 2.2 3.4 1.2 0 1.1-5.8 3.2-5.8s2 5.8 3.2 5.8c1 0 1.5-1.4 2.2-3.4 1.2-3.4 3.4-5.7 3.4-9.5 0-2.9-1.7-4.7-4.1-4.7-1.9 0-2.9 1.1-4.7 1.1S9.2 3.2 7.3 3.2Z" /></svg></span>
}

export function Reveal({ children, className = '' }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.48 }}>{children}</motion.div>
}

export function PageIntro({ eyebrow, title, description, image }) {
  return (
    <section className="page-intro">
      <div className="container page-intro-inner">
        <div><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{description}</p></div>
        {image && <div className="page-intro-image"><img src={image} alt="" /></div>}
      </div>
    </section>
  )
}

export function DemoNotice() {
  return <p className="demo-notice"><span>Demo website</span> — All clinic details, care professionals, reviews, and sample content are fictional.</p>
}

export function AppointmentCTA() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-panel">
          <div><span className="eyebrow eyebrow-light">Your next chapter starts here</span><h2>Ready to feel good about your smile?</h2><p>Tell us what you’re looking for. Our demo team would love to hear from you.</p></div>
          <Link to="/appointment" className="button button-white">Request an appointment <ArrowRight size={17} /></Link>
          <div className="cta-decoration">S</div>
        </div>
      </div>
    </section>
  )
}

export function ContactDetails() {
  return <div className="contact-details">
    <div><MapPin size={19} /><span><strong>Demo address</strong>1200 Westlake Ave, Suite 200<br />Austin, TX 78701</span></div>
    <div><Phone size={19} /><span><strong>Demo phone</strong><a href="tel:+15125550184">(512) 555-0184</a></span></div>
    <div><Clock3 size={19} /><span><strong>Sample hours</strong>Mon–Fri, 8:00 am–5:00 pm</span></div>
  </div>
}

export function SuccessMessage({ title = 'Thanks for reaching out!' }) {
  return <div className="form-success" role="status"><span><Check size={22} /></span><h3>{title}</h3><p>This is a demo interaction only. No real appointment or message has been sent.</p></div>
}

export function BackToTop() {
  return <button type="button" className="back-top" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><ArrowUp size={18} /></button>
}
