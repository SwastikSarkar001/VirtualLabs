import InstituteCard from "./InstituteCard";

export default function ParticipatingInstitutes() {
  return (
    <section className="flex flex-col items-stretch gap-16 py-16">
      <h1 className="text-4xl self-center font-bold">Participating Institutes</h1>
      <div className="w-full overflow-x-hidden flex gap-16 px-16">
        <div className="flex items-center *:shrink-0 gap-16 *:flex *:flex-col *:items-center *:text-center *:gap-4">
          <InstituteCard src='/institute-logos/iitkgp.svg' alt='Logo of Indian Institute of Technology, Kharagpur' text='IIT Kharagpur' />
          <InstituteCard src='/institute-logos/iitr.svg' alt='Logo of Indian Institute of Technology, Roorkee' text='IIT Roorkee' />
          <InstituteCard src='/institute-logos/iitg.svg' alt='Logo of Indian Institute of Technology, Guwahati' text='IIT Guwahati' />
          <InstituteCard src='/institute-logos/iitd.svg' alt='Logo of Indian Institute of Technology, Delhi' text='IIT Delhi' />
          <InstituteCard src='/institute-logos/iitb.svg' alt='Logo of Indian Institute of Technology, Bombay' text='IIT Bombay' />
          <InstituteCard src='/institute-logos/iitk.svg' alt='Logo of Indian Institute of Technology, Kanpur' text='IIT Kanpur' />
          <InstituteCard src='/institute-logos/iiith.png' alt='Logo of International Institute of Information Technology, Hyderabad' text='IIIT Hyderabad' />
          <InstituteCard src='/institute-logos/avv.svg' alt='Logo of Amrita Vishwa Vidyapeetham' text='Amrita Vishwa Vidyapeetham' />
          <InstituteCard src='/institute-logos/dei.jpg' alt='Logo of Dayalbagh Educational Institute' text='Dayalbagh Educational Institute' />
          <InstituteCard src='/institute-logos/nitk.png' alt='Logo of NITK Surathkal' text='NITK Surathkal' />
          <InstituteCard src='/institute-logos/coep.jpg' alt='Logo of COEP Technological University, Pune' text='COEP Technological University, Pune' />
        </div>
      </div>
    </section>
  )
}