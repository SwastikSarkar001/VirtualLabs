import Link from "next/link";
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Hosting() {
  return (
    <div className="self-stretch">
      <h1 id='workshop-title' className={`text-4xl mb-12 font-bold text-center ${montserrat.className}`}>Virtual Labs Onboarding</h1>
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
        <li><Link href='#intro' className="toc-link">Introduction</Link></li>
        <li><Link href='#purp' className="toc-link">Purpose</Link></li>
        <li><Link href='#aud' className="toc-link">Audience</Link></li>
        <li><Link href='#def' className="toc-link">Definitions</Link></li>
        <li>
          <ul className="ml-2 pl-2 border-l border-gray-400 space-y-1 mt-1 text-sm">
            <li><Link href='#on' className="toc-link">Onboarding</Link></li>
            <li><Link href='#git' className="toc-link">GitHub Handle</Link></li>
          </ul>
        </li>
        <li><Link href='#onboarding' className="toc-link">Onboarding</Link></li>
        <li>
          <ul className="ml-2 pl-2 border-l border-gray-400 space-y-1 mt-1 text-sm">
            <li><Link href='#pre' className="toc-link">Prerequisities</Link></li>
            <li><Link href='#process' className="toc-link">Onboarding Process</Link></li>
            <ul className="ml-2 pl-2 border-l border-gray-400 space-y-1 mt-1 text-sm">
              <li><Link href='#req' className="toc-link">Requesting New Repository Creation and Access for New Developers</Link></li>
            </ul>
          </ul>
        </li>
        <li><Link href='#conc' className="toc-link">Conclusion</Link></li>
        <li><Link href='#faq' className="toc-link">FAQ</Link></li>

      </ul>
    </aside>
  )
}

