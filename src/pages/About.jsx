import { HeartHandshake, Lightbulb, ShieldCheck, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import { AppointmentCTA, DemoNotice, PageIntro, Reveal } from '../components/Shared'

const values = [
  { icon: HeartHandshake, title: 'Kindness, always', text: 'We meet every person with patience, warmth, and respect.' },
  { icon: Lightbulb, title: 'Clarity over confusion', text: 'Clear explanations help you make choices with confidence.' },
  { icon: ShieldCheck, title: 'Care you can trust', text: 'We value thoughtful recommendations and honest conversations.' },
  { icon: Sparkles, title: 'Comfort in the details', text: 'A calm space and considerate touches make a difference.' },
]

export default function About() {
  return <>
    <PageIntro eyebrow="The people behind the smiles" title="A dental visit with a little more heart." description="SmileCare is a fictional clinic concept built around a simple idea: thoughtful care should feel personal, clear, and comfortable." image="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1000&q=85" />
    <div className="container"><DemoNotice /></div>
    <section className="section"><div className="container split-layout about-story"><Reveal><div className="about-copy"><span className="eyebrow">Our story</span><h2>Good care begins with a good conversation.</h2><p>We imagined a neighborhood practice where patients are welcomed as people—not appointments on a schedule. Every detail is designed to make it easier to ask questions, understand your options, and feel at home.</p><p>This website is a fictional demonstration. Clinic details and team profiles are illustrative only.</p><Link to="/services" className="text-link">Explore our services <span>→</span></Link></div></Reveal><Reveal className="about-image-wrap"><img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1100&q=85" alt="Contemporary dental clinic interior" loading="lazy" /></Reveal></div></section>
    <section className="section mission-section"><div className="container mission-grid"><Reveal><div className="mission-card"><span className="eyebrow">Our mission</span><h2>Make every smile feel cared for.</h2><p>To offer a thoughtful, welcoming experience where clear communication and comfort are part of every visit.</p></div></Reveal><Reveal><div className="mission-card mission-blue"><span className="eyebrow">Our vision</span><h2>A healthier relationship with dental care.</h2><p>We imagine a world where people feel supported, informed, and confident about their next step.</p></div></Reveal></div></section>
    <section className="section"><div className="container"><Reveal><SectionHeading eyebrow="What matters to us" title="Our values, in every visit." description="The principles we’d bring to every conversation and every smile." centered /></Reveal><div className="why-grid values-grid">{values.map(({ icon: Icon, title, text }) => <Reveal key={title}><article className="why-card"><div className="why-icon"><Icon size={23} /></div><h3>{title}</h3><p>{text}</p></article></Reveal>)}</div></div></section>
    <section className="section tech-section"><div className="container split-layout"><Reveal className="about-image-wrap"><img src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1100&q=85" alt="Modern dental equipment in a clinic" loading="lazy" /></Reveal><Reveal><div className="about-copy"><span className="eyebrow">Modern, with intention</span><h2>Technology that supports a more thoughtful visit.</h2><p>Contemporary tools can help dental professionals plan care and explain what they see. The goal is never technology for its own sake—it’s helping you feel more informed and comfortable.</p><p>Specific tools and treatment options depend on the provider and individual clinical needs.</p></div></Reveal></div></section>
    <AppointmentCTA />
  </>
}
