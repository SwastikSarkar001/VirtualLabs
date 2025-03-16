import Link from "next/link";
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Talks() {
  return (
    <div className="self-stretch">
      <h1 id='workshop-title' className={`text-4xl mb-12 font-bold text-center ${montserrat.className}`}>Talks, Webinars, Surveys & MoUs</h1>
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
        <li><Link href='#talk' className="toc-link">Talks & Webinars</Link></li>
        <li>
          <Link href='#surveys' className="toc-link">Surveys</Link>
          <ul className="ml-2 pl-2 border-l border-gray-400 space-y-1 mt-1 text-sm">
            <li><Link href='#requirements-online-workshop' className="toc-link">Surveys Conducted for Research and Strategy Development</Link></li>
          </ul>
        </li>
        <li><Link href='#mou' className="toc-link">Memorandum Of Understanding (MoU)</Link></li>
        <li><Link href='#new-facility' className="toc-link">New Facility: Digital Classroom Enhancement</Link></li>
        <li><Link href='#remote' className="toc-link">Skill Development: Remote Internships</Link></li>
      </ul>
    </aside>
  )
}

function Content() {
  return (
    <div className="text-left">
      <h2 id='talk' className={`${ montserrat.className } blog-h2`}>Talks & Webinars</h2>
      <div className="bg-stone-800 px-4 py-3 rounded-xl mb-4">
        <p className="font-bold mb-2 text-lg">Virtual Labs - Insights, Initiatives and Building a Community</p>
        <ul className="list-disc pl-5">
          <li><span className="font-bold">Speaker:</span> Prof Venkatesh Choppella</li>
          <li><span className="font-bold">Event:</span> Compute 2020</li>
          <li><span className="font-bold">Date:</span> 11th December 2020</li>
        </ul>
      </div>
      <div className="bg-stone-800 px-4 py-3 rounded-xl mb-4">
        <p className="font-bold mb-2 text-lg">Virtual Labs</p>
        <ul className="list-disc pl-5">
          <li><span className="font-bold">Speaker:</span> Prof Venkatesh Choppella</li>
          <li><span className="font-bold">Event:</span> Webinar at Dr.APJ Abdul Kalam Technical University Lucknow (<Link href='http://www.aktu.ac.in' className="text-blue-400 hover:underline" passHref>www.aktu.ac.in</Link>)</li>
          <li><span className="font-bold">Date:</span> 22nd April 2020</li>
        </ul>
      </div>
      <div className="bg-stone-800 px-4 py-3 rounded-xl mb-4">
        <p className="font-bold mb-2 text-lg">Virtual Labs for Science And Engineering</p>
        <ul className="list-disc pl-5">
          <li><span className="font-bold">Speaker:</span> P Ravi Shankar</li>
          <li><span className="font-bold">Event:</span> Webinar in association with IEEE Education Society</li>
          <li><span className="font-bold">Date:</span> 22nd April 2020</li>
        </ul>
      </div>
      <div className="bg-stone-800 px-4 py-3 rounded-xl mb-4">
        <p className="font-bold mb-2 text-lg">Webinar on Student Remote Internship – IEEE Hyderabad</p>
        <ul className="list-disc pl-5">
          <li><span className="font-bold">Speaker:</span> Mr. Lalit Mohan</li>
          <li><span className="font-bold">Date:</span> 04th April 2020</li>
        </ul>
      </div>
      <div className="bg-stone-800 px-4 py-3 rounded-xl mb-4">
        <p className="font-bold mb-2 text-lg">Virtual Labs for Science and Engineering</p>
        <ul className="list-disc pl-5">
          <li><span className="font-bold">Speaker:</span> P Ravi Shankar</li>
          <li><span className="font-bold">Event:</span> Two-Day National Seminar sponsored by ICSSR-SRC and TSCHE on &quot;ICT Innovations for Quality Enhancement in Higher Education&quot;</li>
          <li><span className="font-bold">Date:</span> 06-03-2020</li>
        </ul>
      </div>
      <div className="bg-stone-800 px-4 py-3 rounded-xl mb-4">
        <p className="font-bold mb-2 text-lg">Virtual Labs and its relevance</p>
        <ul className="list-disc pl-5">
          <li><span className="font-bold">Speaker:</span> Mr. P Ravi Shankar and Ms. Mrudhvika</li>
          <li><span className="font-bold">Event:</span> First Year ECE/EEE Induction Training Program at Matrusri Engineering College</li>
          <li><span className="font-bold">Date:</span> 09th August 2019</li>
        </ul>
      </div>
      <div className="bg-stone-800 px-4 py-3 rounded-xl mb-4">
        <p className="font-bold mb-2 text-lg">Building Competence Using the Idea of Pattern Based Learning</p>
        <ul className="list-disc pl-5">
          <li><span className="font-bold">Speaker:</span> Mr. P Ravi Shankar</li>
          <li><span className="font-bold">Date:</span> 11th April 2019</li>
        </ul>
      </div>
      <div className="bg-stone-800 px-4 py-3 rounded-xl mb-4">
        <p className="font-bold mb-2 text-lg">Virtual Labs for M/s Karvy Learning Center</p>
        <ul className="list-disc pl-5">
          <li><span className="font-bold">Speaker:</span> Prof Venkatesh</li>
          <li><span className="font-bold">Event:</span> IIIT, Hyderabad</li>
          <li><span className="font-bold">Date:</span> 02nd February 2019</li>
        </ul>
      </div>
      <div className="bg-stone-800 px-4 py-3 rounded-xl mb-4">
        <p className="font-bold mb-2 text-lg">Virtual Labs for NASSCOM</p>
        <ul className="list-disc pl-5">
          <li><span className="font-bold">Speaker:</span> Prof Venkatesh Choppella</li>
          <li><span className="font-bold">Event:</span> IIIT, Hyderabad</li>
          <li><span className="font-bold">Date:</span> 25th January 2019</li>
        </ul>
      </div>
      <div className="bg-stone-800 px-4 py-3 rounded-xl mb-4">
        <p className="font-bold mb-2 text-lg">Effective Learning via Virtual Labs</p>
        <ul className="list-disc pl-5">
          <li><span className="font-bold">Speaker:</span> Prof Venkatesh Choppella</li>
          <li><span className="font-bold">Event:</span> St. Ann&apos;s College</li>
          <li><span className="font-bold">Date:</span> 18th December 2018</li>
        </ul>
      </div>
      <div className="bg-stone-800 px-4 py-3 rounded-xl mb-4">
        <p className="font-bold mb-2 text-lg">Virtual Labs - Insights, Initiatives and Building a Community</p>
        <ul className="list-disc pl-5">
          <li><span className="font-bold">Speaker:</span> Prof Venkatesh Choppella</li>
          <li><span className="font-bold">Event:</span> Thought Works, Pune</li>
          <li><span className="font-bold">Date:</span> 15th February 2019</li>
        </ul>
      </div>
      <div className="bg-stone-800 px-4 py-3 rounded-xl mb-8">
        <p className="font-bold mb-2 text-lg">Virtual Labs - Insights, Initiatives and Building a Community</p>
        <ul className="list-disc pl-5">
          <li><span className="font-bold">Speaker:</span> Prof Venkatesh Choppella</li>
          <li><span className="font-bold">Event:</span> ISEC 2019</li>
          <li><span className="font-bold">Date:</span> 16th February 2019</li>
        </ul>
      </div>
      <h2 id='surveys' className={`${ montserrat.className } blog-h2`}>Surveys</h2>
      <h3 id='requirements-online-workshop' className={`${ montserrat.className } blog-h3`}>Surveys Conducted for Research and Strategy Development</h3>
      <div className="bg-stone-800 px-4 py-3 rounded-xl mb-4">
        <p className="font-bold mb-2 text-lg">Study 1: Impact of Teaching Modes on Faculty Abilities</p>
        <ul className="list-disc pl-5">
          <li><span className="font-bold">Date:</span> February 11, 2021</li>
          <li><span className="font-bold">Objective:</span> Evaluate the impact of three different modes of teaching (classroom, physical laboratory, and Virtual Labs) on faculty abilities.</li>
          <li><span className="font-bold">Sample Size:</span> 55 faculty members</li>
          <li><span className="font-bold">Survey Instrument:</span> Google Forms</li>
          <li><span className="font-bold">Findings:</span> The findings of this study have the potential to inform future decisions regarding the use of different teaching modes and the enhancement of faculty abilities.</li>
        </ul>
      </div>
      <div className="bg-stone-800 px-4 py-3 rounded-xl mb-4">
        <p className="font-bold mb-2 text-lg">Study 2: Impact of Learning Modes on Student Abilities</p>
        <ul className="list-disc pl-5">
          <li><span className="font-bold">Date:</span> February 11, 2021</li>
          <li><span className="font-bold">Objective:</span> Assess the impact of three modes of learning (classroom, physical laboratory, and Virtual Labs) on student abilities.</li>
          <li><span className="font-bold">Sample Size:</span> 432 students</li>
          <li><span className="font-bold">Survey Instrument:</span> Not specified</li>
          <li><span className="font-bold">Results:</span> The results of this study may provide valuable insights into the effectiveness of different modes of learning and their impact on student abilities.</li>
        </ul>
      </div>
      <div className="bg-stone-800 px-4 py-3 rounded-xl mb-4">
        <p className="font-bold mb-2 text-lg">Survey on Language Preferences for Virtual Labs</p>
        <ul className="list-disc pl-5">
          <li><span className="font-bold">Date:</span> September 23, 2020</li>
          <li><span className="font-bold">Objective:</span> Gather information on language preferences for Virtual Labs from both students and faculty members.</li>
          <li><span className="font-bold">Sample Size:</span> 309 students and 59 faculty members</li>
          <li><span className="font-bold">Survey Instrument:</span> Survey form</li>
          <li><span className="font-bold">Results:</span> The results of this study can help make decisions about language options for Virtual Labs to ensure accessibility and benefit for all users.</li>
        </ul>
      </div>
      <div className="bg-stone-800 px-4 py-3 rounded-xl mb-8">
        <p className="font-bold mb-2 text-lg">Telephonic Surveys on Factors Influencing Usage of Virtual Labs among College Faculty Members</p>
        <ul className="list-disc pl-5">
          <li><span className="font-bold">Objective:</span> Understand the factors influencing the usage of Virtual Labs among college faculty members.</li>
          <li><span className="font-bold">Sample Size:</span> 10 participants</li>
          <li><span className="font-bold">Method:</span> Telephonic surveys</li>
          <li><span className="font-bold">Outcome:</span> By analyzing the results of this study, Virtual Labs can identify the factors that motivate faculty members to use their platform, potentially utilizing this information to further enhance their services.</li>
        </ul>
      </div>
      <h2 id='mou' className={`${ montserrat.className } blog-h2`}>Memorandum Of Understanding (MoU)</h2>
      <p className="font-bold">With Telangana Academy for Skill and Knowledge (TASK)</p>
      <ul className="list-disc pl-5">
        <li><span className="font-bold">Signed During:</span> Virtual Labs Phase II</li>
        <li><span className="font-bold">Involvement:</span> A large portion of the outreach during Phase II was conducted with TASK&apos;s involvement.</li>
        <li><span className="font-bold">Collaboration:</span> The collaboration was limited until the end of Phase II.</li>
      </ul>
      <p className="font-bold">With IEEE Hyderabad Section</p>
      <ul className="list-disc pl-5 mb-8">
        <li><span className="font-bold">Signed Between:</span> Virtual Labs and IEEE Hyderabad Section</li>
        <li><span className="font-bold">Objective:</span> Spreading technical education to students</li>
        <li><span className="font-bold">Partnership:</span> IEEE aimed to further their interests through the partnership.</li>
        <li><span className="font-bold">Cost Implications:</span> The collaboration did not have any cost implications.</li>
        <li><span className="font-bold">Outcome:</span> Resulted in 65,000 usages of Virtual Labs.</li>
        <li><span className="font-bold">Potential:</span> This ongoing association has the potential to serve as a benchmark for future outreach initiatives.</li>
      </ul>
      <h2 id='new-facility' className={`${ montserrat.className } blog-h2`}>New Facility: Digital Classroom Enhancement</h2>
        <p className="mb-2">Addition: NPTEL Class Recording Facility</p>
        <ul className="list-disc pl-5 mb-8">
          <li><span className="font-bold">Location:</span> Virtual Labs&apos; Digital Classroom</li>
          <li><span className="font-bold">Enhancement:</span> State-of-the-art NPTEL Class recording facility</li>
          <li>
            <p><span className="font-bold">Enhancement:</span> State-of-the-art NPTEL Class recording facility</p>
            <ul className="list-disc pl-5">
              <li>Specifically designed to record high-quality videos for experiments developed by Virtual Labs.</li>
              <li>Utilized for developing Virtual Lab-based MOOCs.</li>
            </ul>
          </li>
          <li><span className="font-bold">Impact:</span> Enables Virtual Labs to provide a more comprehensive and engaging learning experience to users.</li>
        </ul>
      <h2 id='remote' className={`${ montserrat.className } blog-h2`}>Skill Development: Remote Internships</h2>
      <p><span className="font-bold">Offered by:</span> Virtual Labs, IIITH</p>
      <ul className="list-decimal pl-5 mb-8">
        <li>Program: Remote internships to college students</li>
        <li>Number of Rounds: Three</li>
        <li>
          <p className="font-bold">Contributions:</p>
          <ul className="list-disc pl-5">
            <li>Development, debugging, and enhancement of approximately 70 experiments</li>
            <li>Total of 20,000 work hours invested</li>
          </ul>
        </li>
        <li><span className="font-bold">Outcome:</span> Equipped student interns with valuable skills in experimental development, debugging, and enhancement.</li>
      </ul>
    </div>
  )
}