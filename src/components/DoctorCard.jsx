import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function DoctorCard({ doctor }) {
  return (
    <article className="doctor-card">
      <div className="doctor-photo">
        <img src={doctor.image} alt={`Fictional demo portrait of ${doctor.name}`} loading="lazy" onError={(event) => { event.currentTarget.src = 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80' }} />
        <span className="photo-label">Demo profile</span>
      </div>
      <div className="doctor-info">
        <div className="doctor-title"><div><h3>{doctor.name}</h3><span>{doctor.qualification} · Fictional demo profile</span></div></div>
        <p className="doctor-specialty">{doctor.specialization}</p>
        <p className="doctor-exp">{doctor.experience}</p>
        <p>{doctor.bio}</p>
        <Link to="/appointment" className="text-link">Request a visit <ArrowUpRight size={16} /></Link>
      </div>
    </article>
  )
}
