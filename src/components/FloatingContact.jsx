import { MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function FloatingContact() {
  return <Link to="/contact" className="floating-contact" aria-label="Contact SmileCare"><MessageCircle size={21} /><span>Get in touch</span></Link>
}
