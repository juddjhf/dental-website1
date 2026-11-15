import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { SmileLogo } from './Shared'

const links = [
  ['Home', '/'], ['About', '/about'], ['Services', '/services'],
  ['Our Doctors', '/doctors'], ['Testimonials', '/testimonials'], ['Contact', '/contact'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const closeMenu = () => setOpen(false)
  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <Link to="/" className="brand" onClick={closeMenu}><SmileLogo /><span>smilecare<span className="brand-dot">.</span><small>DENTAL CLINIC</small></span></Link>
        <button className="menu-toggle" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        <div className={`nav-content${open ? ' is-open' : ''}`}>
          <div className="nav-links">{links.map(([label, path]) => <NavLink key={path} to={path} end={path === '/'} onClick={closeMenu}>{label}</NavLink>)}</div>
          <Link to="/appointment" className="button button-primary nav-cta" onClick={closeMenu}>Book a visit <span>↗</span></Link>
        </div>
      </nav>
    </header>
  )
}
