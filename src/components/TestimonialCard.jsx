import { Quote, Star } from 'lucide-react'

export default function TestimonialCard({ testimonial }) {
  return (
    <article className="testimonial-card">
      <div className="review-stars" aria-label={`${testimonial.rating} out of 5 stars`}>
        {Array.from({ length: testimonial.rating }, (_, index) => <Star key={index} size={16} fill="currentColor" />)}
      </div>
      <Quote className="quote-mark" size={27} />
      <p className="review-quote">“{testimonial.quote}”</p>
      <div className="review-person">
        <div className="avatar">{testimonial.name[0]}</div>
        <div><strong>{testimonial.name}</strong><span>{testimonial.service} · {testimonial.location}</span></div>
      </div>
      <span className="demo-caption">Fictional sample review</span>
    </article>
  )
}
