import { CalendarDays, CheckCircle2 } from 'lucide-react'
import AppointmentForm from '../components/AppointmentForm'
import { DemoNotice, PageIntro } from '../components/Shared'

export default function Appointment() {
  return <>
    <PageIntro eyebrow="Let’s find a time" title="Your first step to a brighter smile." description="Share a few details and your preferred time. This demo form simulates a request only—no real appointment will be booked." />
    <section className="section appointment-section"><div className="container appointment-layout"><aside className="appointment-aside"><div className="aside-icon"><CalendarDays size={25} /></div><h2>We’ll make it easy.</h2><p>Tell us a little about what you need and when you’d like to visit. This is a fictional website demo; please don’t enter personal or sensitive information.</p><ul><li><CheckCircle2 />Pick a service that fits</li><li><CheckCircle2 />Choose a preferred date</li><li><CheckCircle2 />No real information is sent</li></ul><DemoNotice /></aside><div className="form-panel"><h2>Appointment request</h2><p>Fields marked with required details must be completed.</p><AppointmentForm /></div></div></section>
  </>
}
