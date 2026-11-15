import TestimonialCard from '../components/TestimonialCard'
import SectionHeading from '../components/SectionHeading'
import { AppointmentCTA, DemoNotice, PageIntro } from '../components/Shared'
import { testimonials } from '../data/testimonials'

export default function Testimonials() {
  return <>
    <PageIntro eyebrow="A little love for the demo" title="Kind words, warm smiles." description="These sample reviews are fictional and included to show how patient stories could look on a real clinic website." />
    <section className="section"><div className="container"><DemoNotice /><SectionHeading eyebrow="Fictional sample reviews" title="A visit worth smiling about." description="A welcoming experience is made up of lots of little moments." centered /><div className="testimonial-grid reviews-grid">{testimonials.map((testimonial) => <TestimonialCard key={testimonial.name} testimonial={testimonial} />)}</div><p className="medical-disclaimer">All reviews, names, locations, and ratings on this page are fictional demo content. They are not real patient testimonials or claims of patient outcomes.</p></div></section>
    <AppointmentCTA />
  </>
}
