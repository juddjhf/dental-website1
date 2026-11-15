import { ArrowRight, Play, ShieldCheck, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid">
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
          <div className="eyebrow"><span className="eyebrow-dot" /> A brighter kind of dentistry</div>
          <h1>Modern dental care for a <span>brighter smile.</span></h1>
          <p>Thoughtful care, modern technology, and a team that puts you at ease. A healthier smile starts with feeling right at home.</p>
          <div className="hero-actions">
            <Link to="/appointment" className="button button-primary">Request an appointment <ArrowRight size={17} /></Link>
            <button type="button" className="button button-video" onClick={() => document.getElementById('our-approach')?.scrollIntoView({ behavior: 'smooth' })}><span className="play-icon"><Play size={14} fill="currentColor" /></span> Discover our approach</button>
          </div>
          <div className="hero-proof"><div className="proof-icon"><ShieldCheck size={19} /></div><div><strong>Care that feels personal</strong><span>Welcoming visits, clear answers</span></div></div>
        </motion.div>
        <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }}>
          <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1500&q=90" alt="Bright modern dental treatment room" onError={(event) => { event.currentTarget.style.display = 'none' }} />
          <div className="hero-photo-shade" />
          <div className="hero-image-note"><span className="note-icon"><Sparkles size={18} /></span><div><strong>Feel good about your care</strong><span>Comfort comes first here</span></div></div>
          <div className="hero-floating-tag"><span className="live-dot" /> Here for your smile</div>
        </motion.div>
      </div>
    </section>
  )
}
