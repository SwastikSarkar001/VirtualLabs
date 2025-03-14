import Link from "next/link";
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function NodeSection() {
  return (
    <div className="self-stretch">
      <h1 id='workshop-title' className={`text-4xl mb-12 font-bold text-center ${montserrat.className}`}>Become a Nodal Center</h1>
      <div className="flex flex-row-reverse gap-12">
        <TOC />
        <Content />
      </div>
    </div>
  )
}

function TOC() {
  return (
    <aside className='shrink-0 bg-stone-900 p-4 border border-gray-200 rounded hidden md:block md:w-60 xl:w-80 sticky top-30 h-max mb-16'>
      <h2 className="text-xl font-semibold mb-2">Table of Contents</h2>
      <ul className="space-y-2">
        <li><Link href='#introduction' className="toc-link">Introduction</Link></li>
        <li><Link href='#purpose' className="toc-link">Purpose</Link></li>
        <li><Link href='#target-audience' className="toc-link">Target Audience</Link></li>
        <li><Link href='#define' className="toc-link">What is Node Center?</Link></li>
        <li><Link href='#affiliation' className="toc-link">What is the Nodal Center affiliated With?</Link></li>
        <li><Link href='#benifits' className="toc-link">What are the benefits of being a Nodal Center?</Link></li>
        <li><Link href='#roles' className="toc-link">What are the roles and responsibilities of the Nodal Center?</Link></li>
        <li>
          <Link href='#how-to' className="toc-link">How to Become a Nodal Centre?</Link>
          <ul className="ml-2 pl-2 border-l border-gray-400 space-y-1 mt-1 text-sm">
            <li><Link href='#how-to-enroll' className="toc-link">New Enrollment of Nodal Center</Link></li>
            <li><Link href='#how-to-re-enroll' className="toc-link">Re-Enrollment of Nodal Center</Link></li>
          </ul>
        </li>
        <li><Link href='#coordinator' className="toc-link">Who is Nodal Center Coordinator (NCC)?</Link></li>
        <li><Link href='#responsibilities' className="toc-link">What are the responsibilities of the Nodal Center Coordinator?</Link></li>
        <li><Link href='#steps' className="toc-link">Step-by-Step Guide to become a Nodal Center</Link></li>
        <li><Link href='#agenda' className="toc-link">What is the agenda of the workshop?</Link></li>
        <li><Link href='#links' className="toc-link">Some important links</Link></li>
        <li><Link href='#testimonials' className="toc-link">Testimonials from IIIT-H Nodal Centers</Link></li>
        <li>
          <Link href='#definitions' className="toc-link">Definitions</Link>
          <ul className="ml-2 pl-2 border-l border-gray-400 space-y-1 mt-1 text-sm">
            <li><Link href='#usage' className="toc-link">Usage</Link></li>
            <li><Link href='#workshop' className="toc-link">Workshop</Link></li>
          </ul>
        </li>
      </ul>
    </aside>
  )
}

