import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard'
import SectionHeading from '../components/SectionHeading'
import { AppointmentCTA, DemoNotice, PageIntro } from '../components/Shared'
import { services } from '../data/services'

export default function Services() {
  return <>
    <PageIntro eyebrow="Care for your whole smile" title="Good care for every step." description="Explore the services in our fictional clinic concept. A real dental professional can help determine what care is right for you." />
    <section className="section services-page-section"><div className="container"><DemoNotice /><SectionHeading title="Explore our services" description="A thoughtful mix of preventive, restorative, and smile-enhancing care." /><div className="service-grid services-full">{services.map((service) => <div id={service.title.toLowerCase().replaceAll(' ', '-')} key={service.title}><ServiceCard service={service} /></div>)}</div><div className="service-note"><span>Good to know</span><p>All services listed are for demonstration. Treatment recommendations depend on an in-person evaluation by a qualified dental professional.</p><Link to="/appointment" className="text-link">Ask us a question <ArrowRight size={16} /></Link></div></div></section>
    <AppointmentCTA />
  </>
}
