'use client'

import Link from "next/link"
import { useState } from "react"

type FAQType = {
  question: string
  answer: () => React.ReactNode
}

const faqs: FAQType[] = [
  {
    question: 'What are Virtual Labs?',
    answer: () => (
      <p>
        Virtual Labs are intended to augment the learning of science and engineering subjects through performing experiments. The experiments are designed either as simulations or as remote triggered. A remote triggered lab allows a user to connect to real equipment using a web browser. There are currently around 150 and labs and 1500 experiments at various stages of development and deployment. They are currently hosted at Vlabs. Virtual Labs is an initiative of Ministry of Human Resources, India.
      </p>
    )
  },
  {
    question: 'What are the objectives of the Virtual Labs?',
    answer: () => (
      <div>
        <p>The broad objectives of the <span className="font-bold">Virtual Labs</span> as stated in website are:</p>
        <ol className="list-decimal pl-5">
          <li>
            To provide remote access to Labs in various disciplines.
          </li>
          <li>
            To arouse curiosity in students and help them learn concepts through remote experimentation.
          </li>
          <li>
            <p>To provide a complete <span className="font-bold">Learning Management System (LMS)</span> around the Virtual labs —</p>
            <ul className="list-disc pl-5">
              <li>
                Access to web-resources, videos, animated demonstrations
              </li>
              <li>
                Self evaluation
              </li>
            </ul>
          </li>
          <li>
            To provide access to resources available to only a limited number of users due to constraints of time and physical locations.
          </li>
        </ol>
      </div>
    )
  },
  {
    question: 'What are the various types of Virtual Labs?',
    answer: () => (
      <div>
        <p>There are two types of Virtual Labs:</p>
        <ul className="list-disc pl-5">
          <li>
            <span className="font-bold">Simulation Based Virtual Labs:</span> In these Virtual Labs, the experiments are modeled using mathematical equations. The simulations are carried out remotely at a high end server, and the results are communicated to the student over the internet. This class of Virtual Labs, at best, mimics the real-world scenarios/experiments. Simulation based Virtual Labs are scalable and can cater to a large number of simultaneous users.
          </li>
          <li>
            <span className="font-bold">Remote Triggered Virtual Labs:</span> In these Virtual Labs, the actual experiments are triggered remotely. The output of the experiment (being conducted remotely) is communicated back to the student over the internet. This class of Virtual Labs, gives the student the output of real-time experiments. Remote Triggered Virtual Labs are difficult to scale and can cater to a limited number of users. Typically, time-slots are booked before conducting such experiments.
          </li>
        </ul>
      </div>
    )
  },
  {
    question: 'Who are the intended users of the Virtual Labs?',
    answer: () => (
      <div>
        <p>The intended beneficiaries of the projects are:</p>
        <ul className="list-disc pl-5">
          <li>
            All students and Faculty Members of Science and Engineering Colleges who do not have access to good lab-facilities and/or instruments.
          </li>
          <li>
            High-school students, whose inquisitiveness will be triggered, possibly motivating them to take up higher-studies.
          </li>
          <li>
            Researchers in different institutes who can collaborate/share equipment and resources.
          </li>
          <li>
          Different engineering colleges, who can benefit from the content and related teaching resources. The project has completely fulfilled the requirements of the targeted beneficiaries (and even gone beyond). An eco-system has evolved around Virtual Labs, where the community has become involved in evolving and benefitting from the project.
          </li>
        </ul>
      </div>
    )
  },
  {
    question: 'How can I access the Virtual Labs?',
    answer: () => (
      <div>
        All Virtual Labs can be accessed through a common website: <Link href='www.vlabs.ac.in' className="text-blue-400 hover:underline" passHref>www.vlabs.ac.in</Link>. At the user end, a PC and broadband connectivity enables the user to access Virtual Labs.
      </div>
    )
  },
  {
    question: 'Is it free to use?',
    answer: () => (
      <p>
        Yes, it is free of cost to the user.
      </p>
    )
  },
  {
    question: 'What are the system configuration needed to run Workshops?',
    answer: () => (
      <div>
        <p>System configuration required for running Virtual Labs:</p>
        <ul className="list-disc pl-5">
          <li>
            No pop-up blockers.
          </li>
          <li>
            Browser: Firefox, Chrome.
          </li>
          <li>
            Internet connection (2-4 mbps).
          </li>
          <li>
            JavaScript should be enabled on the browser.
          </li>
          <li>
            Plugins: Flash, Java 1.6 version, and IcedTea.
          </li>
          <li>
            Faculty from electronics department may be needed while running some of the adders, multiplexers experiments.
          </li>
        </ul>
      </div>
    )
  },
  {
    question: 'Our college internet network has firewalls. Should any specific care be taken?',
    answer: () => (
      <p>
        If Internet network operates behind a firewall, the communication ports to facilitate VLab network traffic should be open. Specifically ports 3306, 5900, 5902, and 8700 will need to be opened.
      </p>
    )
  },
  {
    question: 'Does the Virtual Lab provide the LMS that the objectives mention?',
    answer: () => (
      <p>
        Virtual Lab project provides a complete Leaning Management System. For most users, Virtual Lab provides all the relevant material at one place including the Objectives of the Experiment, Procedure, Lab manual, Pre- and Post-experiment quizzes, additional Lab resources, in addition to the Virtual Lab experiment. Most labs also have an associated question bank.
      </p>
    )
  },
  {
    question: 'How do I register for using the Virtual Labs?',
    answer: () => (
      <div>
        <p>As mentioned earlier, Virtual Labs are divided into two categories: simulation based labs and remote triggered labs. Registration requirements are different for the two categories.</p>
        <ul className="list-disc pl-5">
          <li>
            <span className="font-bold">Simulation Based Virtual Labs:</span> All labs can be directly accessed by following the lab links on the web page.
          </li>
          <li>
            <span className="font-bold">Remote Triggered Virtual Labs:</span> To access a remote triggered lab, a user has to book a slot. For booking a slot, you have to register yourself first and then book a slot from the slot chart. All the available /booked slots can be viewed on this chart. Once a request for slot-booking is made, all the information regarding the user id, password and the slot booked will be sent to the user’s email address provided by the user at the time of registration. Once registered, a user can login using the same credentials every time. This registration has to be done by the user separately for each of the remote triggered virtual labs.
          </li>
        </ul>
      </div>
    )
  },
  {
    question: 'I already have a Physical Lab in my college/institute. What benefit will Virtual Lab provide?',
    answer: () => (
      <p>
        Virtual Lab is a complete Learning Management System. All the relevant information including the theory, lab-manual, additional web-resources, video-lectures, animated demonstrations and self-evaluation are available at a common place. Virtual Labs can be used in a complementary fashion to augment the efficacy of theory-based lectures. Small projects can also be carried out using some of the Virtual Labs. Virtual Labs can be effectively used to give lab-demonstrations to large classes.
      </p>
    )
  },
  {
    question: 'How does one derive the maximum benefit from Virtual Labs?',
    answer: () => (
      <p>
        In order to derive maximum learning experience, the users are advised to first read all the instructions for conducting the labs. There are &apos;step-by-step&apos; instructions available in each lab to assist the users.
      </p>
    )
  },
  {
    question: 'When I do an experiment how do I know if the experiment I did is done correctly?',
    answer: () => (
      <div>
        <p>Virtual Labs will provide to the students the result of an experiment by one of the following methods (or possibly a combination):</p>
        <ol className="list-decimal pl-5">
          <li>
            Modelling the physical phenomenon by a set of equations and carrying out simulations to yield the result of the particular experiment.
          </li>
          <li>
            Providing a corresponding measurement data for the Virtual Lab experiment based previously carried out measurements on an actual system.
          </li>
          <li>
            Remotely triggering an experiment in an actual lab and providing the student the result of the experiment through the computer interface.
          </li>
        </ol>
      </div>
    )
  },
  {
    question: 'How can a college conduct a Virtual Lab Workshop?',
    answer: () => (
      <div>
        For details, please follow the <Link href='http://iiith.vlabs.ac.in/workshops.html' className="text-blue-400 hover:underline" passHref>link</Link>.
      </div>
    )
  },
  {
    question: 'Whom can I contact if I get stuck while using Virtual Labs?',
    answer: () => (
      <div>
        You can email your concerns/queries to the Virtual Labs team at <Link href='mailto:poc-vlead@vlabs.ac.in' className="text-blue-400 hover:underline" passHref>support@vlabs.ac.in</Link>.
      </div>
    )
  },
  {
    question: 'How can I contribute to the FAQ?',
    answer: () => (
      <div>
        Drop a mail to <Link href='mailto:poc-vlead@vlabs.ac.in' className="text-blue-400 hover:underline" passHref>support@vlabs.ac.in</Link> with Questions (and Answers).
      </div>
    )
  },
  {
    question: 'How can I contribute to Virtual Labs?',
    answer: () => (
      <div>
        vlabs-dev is the main portal for Virtual Labs Development. Please visit the <Link href='http://vlabs-dev.vlabs.ac.in/community/contributing.html' className="text-blue-400 hover:underline" passHref>contributing section</Link> of the <Link href='http://vlabs-dev.vlabs.ac.in/' className="text-blue-400 hover:underline" passHref>vlabs-dev</Link> portal.
      </div>
    )
  }
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<boolean[]>(Array(faqs.length).fill(false))
  const toggleAccordion = (index: number) => {
    setOpenIndex(prev => prev.map((_, i) => i === index ? !prev[i] : false))
  }
  return (
    <div>
      <h1 className="text-4xl mb-12 font-bold text-center">Frequently Asked Questions (FAQs)</h1>
      <div className="mb-16">
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