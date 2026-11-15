import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { services } from '../data/services'
import { SuccessMessage } from './Shared'

export default function AppointmentForm({ compact = false }) {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm()
  const localToday = new Date()
  localToday.setMinutes(localToday.getMinutes() - localToday.getTimezoneOffset())
  const today = localToday.toISOString().slice(0, 10)
  const onSubmit = () => setSubmitted(true)
  if (submitted) return <SuccessMessage title="Your request is ready!" />
  return (
    <form className={`form-grid${compact ? ' compact-form' : ''}`} onSubmit={handleSubmit(onSubmit)} noValidate>
      <label>Full name<input placeholder="Your name" autoComplete="name" {...register('name', { required: 'Please enter your name.' })} />{errors.name && <span className="field-error">{errors.name.message}</span>}</label>
      <label>Email address<input type="email" placeholder="you@example.com" autoComplete="email" {...register('email', { required: 'Please enter your email.', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email address.' } })} />{errors.email && <span className="field-error">{errors.email.message}</span>}</label>
      <label>Phone number<input type="tel" placeholder="(555) 123-4567" autoComplete="tel" {...register('phone', { required: 'Please enter your phone number.', pattern: { value: /^\+?[\d\s().-]+$/, message: 'Enter a valid phone number.' }, validate: (value) => { const digits = value.replace(/\D/g, '').length; return (digits >= 7 && digits <= 15) || 'Enter a valid phone number.' } })} />{errors.phone && <span className="field-error">{errors.phone.message}</span>}</label>
      <label>Service<select defaultValue="" {...register('service', { required: 'Please choose a service.' })}><option value="" disabled>Select a service</option>{services.map((service) => <option key={service.title}>{service.title}</option>)}</select>{errors.service && <span className="field-error">{errors.service.message}</span>}</label>
      <label>Preferred date<input type="date" min={today} {...register('date', { required: 'Please choose a date.', validate: (value) => value >= today || 'Please choose today or a future date.' })} />{errors.date && <span className="field-error">{errors.date.message}</span>}</label>
      <label>Preferred time<select defaultValue="" {...register('time', { required: 'Please choose a time.' })}><option value="" disabled>Select a time</option><option>8:00 am</option><option>9:30 am</option><option>11:00 am</option><option>1:00 pm</option><option>2:30 pm</option><option>4:00 pm</option></select>{errors.time && <span className="field-error">{errors.time.message}</span>}</label>
      {!compact && <label className="field-full">Anything you’d like us to know? <textarea rows="4" placeholder="Share a little about what you’re looking for (optional)" {...register('message')} /></label>}
      <button className="button button-primary field-full" type="submit">Submit appointment request <span>→</span></button>
      <p className="form-disclaimer field-full">This demo form simulates a request only; it does not book an appointment or transmit your information.</p>
    </form>
  )
}
