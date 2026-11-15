import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
  return <section className="not-found"><span className="eyebrow">404 · Page not found</span><h1>Looks like this page took a detour.</h1><p>Let’s get you back to somewhere that makes you smile.</p><Link to="/" className="button button-primary">Back to home <ArrowRight size={17} /></Link></section>
}
