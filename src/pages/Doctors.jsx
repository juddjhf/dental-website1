import DoctorCard from '../components/DoctorCard'
import SectionHeading from '../components/SectionHeading'
import { AppointmentCTA, DemoNotice, PageIntro } from '../components/Shared'
import { doctors } from '../data/doctors'

export default function Doctors() {
  return <>
    <PageIntro eyebrow="A team that puts you at ease" title="Meet the people behind the care." description="Get to know our fictional demo team. The profiles below are illustrative and do not represent real providers or credentials." />
    <section className="section"><div className="container"><DemoNotice /><SectionHeading eyebrow="Our demo team" title="Here to make you smile." description="Different perspectives, one shared commitment to thoughtful, patient-centered care." centered /><div className="doctor-grid doctor-grid-all">{doctors.map((doctor) => <DoctorCard key={doctor.name} doctor={doctor} />)}</div><p className="medical-disclaimer">All names, credentials, experience, portraits, and biographies are fictional demonstration content. No real clinical credentials are claimed.</p></div></section>
    <AppointmentCTA />
  </>
}
