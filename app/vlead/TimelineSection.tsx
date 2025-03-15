"use client"
import { Montserrat } from "next/font/google"
import Timeline from "./Timeline"
import { LuCode, LuRocket, LuStar, LuZap } from "react-icons/lu"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat-font",
});

export default function TimelineSection() {
  const timelineItems = [
    {
      id: "1",
      date: "2021-2026",
      title: "Extended Phase 3",
      description: [
        'Automation of Lab Deployment',
        'Provision of a Validation Tool',
        'Provision of a Performance Tool',
        'Development of 16 Labs (Yr 1 & 2)',
        'Enhancement of Cloud Architecture',
        'Development of a VS Code Extension',
        'Provision of Common Developer Tools',
        'Creation of an Outreach Tracker Tool',
        'Implementation of a Bug Reporting Tool',
        'Inclusion of a Rating Feature to Rate Labs',
        'Development of a National Question Repository',
        'Implementation of 140 Experiments Across 4 Domains',
        'Building of Virtual Labs Progressive Web Application'
      ],
      icon: <LuStar className="w-3 h-3 text-white" />,
    },
    {
      id: "2",
      date: "2018-2020",
      title: "Phase 3",
      description: [
        'Maintenance of Labs',
        'Developer Workshops',
        'Uniform UI Across Labs',
        'Security Enhancements',
        'Development of 2 CS Labs',
        'Performance Enhancements',
        'FOSS Conversion of 26 Labs',
        'Automated Network Clusters',
        'Centralized Analytics Reporting',
        'Summer/Winter/Remote Internships',
        'Pilot Translation of 2 Labs (Hindi and Telugu)'
      ],
      icon: <LuCode className="w-3 h-3 text-white" />,
    },
    {
      id: "3",
      date: "2014-2017",
      title: "Phase 2",
      description: [
        'Virtual Labs Platform on Open edX',
        'Centralized Integration Platform',
        'Lab Hosting on Central Cloud',
        'FOSS Conversion Methodology',
        'Version Control on GitHub',
        'Performance Enhancements',
        'Integration Workshops',
        'Security Enhancements',
        'Lab Development Kits',
        'Maintenance of Labs',
        'Outreach Portal',
      ],
      icon: <LuRocket className="w-3 h-3 text-white" />,
    },
    {
      id: "4",
      date: "2009-2013",
      title: "Phase 1",
      description: [
        '260 experiments across 4 domains',
        'Development of 27 Labs',
        'Outreach Workshops'
      ],
      icon: <LuZap className="w-3 h-3 text-white" />,
    }
  ]

  return (
    <div className="min-h-screen self-stretch">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <h1 className={`text-4xl font-extrabold tracking-tight text-white ${montserrat.className}`}>
            <span className="block">Our Journey</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Through Time
            </span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
            Explore the key milestones that have shaped our path to success.
          </p>
        </div>

        <Timeline items={timelineItems} />
      </div>
    </div>
  )
}

