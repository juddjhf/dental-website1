import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ServiceCard({ service }) {
  const Icon = service.icon
  return (
    <article className="service-card">
      <div className="service-icon"><Icon size={24} strokeWidth={1.8} /></div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <Link to={`/services#${service.slug || service.title.toLowerCase().replaceAll(' ', '-')}`} className="text-link">Learn more <ArrowUpRight size={16} /></Link>
    </article>
  )
}