function Content() {
  return (
    <div className="text-left">
      <h2 id='intro' className={`${ montserrat.className } blog-h2`}>Introduction</h2>
        <p className="mb-2">Virtual Labs is a mission-driven project under the Ministry of Education (MoE) that aims to provide laboratory learning experiences to students who lack adequate lab infrastructure. With over 150 labs developed by various consortium institutes, the project follows a streamlined software development life cycle to ensure the delivery of high-quality labs. This document outlines the onboarding process for developers involved in the Virtual Labs project.</p>
        <p className="mb-8">Any of the 1500 odd experiments can be performed at all times providing a good opportunity for continuous usage. On completion of the demonstrations and hands-on sessions, the faculty members and the students will need to submit the feedback form to the Virtual Labs team. These forms will be compiled and analyzed for further improvements in the Virtual Labs.</p>
      <h2 id='aud' className={`${ montserrat.className } blog-h2`}>Audience</h2>
      <p className="mb-8">The intended audience for this document includes all lab developers and owners who are interested in developing new experiments.</p>
      <h2 id='def' className={`${ montserrat.className } blog-h2`}>Definitions</h2>
      <h3 id='on' className={`${ montserrat.className } blog-h3`}>Onboarding</h3>
        <p className="mb-2">Onboarding initiates the software development process for an approved lab, with the Central Platform Engineering (CPE) team responsible for creating a Git repository for each experiment.</p>
      <h3 id='git' className={`${ montserrat.className } blog-h3`}>GitHub Handle</h3>
        <p className="mb-2">A GitHub handle is a unique identifier associated with a user’s public (and sometimes private) activities on GitHub</p>
      <h2 id='onbaording' className={`${ montserrat.className } blog-h2`}>Onbaording</h2>
      <h3 id='pre' className={`${ montserrat.className } blog-h3`}>Prerequisities</h3>  
      <p className="mb-5">Before beginning the onboarding process, the following prerequisites must be met:</p>
      <ol className="list-decimal mb-8 pl-5">
        <li>An Approved lab proposal in PDF format - reference.</li>
        <li>One Primary GitHub handle - This should be a university-affiliated GitHub account</li>
        <li>Secondary GitHub handles - This should be the GitHub accounts used by the contributing developers.</li>
      </ol>
      <h3 id='process' className={`${ montserrat.className } blog-h3`}>Onbaording Process</h3>  
      <p id='req' className="font-extrabold mb-5">Requesting New Repository Creation and Access for New Developers</p>
      <p className="mb-3 font-bold">Step1</p>

      <ol className="list-decimal pl-5 mb-4">
        <li>Raise an Experiment Repository Creation Request to request the creation of experiment repositories for the lab.</li>
      </ol>

      <p className="mb-3 font-bold">Step2</p>
      
      <ol>
        <li>Provide the following information in the above created issue on the Engineers’ Forum repository:</li>
        <li>
          <p>System configuration (Recommended) :</p>
          <ul className="list-disc pl-5">
            <li>Browser: Firefox and Chrome.</li>
            <li>Plugins: Flash, Java 1.6 version, and IcedTea.</li>
            <li>JavaScript should be enabled on the browser.</li>
            <li>No pop-up blockers.</li>
          </ul>
        </li>
        <li>
          <p>Pre-Workshop checklist :</p>
          <ul className="list-disc pl-5">
            <li><Link href='https://www.vlab.co.in/' className="text-blue-400 hover:underline" passHref>Virtual Labs</Link> web page should be accessible from the browser.</li>
          </ul>
        </li>
      </ol>
      <h3 id='docs-online' className={`${ montserrat.className } blog-h3`}>Documents to be submitted for Online Workshop</h3>
      <ol className="list-decimal pl-5 mb-4">
        <li>Attendance sheets duly signed by each of the participants.</li>
        <li>Feedback on forms made available to the college by the Virtual Labs team on confirmation of the workshop date.</li>
        <li>Photographs of each workshop session.</li>
        <li>A Letter from the head of the college confirming the workshop along with the number of participants and date. The template for this letter will be shared with the College by the Virtual Labs Team on confirmation of workshop date.</li>
      </ol>
      <h3 id='requirements-onsite' className={`${ montserrat.className } blog-h3`}>Requirements for Onsite Version</h3>
      <ol className="list-decimal pl-5 mb-4">
        <li>Students of II, III and IV years across all Engineering Disciplines.</li>
        <li>30-60 student per session. The minimum number of participants covered in a day must be at least 200, in multiple sessions.</li>
        <li>
          <p>System configuration (Recommended for each person) :</p>
          <ul className="list-disc pl-5">
            <li>Browser: Firefox and Chrome</li>
            <li>Internet connection (4 Mbps) with Virtual labs web page accessible from the browser.</li>
          </ul>
        </li>
        <li>One multimedia projector.</li>
        <li>A lab that can accommodate the students, computers and projector.</li>
      </ol>
      <h3 id='docs-onsite' className={`${ montserrat.className } blog-h3`}>Documents to be submitted for Onsite Workshop</h3>
      <ol className="list-decimal pl-5 mb-8">
        <li>Attendance sheets duly signed by each of the participants.</li>
        <li>Feedback on forms made available to the college by the Virtual Labs team on confirmation of the workshop date.</li>
        <li>Photographs of each workshop session.</li>
        <li>A Letter from the head of the college confirming the workshop along with the number of participants and date. The template for this letter will be shared with the College by the Virtual Labs Team on confirmation of workshop date.</li>
      </ol>
      <h2 id='conc' className={` mb-8 ${ montserrat.className } blog-h2`}>Conclusion</h2>
      <p className="mb-8">
      This document provides a comprehensive guide to the onboarding process. Upon completing these four steps, developers can proceed to the development phase. For detailed guidance on the next steps, please refer to this <Link href='https://github.com/virtual-labs/engineers-forum/blob/master/ph4/services/development-process.md' className="text-blue-400 hover:underline" passHref>document</Link>.
      </p>
      <h2 id='faq' className={`mb-8 ${ montserrat.className } blog-h2`}>FAQ</h2>
      <p className="font-bold mb-5 ">Can I change the Primary and Secondary GitHub Handle after submitting the experiment repository creation request?</p>
      <p className="mb-8">Yes, the primary GitHub handle can be changed. However, it is recommended to maintain a consistent university-specific handle for Virtual Labs development. Secondary handles are flexible and can be updated as needed.</p>
    </div>
  )
}