import Link from "next/link";

export default function WorkshopSection() {
  return (
    <div className="self-stretch">
      <h1 className="text-4xl mb-12 font-bold text-center">Virtual Labs Workshop</h1>
      <div className="text-left">
        <h2 className="text-2xl pb-2 border-b-2 border-gray-300/30 font-medium mb-4">Overview and Motivation</h2>
          <p className="mb-2">Virtual Labs Team organizes workshops and hands-on practice sessions on Virtual Labs (both onsite and online) for interested Science & Engineering Institutions. Training sessions are conducted for faculty members and students of interested institutes upon the expression of their interest in Virtual Labs workshop.</p>
          <p className="mb-8">Any of the 1500 odd experiments can be performed at all times providing a good opportunity for continuous usage. On completion of the demonstrations and hands-on sessions, the faculty members and the students will need to submit the feedback form to the Virtual Labs team. These forms will be compiled and analyzed for further improvements in the Virtual Labs.</p>
        <h2 className="text-2xl pb-2 border-b-2 border-gray-300/30 font-medium mb-4">Audience</h2>
        <p className="mb-8">Workshops can be requested by faculty members or college management of the interested Science & Engineering Institutions.</p>
        <h2 className="text-2xl pb-2 border-b-2 border-gray-300/30 font-medium mb-4">Workshop Requirements</h2>
        <h3 className="text-xl pb-2 font-medium mb-2">Requirements for Online Workshop</h3>
        <ol className="list-decimal pl-5 mb-4">
          <li>The institute should be a Central/State University or institute/college approved by AICTE/UGC.</li>
          <li>A good Internet connection/link for each individual participant should be available.</li>
          <li>Java must be downloadable through the Internet and Gmail should be accessible.</li>
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
        <h3 className="text-xl pb-2 font-medium mb-2">Documents to be submitted for Online Workshop</h3>
        <ol className="list-decimal pl-5 mb-4">
          <li>Attendance sheets duly signed by each of the participants.</li>
          <li>Feedback on forms made available to the college by the Virtual Labs team on confirmation of the workshop date.</li>
          <li>Photographs of each workshop session.</li>
          <li>A Letter from the head of the college confirming the workshop along with the number of participants and date. The template for this letter will be shared with the College by the Virtual Labs Team on confirmation of workshop date.</li>
        </ol>
        <h3 className="text-xl pb-2 font-medium mb-2">Requirements for Onsite Version</h3>
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
        <h3 className="text-xl pb-2 font-medium mb-2">Documents to be submitted for Onsite Workshop</h3>
        <ol className="list-decimal pl-5 mb-8">
          <li>Attendance sheets duly signed by each of the participants.</li>
          <li>Feedback on forms made available to the college by the Virtual Labs team on confirmation of the workshop date.</li>
          <li>Photographs of each workshop session.</li>
          <li>A Letter from the head of the college confirming the workshop along with the number of participants and date. The template for this letter will be shared with the College by the Virtual Labs Team on confirmation of workshop date.</li>
        </ol>
        <h2 className="text-2xl pb-2 border-b-2 border-gray-300/30 font-medium mb-4">Request a Workshop</h2>
        <p>
          Follow the steps below to have a workshop conducted at your college :
        </p>
        <ol className="list-decimal pl-5 mb-16">
          <li>Make sure that the requirements (onsite/online) are met.</li>
          <li>Fill the <Link href='http://38.100.110.143/EOI-2023.pdf' className="text-blue-400 hover:underline" passHref>Expression of Interest form</Link>.</li>
          <li>Wait for the Virtual Labs Outreach Team to contact you in 5-10 working days. Further communications would happen through email.</li>
          <li>Mark the workshop Date confirmed by the Virtual Labs Team through email.</li>
          <li>Acknowledge the above confirmation for the Virtual Labs Outreach Team to conduct the workshop on the scheduled date and time.</li>
          <li>Provide as listed above documents on completion of workshop.</li>
        </ol>
      </div>
    </div>
  )
}
