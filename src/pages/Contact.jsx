import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Mail, MapPin, Phone } from 'lucide-react'
import { ContactDetails, DemoNotice, PageIntro, SuccessMessage } from '../components/Shared'

function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm()
  if (submitted) return <SuccessMessage title="Thanks for your note!" />
  return <form className="form-grid contact-form" onSubmit={handleSubmit(() => setSubmitted(true))} noValidate>
    <label>Your name<input placeholder="Your name" {...register('name', { required: 'Please enter your name.' })} />{errors.name && <span className="field-error">{errors.name.message}</span>}</label>
    <label>Email address<input type="email" placeholder="you@example.com" {...register('email', { required: 'Please enter your email.', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email address.' } })} />{errors.email && <span className="field-error">{errors.email.message}</span>}</label>
    <label className="field-full">How can we help?<textarea rows="5" placeholder="Write your message..." {...register('message', { required: 'Please add a message.' })} />{errors.message && <span className="field-error">{errors.message.message}</span>}</label>
    <button className="button button-primary field-full" type="submit">Send a demo inquiry <span>→</span></button>
    <p className="form-disclaimer field-full">Demo only. Your information is not transmitted or stored.</p>
  </form>
}

export default function Contact() {
  return <>
    <PageIntro eyebrow="We’d love to hear from you" title="A friendly hello goes a long way." description="Have a question about our fictional clinic concept? Use the demo form below or view our sample contact details." />
    <section className="section contact-section"><div className="container contact-layout"><div className="contact-copy"><DemoNotice /><h2>Come on in—or say hello.</h2><p>Our sample team is ready to help you feel at home. Clinic details below are fictional and for demonstration only.</p><ContactDetails /><div className="contact-detail-cards"><div><Phone /><span><b>Demo phone</b>(512) 555-0184</span></div><div><Mail /><span><b>Demo email</b>hello@smilecare-demo.com</span></div><div><MapPin /><span><b>Sample address</b>1200 Westlake Ave, Austin, TX</span></div></div></div><div className="form-panel"><h2>Send us a note</h2><p>We’ll get back to you (in this demo, you’ll see a confirmation).</p><ContactForm /></div></div></section>
    <section className="container map-placeholder"><div className="map-grid-pattern" /><span className="map-pin"><MapPin size={23} /></span><strong>SmileCare Dental Clinic</strong><p>Fictional map placeholder · 1200 Westlake Ave, Austin, TX</p></section>
  </>
}