function Content() {
  return (
    <div className="text-left">
      <h2 id='introduction' className={`${ montserrat.className } blog-h2`}>Introduction</h2>
      <p className="mb-8">Colleges which are not yet familiar with the use ofthe Virtual Lab Portal such as new colleges opting to use virtual experiments, are introduced to the features of the Virtual Labs portal through online or in person workshops. The idea is to show them thorugh a demo, how to navigate the portal to access the required experiments, perform them etc and thereby enthuse them to use virtual Lab experiments. To this end, Virtual Labs Team organizes workshops and hands-on practice sessions for interested Science & Engineering Institutions. Training sessions are conducted for faculty members and students of institutes upon the expression of their interest in the Virtual Labs workshop. In this effort a number of colleges express an interest to continue to use virtual expreiments and become part of the community of interested colleges. Such colleges or recognized institutions are referred to as &quot;Nodal Centers&quot;.</p>
      <h2 id='purpose' className={`${ montserrat.className } blog-h2`}>Purpose</h2>
      <p className="mb-8">The document outlines both the procedure for becoming a Nodal Centre and the steps that Nodal Center Coordinators should take when requesting an outreach workshop. Additionally, it elaborates on the roles and responsibilities of the Nodal Centers (NC) and NodalCenter Coordinator (NCC), as well as the process to initiate a workshop.</p>
      <h2 id='target-audience' className={`${ montserrat.className } blog-h2`}>Target Audience</h2>
      <p className="mb-8">The colleges interested in participating in the Virtual Labs consortium to conduct workshops and promote virtual experiments are the target audience for this document.</p>
      <h2 id='define' className={`${ montserrat.className } blog-h2`}>What is Nodal Center?</h2>
      <p className="mb-8">Colleges showing interest in conducting Virtual Labs workshops and incorporating them into their classrooms are termed Nodal Centers (NC). Their designation as an NC is valid for one year, with the possibility of renewal each year contingent on their performance in meeting the set targets. To appoint a college as an NC, the Participating Institute (PI) may organize a workshop or webinar at the college&apos;s location.</p>
      <h2 id='affiliation' className={`${ montserrat.className } blog-h2`}>What is the Nodal Center affiliated With?</h2>
      <p className="mb-8">Based on its geographical location a Nodal Center can be affiliated with any of the participating institutes (given below) of the Virtual Labs consortium.</p>
      <h2 id='benefits' className={`${ montserrat.className } blog-h2`}>What are the benefits of being a Nodal Center?</h2>
      <ul className="list-disc pl-5 mb-8">
        <li>Internship opportunities for students.</li>
        <li>New experiment proposal/development from the respective college.</li>
        <li>Recognition for NC in NAAC Accreditation.</li>
      </ul>
      <h2 id='roles' className={`${ montserrat.className } blog-h2`}>What are the roles and responsibilities of the Nodal Center?</h2>
      <ul className="list-disc pl-5 mb-8">
        <li>The head of the Institution of the Nodal Centre will be responsible for the appointment of a Nodal Coordinator from their Institute.</li>
        <li>The Nodal Center Coordinator would be required to continue with their responsibilities for at least one academic semester.</li>
        <li>Requests for a change of Nodal Coordinator will not be accepted in the middle of the academic semester, except in extreme circumstances, for example when the Coordinator proceeds on leave or quits the Institute. The nomination of a new Nodal Coordinator will be accepted upon receiving confirmation from the previous Nodal Coordinator.</li>
        <li>The Nodal Center should ensure the smooth execution of Outreach activities and promote the usage of Virtual Labs.</li>
        <li>The Nodal Center must accomplish the established targets for the utilization of Virtual Labs.</li>
        <li>Participating in meetings organized by the Principal Investigator (PI) concerning Virtual Labs.</li>
      </ul>
      <h2 id='how-to' className={`${ montserrat.className } blog-h2`}>How to Become a Nodal Centre?</h2>
      <h3 id='how-to-enroll' className={`${ montserrat.className } blog-h3`}>New Enrollment of Nodal Center</h3>
      <p>The institute that has never been an NC before, submits the Expression of Interest (EOI) form to any of the consortium institutes and will be considered for enrollment as a new NC. Once the institute enrolled as an NC, the following will be the targets:</p>
      <ul className="list-disc pl-5 mb-4">
        <li><Link href='https://github.com/virtual-labs/outreach-web-pages-iiith/edit/main/nodal-centre-process/nodal-centre-process.md#workshop' className="text-blue-400 hover:underline" passHref>Workshops</Link> - A minimum of 1 workshop during the one-year of enrollment.</li>
        <li><Link href='https://github.com/virtual-labs/outreach-web-pages-iiith/edit/main/nodal-centre-process/nodal-centre-process.md#usage' className="text-blue-400 hover:underline" passHref>Usages</Link> - A minimum usage of 8000 per year from all the workshops and other classroom use of Virtual Labs.</li>
      </ul>
      <h3 id='how-to-re-enroll' className={`${ montserrat.className } blog-h3`}>Re-Enrollment of Nodal Center</h3>
      <p>The institute that has been an NC before can submit a fresh Expression of Interest (EOI) form and will be considered for re-enrollment as an NC for one year. Once the institute re-enrolled as an NC, the following will be the targets:</p>
      <ul className="list-disc pl-5 mb-8">
        <li><Link href='https://github.com/virtual-labs/outreach-web-pages-iiith/edit/main/nodal-centre-process/nodal-centre-process.md#workshop' className="text-blue-400 hover:underline" passHref>Workshops</Link> - A minimum of 1 workshop per year during the one year of enrollment.</li>
        <li><Link href='https://github.com/virtual-labs/outreach-web-pages-iiith/edit/main/nodal-centre-process/nodal-centre-process.md#usage' className="text-blue-400 hover:underline" passHref>Usages</Link> - A minimum usage of 8000 per year from all the workshops and other classroom use of Virtual Labs during enrollment.</li>
      </ul>
      <h2 id='coordinator' className={`${ montserrat.className } blog-h2`}>Who is Nodal Center Coordinator (NCC)?</h2>
      <p className="mb-8">Nodal Center Coordinator (NCC) will be nominated from each NC by the head of the institute. The NCC will submit all the reports periodically to the Virtual Labs team of the respective institute.</p>
      <h2 id='responsibilities' className={`${ montserrat.className } blog-h2`}>What are the responsibilities of the Nodal Center Coordinator?</h2>
      <ul className="list-disc pl-5 mb-8">
        <li>The Nodal Center Coordinator (NCC) shall serve as the primary liaison between the Outreach Team of Virtual Labs, the Participating Institute, and the Nodal Centre.</li>
        <li>The NCC will be responsible for organizing training sessions for students and faculty members within their respective institutes.</li>
        <li>The NCC may seek assistance from other faculty members and support staff to effectively coordinate training programs within their Institute.</li>
        <li>On a monthly basis, the NCC must submit a progress report on the usage of Virtual Labs by the students to the Participating Institute. The report should bear the signature of the Institute&apos;s Director/Principal.</li>
        <li>The NCC will be in charge of coordinating workshops, and if necessary, they may extend an invitation to the Outreach team from the Participating Institute.</li>
        <li>It is expected that the annual lab usage will exceed 8000.</li>
        <li>The Nodal Center activity does not involve any financial commitment from Virtual Labs.</li>
        <li>After conducting each workshop, the NC must submit a comprehensive report, including relevant photographs. The Participating Institute will provide a template for the report.</li>
      </ul>
      <h2 id='steps' className={`${ montserrat.className } blog-h2`}>Step-by-Step Guide to become a Nodal Center</h2>
      <ul className="list-disc pl-5 mb-8">
        <li>Initiate contact with any of the consortium institutions that you are interested in for potential collaboration.</li>
        <li>Submit an <Link href='http://38.100.110.143/EOI-2023.pdf' className="text-blue-400 hover:underline" passHref>expression of interest</Link> document, duly completed and signed by the head of your institute, to the chosen consortium institution.</li>
        <li>Approach the Principal Investigator (PI) to discuss the possibility of conducting a workshop at your institute&apos;s premises.</li>
        <li>Anticipate the contact of the Virtual Labs Outreach Team within a period of 5-10 business days. Subsequent communication shall be conducted via email.</li>
        <li>The mode (<Link href='https://github.com/virtual-labs/outreach-web-pages-iiith/blob/main/workshop-process/workshop-process.md#requirements-for-online-workshop' className="text-blue-400 hover:underline" passHref>online</Link> or <Link href='https://github.com/virtual-labs/outreach-web-pages-iiith/blob/main/workshop-process/workshop-process.md#requirements-for-onsite-version' className="text-blue-400 hover:underline" passHref>onsite</Link>) for the workshop shall be determined through mutual agreement on a suitable date.</li>
        <li>Following the completion of the online or onsite workshop, the necessary documents(<Link href='https://github.com/virtual-labs/outreach-web-pages-iiith/blob/main/workshop-process/workshop-process.md#documents-to-be-submitted-for-online-workshop' className="text-blue-400 hover:underline" passHref>online</Link>/<Link href='https://github.com/virtual-labs/outreach-web-pages-iiith/blob/main/workshop-process/workshop-process.md#documents-to-be-submitted-for-onsite-workshop' className="text-blue-400 hover:underline" passHref>onsite</Link>) related to the workshop&apos;s execution should be submitted to the PI.</li>
        <li>Once the workshop-related documentation has been submitted and reviewed, an Appointment letter will be issued to your Nodal center as appropriate.</li>
      </ul>
      <h2 id='agenda' className={`${ montserrat.className } blog-h2`}>What is the agenda of the workshop?</h2>
      <p>The agenda for the workshops that we propose to conduct at your college on mutually convenient dates will be as follows.</p>
      <ul className="list-disc pl-5 mb-8">
        <li>A Brief Overview of the Virtual Labs (10-15 minutes) by the Virtual Labs Team.</li>
        <li>Demo of one experiment (15-20 minutes) by the Virtual Labs Team.</li>
        <li>Performance of Experiments (45-50 minutes) by students.</li>
        <li>Simultaneous filling of feedback forms by students.</li>
        <li>Q&A Session for faculty and students.</li>
      </ul>
      <h2 id='links' className={`${ montserrat.className } blog-h2`}>Some important links</h2>
      <ul className="list-disc pl-5 mb-8">
        <li>Attendance sheet: <Link href='https://drive.google.com/file/d/1rIaKjPTh6I4wY_6223b3JgQq476sDeSU/view?usp=drive_link' className="text-blue-400 hover:underline" passHref>Link</Link></li>
        <li>Feedback form: <Link href='https://docs.google.com/document/d/1jJl33IG2edS0JHFtsxqwcn9Q-gf3i-dI/edit?usp=drive_link&ouid=106961684070023821907&rtpof=true&sd=true' className="text-blue-400 hover:underline" passHref>Link</Link></li>
        <li>Report template: <Link href='https://docs.google.com/document/d/1In2LNqduLoLLFOHTzKrbibLuXm7kcIVm/edit?usp=drive_link&ouid=106961684070023821907&rtpof=true&sd=true' className="text-blue-400 hover:underline" passHref>Link</Link></li>
        <li>Expression of Interest: <Link href='http://38.100.110.143/EOI-2023.pdf' className="text-blue-400 hover:underline" passHref>Link</Link></li>
      </ul>
      <h2 id='testimonials' className={`${ montserrat.className } blog-h2`}>Testimonials from IIIT-H Nodal Centers</h2>
      <p>You can check out some of the anecdotes provided by our Nodal center coordinators by referring to this <Link href='https://github.com/virtual-labs/outreach-web-pages-iiith/blob/main/testimonials/outreach-testimonials.md#testimonials-from-iiit-h-nodal-centers' className="text-blue-400 hover:underline" passHref>link</Link>.</p>
      <h2 id='definitions' className={`${ montserrat.className } blog-h2`}>Definitions</h2>
      <h3 id='usage' className={`${ montserrat.className } blog-h3`}>Usage</h3>
      <p className="mb-4">A single usage consists of a student or faculty member doing a Virtual Lab experiment through a workshop or in regular classroom use. The faculty member holding the workshop is responsible for certifying that a student has done the experiment. As part of attending a workshop, a student will submit a feedback form that lists the number of experiments that the student has done in that workshop.</p>
      <h3 id='workshop' className={`${ montserrat.className } blog-h3`}>Workshop</h3>
      <p className="mb-16">A single workshop lasts for at least 2.5 hours (150 minutes) duration. Each workshop has a 25-minute introduction followed by a demo session of 25 minutes and a student takes 20 minutes to do an experiment, then each student is likely to do about 5 experiments in one workshop session. With 30 persons, this turns out to be 30 x 5 = 150 usages in a typical workshop. The NCs are encouraged to depend not only on workshops but also on classroom use to meet the semester usage targets.</p>
    </div>
  )
}