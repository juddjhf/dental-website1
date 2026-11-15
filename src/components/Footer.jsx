import { Instagram, Linkedin, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { BackToTop, DemoNotice, SmileLogo } from './Shared'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand"><Link to="/" className="brand"><SmileLogo /><span>smilecare<span className="brand-dot">.</span><small>DENTAL CLINIC</small></span></Link><p>Thoughtful care for the smile you’re in. A fictional clinic concept made for demonstration.</p><div className="social-links"><a href="https://www.instagram.com/" aria-label="Instagram"><Instagram size={17} /></a><a href="https://www.linkedin.com/" aria-label="LinkedIn"><Linkedin size={17} /></a></div></div>
        <div className="footer-column"><h3>Explore</h3><Link to="/about">Our story</Link><Link to="/services">Dental services</Link><Link to="/doctors">Meet the team</Link><Link to="/testimonials">Patient stories</Link></div>
        <div className="footer-column"><h3>Popular care</h3><Link to="/services">General dentistry</Link><Link to="/services">Cosmetic dentistry</Link><Link to="/services">Dental implants</Link><Link to="/services">Teeth whitening</Link></div>
        <div className="footer-column footer-contact"><h3>Say hello</h3><span><MapPin size={16} />1200 Westlake Ave, Austin, TX</span><a href="tel:+15125550184"><Phone size={16} />(512) 555-0184 <small>(demo)</small></a><Link to="/contact">Contact our team <span>↗</span></Link><Link to="/appointment" className="footer-book">Request an appointment</Link></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} SmileCare Dental Clinic · Fictional demo website</span><DemoNotice /><span className="footer-legal">Privacy · Accessibility</span></div>
      <BackToTop />
    </footer>
  )
}
