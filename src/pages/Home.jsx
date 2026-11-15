import { ArrowRight, BadgeCheck, HeartHandshake, MonitorSmartphone, ShieldCheck, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import DoctorCard from '../components/DoctorCard'
import TestimonialCard from '../components/TestimonialCard'
import SectionHeading from '../components/SectionHeading'
import { AppointmentCTA, DemoNotice, Reveal } from '../components/Shared'
import { services } from '../data/services'
import { doctors } from '../data/doctors'
import { testimonials } from '../data/testimonials'

const values = [
  { icon: HeartHandshake, title: 'Care that listens', text: 'Your goals and questions always have a place in the conversation.' },
  { icon: MonitorSmartphone, title: 'Modern, thoughtful care', text: 'A fresh approach with tools that support a clear, comfortable visit.' },
  { icon: ShieldCheck, title: 'Comfort comes first', text: 'We want you to feel informed, welcome, and at ease from the start.' },
]

export default function Home() {
  return <>
    <Hero />
    <div className="trust-strip"><div className="container trust-items"><div><BadgeCheck /><strong>Personalized care</strong><span>Made around you</span></div><div><ShieldCheck /><strong>Comfort-first visits</strong><span>A welcoming space</span></div><div><Sparkles /><strong>Modern approach</strong><span>Thoughtful technology</span></div><DemoNotice /></div></div>
    <section className="trust-stats" aria-label="Illustrative demo trust metrics"><div className="container trust-stats-grid"><div><strong>5.0<span>/5</span></strong><small>Sample review rating</small></div><div><strong>6</strong><small>Fictional sample reviews</small></div><div><strong>3</strong><small>Fictional provider profiles</small></div></div><p>Illustrative demo metrics only — not real patient or clinic data.</p></section>
    <section className="section section-services"><div className="container"><Reveal><SectionHeading eyebrow="What we do" title="Care for every kind of smile" description="From the everyday essentials to the little details that make you smile, we’re here for all of it." centered /></Reveal><div className="service-grid">{services.slice(0, 4).map((service) => <Reveal key={service.title}><ServiceCard service={service} /></Reveal>)}</div><div className="section-link"><Link to="/services" className="button button-outline">Explore all services <ArrowRight size={17} /></Link></div></div></section>
    <section className="section about-preview" id="our-approach"><div className="container split-layout"><Reveal className="about-image-wrap"><img src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1100&q=85" alt="Dentist talking with a patient in a bright, modern clinic" loading="lazy" /><div className="image-caption"><span className="caption-icon"><HeartHandshake size={20} /></span><span><strong>People first, always</strong><small>Our approach to care</small></span></div></Reveal><Reveal><div className="about-copy"><span className="eyebrow">A little different, by design</span><h2>Care that feels as good as it looks.</h2><p>We believe a great dental visit is about more than the chair. It’s the thoughtful details, the warm hello, and the confidence that you’ll always know what comes next.</p><div className="value-list">{values.slice(0, 2).map(({ icon: Icon, title, text }) => <div key={title}><span className="value-icon"><Icon size={20} /></span><span><strong>{title}</strong><small>{text}</small></span></div>)}</div><Link to="/about" className="text-link">Get to know us <ArrowRight size={17} /></Link></div></Reveal></div></section>
    <section className="section team-preview"><div className="container"><Reveal><SectionHeading eyebrow="Meet your care team" title="Good people. Great care." description="Get to know the friendly faces behind your smile." centered /></Reveal><div className="doctor-grid">{doctors.slice(0, 2).map((doctor) => <Reveal key={doctor.name}><DoctorCard doctor={doctor} /></Reveal>)}</div><div className="section-link"><Link to="/doctors" className="text-link">Meet our full team <ArrowRight size={17} /></Link></div></div></section>
    <section className="section why-section"><div className="container"><Reveal><SectionHeading eyebrow="The SmileCare difference" title="A little more care in every detail." description="The small things matter. We bring them together to make your experience feel a little easier." centered /></Reveal><div className="why-grid">{values.map(({ icon: Icon, title, text }) => <Reveal key={title}><article className="why-card"><div className="why-icon"><Icon size={23} /></div><h3>{title}</h3><p>{text}</p></article></Reveal>)}</div></div></section>
    <section className="section testimonials-preview"><div className="container"><Reveal><SectionHeading eyebrow="Kind words, just for the demo" title="A visit worth smiling about." description="These fictional sample reviews show the kind of experience we hope to create." centered /></Reveal><div className="testimonial-grid">{testimonials.slice(0, 3).map((testimonial) => <Reveal key={testimonial.name}><TestimonialCard testimonial={testimonial} /></Reveal>)}</div><div className="section-link"><Link to="/testimonials" className="text-link">Read more sample reviews <ArrowRight size={17} /></Link></div></div></section>
    <AppointmentCTA />
  </>
}
