'use client'

import Link from "next/link"
import { useState } from "react"
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat-font",
});

type FAQType = {
  question: string
  answer: () => React.ReactNode
}

const faqs: FAQType[] = [
  {
    question: 'What is a Virtual Labs Workshop?',
    answer: () => (
      <p>
        Virtual Labs Team organizes workshops with hands-on practice sessions on Virtual Labs for interested Science & Engineering Institutions. The sessions are conducted for faculty members and students of interested institutes upon expression of their interest for Virtual Labs workshop.
      </p>
    )
  },
  {
    question: 'Who can request for a Virtual Labs Workshop?',
    answer: () => (
      <p>
        Workshops can be requested by faculty members or college/institute management of the interested Science & Engineering Institutions.
      </p>
    )
  },
  {
    question: 'Who can participate in the Workshop?',
    answer: () => (
      <p>
        Workshops can be requested by faculty members or college/institute management of the interested Science & Engineering Institutions.
      </p>
    )
  },
  {
    question: 'What are the modes in the Virtual Labs Workshop?',
    answer: () => (
      <p>
        There are two modes of Virtual Labs Workshop - Onsite and Online. Onsite workshops are conducted in the premises of the college requesting the workshop whereas online workshops as the name suggests are conducted as webinars.
      </p>
    )
  },
  {
    question: 'What are the system requirements for a Onsite Virtual Labs Workshop?',
    answer: () => (
      <div>
        <p>For a Virtual Labs onsite workshop to be conducted, your college/institute would have to meet the following system requirements:</p>
        <ul className="list-disc pl-5">
          <li>
            A multimedia projector.
          </li>
          <li>
            Browser: Firefox, Chrome.
          </li>
          <li>
            Internet connection (2-4 mbps).
          </li>
        </ul>
        <p>Virtual Labs Team organizes workshops with hands-on practice sessions on Virtual Labs for interested Science & Engineering Institutions. The sessions are conducted for faculty members and students of interested institutes upon expression of their interest in the Virtual Labs workshop.</p>
      </div>
    )
  },
  {
    question: 'What are the other requirements for a Onsite Virtual Labs Workshop?',
    answer: () => (
      <div>
        <p>For a Virtual Labs workshop to be conducted, your college/institute would have to meet the following requirements:</p>
        <ul className="list-disc pl-5">
          <li>
            The <Link href='http://vlab.co.in/' className="text-blue-400 hover:underline" passHref>Virtual Labs</Link> web page should be accessible from the browser.
          </li>
          <li>
            The college/institute should be a Central/State University or institute/college approved by AICTE/UGC.
          </li>
          <li>
            For onsite workshops, the college/institute must have an auditorium with a seating capacity of at least 100 and a designated/common lab space having 35 PCs or more.
          </li>
        </ul>
      </div>
    )
  },
  {
    question: 'What are the system requirements for an Online Virtual Lab Workshop?',
    answer: () => (
      <div>
        <p>For an Online Virtual Labs workshop to be conducted, your college/institute would have to meet the following system requirements:</p>
        <ul className="list-disc pl-5">
          <li>
            The institute should be a Central/State University or institute/college approved by AICTE/UGC.
          </li>
          <li>
            Each participant should have access to a reliable Internet connection or link.
          </li>
          <li>
            Browser: Firefox and Chrome.
          </li>
        </ul>
      </div>
    )
  },
  {
    question: 'How can I request for a workshop to be conducted at my college?',
    answer: () => (
      <div>
        <p>Ensure that all requirements are satisfied:</p>
        <ul className="list-disc pl-5">
          <li>
            Complete the Expression of Interest form and send the duly filled or scanned form to ioc-iiith@vlabs.ac.in.
          </li>
          <li>
            Await contact from the Virtual Labs Outreach Team.
          </li>
          <li>
            Suggest 2-3 convenient dates for the workshop.
          </li>
          <li>
            Upon receipt of the form, the Virtual Labs Outreach Team will organize the online or in-person workshop on the agreed-upon date.
          </li>
        </ul>
      </div>
    )
  },
  {
    question: 'What would be covered in the workshop?',
    answer: () => (
      <p>
        An overview of Virtual Labs, demo and hands-on of two Virtual Labs experiments will be covered during the workshop.
      </p>
    )
  },
  {
    question: 'Does my college have to pay for the workshops?',
    answer: () => (
      <p>
        College/Institute will have to pay for the travel, lodging and boarding for two Virtual Labs representatives for an Onsite Workshop. Online workshops will not incur any expenditure for the college/institute.
      </p>
    )
  },
  {
    question: 'Where can I get support on Virtual Labs Workshops?',
    answer: () => (
      <p>You can get help on workshops and other Virtual Labs related issues by posting on the mailing list for engineers contributing to Virtual Labs. You may <Link href='https://groups.google.com/a/vlabs.ac.in/g/engineers?pli=1' className="text-blue-400 hover:underline" passHref>Subscribe/Unsubscribe to the engineers</Link> mailing list. You can also post your queries to the <Link href='https://currents.google.com/u/1/communities/104131148292250423165' className="text-blue-400 hover:underline" passHref>teacher&apos;s community.</Link></p>
    )
  },
  {
    question: 'What are the terms and conditions for using Virtual Labs in your college?',
    answer: () => (
      <div>
        <p>There is no financial liability on any party for using Virtual Labs. It is free to use.</p>
        <ul className="list-disc pl-5">
          <li>
            The Institute/College cannot charge students for the use of Virtual Labs.
          </li>
          <li>
          The institute/college must nominate a single point of contact for all logistical and technical coordination between the institute and Virtual Labs.
          </li>
        </ul>
      </div>
    )
  },
  {
    question: 'Where have the Virtual Labs workshops been conducted?',
    answer: () => (
      <div>
        Please follow the <Link href='https://outreach.vlabs.ac.in/nc' className="text-blue-400 hover:underline" passHref>link</Link> to view the list of colleges where Virtual Labs Workshops have been conducted.
      </div>
    )
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<boolean[]>(Array(faqs.length).fill(false))
  const toggleAccordion = (index: number) => {
    setOpenIndex(prev => prev.map((_, i) => i === index ? !prev[i] : false))
  }
  return (
    <div>
      <h1 className={`text-4xl mb-12 font-bold text-center py-5 ${montserrat.className}`}>Frequently Asked Questions (FAQs)</h1>
      <div className="mb-16 mx-20">
        {
          faqs.map((faq, index) => (
            <Accordion key={index} index={index} qa={faq} openIndex={openIndex} toggleAccordion={toggleAccordion} />
          ))
        }
      </div>
    </div>
  )
}

function Accordion({ index, qa, openIndex, toggleAccordion }: { index: number, qa: FAQType, openIndex: boolean[], toggleAccordion: (index: number) => void }) {
  return (
    <div className="border-t last:border-b transition-all text-left">
      <div
        className={`transition-colors flex items-center justify-between gap-2 p-4 cursor-pointer hover:bg-gray-800 ${openIndex[index] ? 'bg-gray-800' : ''}`}
        onClick={() => toggleAccordion(index)}
      >
        <h2 className="text-lg font-semibold text-text">
          { qa.question }
        </h2>
        <svg
          className={`w-5 h-5 stroke-text transition-transform ${openIndex[index] ? 'rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 7l7 7 7-7" />
        </svg>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          openIndex[index] ? 'max-h-[1000px]' : 'max-h-0'
        }`}
      >
        <div className="p-4 md:pb-4">
          { qa.answer() }
        </div>
      </div>
    </div>
  )
}