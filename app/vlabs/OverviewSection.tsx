<<<<<<< HEAD
type StakeholdersType = {
  heading: string,
  description: string,
}

const stakeholdersData = [
  {
    heading: "Students",
    description: 'Gain hands-on practical experience and enhance their learning through interactive and remote experiments.'
  },
  {
    heading: 'Faculty',
    description: 'Access to diverse and versatile teaching tools that help demonstrate complex concepts easily.'
  },
  {
    heading: 'Subject Matter Experts',
    description: 'Share expertise by developing and curating high-quality virtual experiments and resources.'
  },
  {
    heading: 'Developers',
    description: 'Innovate and create advanced educational tools and simulations that improve teaching methodologies.'
  },
  {
    heading: 'Node Centre Community',
    description: 'Facilitate the distribution and management of virtual labs, ensuring wider accessibility and support.'
  },
  {
    heading: 'Participating Institutes',
    description: 'Provide students with practical lab experiences without the need for extensive physical infrastructure.'
  },
  {
    heading: 'Interns',
    description: 'Gain valuable experience in developing, testing, and refining virtual lab technologies and content.'
  },
  {
    heading: 'Ministry of Education',
    description: 'Enhance educational outreach and quality, promoting digital and interactive learning nationwide.'
  },
  {
    heading: 'Accredition Bodies',
    description: 'Ensure educational institutions meet practical training requirements efficiently through verified virtual labs.'
  },
  {
    heading: 'Service Providers',
    description: 'Offer technical support and infrastructure for hosting and maintaining virtual lab platforms.'
  },
  {
    heading: 'Universities',
    description: 'Expand their curriculum and research capabilities by integrating advanced virtual lab resources.'
  },
  {
    heading: 'Researchers',
    description: 'Access versatile simulation tools for conducting experiments and validating theoretical models remotely.'
  }
]
=======
import Card from "./Card";
import { Montserrat } from "next/font/google";
>>>>>>> refs/remotes/origin/main

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat-font",
});
export default function OverviewSection() {
  return (
    <div>
      <h1 className={`text-4xl mb-8 font-bold text-center py-5 ${montserrat.className}`}>Virtual Labs</h1>
      <p className="text-lg mb-16">Virtual Labs, an Ministry of Education project under NMEICT, offers free remote laboratory learning experiences. Workshops and nodal centers support institute partnerships within the Virtual Labs consortium. The project, led by IIT Delhi and involving eleven institutes, provides over 190 Virtual Labs and 1600+ web-enabled experiments across various domains using open-source technologies. These simulations are accessible online without any additional infrastructure or fees.</p>
<<<<<<< HEAD
      <h1 className="text-4xl mb-8 font-bold text-center">Stakeholders</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-16 justify-items-center mb-16">
        {stakeholdersData.map((stakeholder, index) => (
          <Card key={index} stakeholder={stakeholder} />
        ))}
=======
      <h1 className={`text-4xl mb-8 font-bold text-center py-2 ${montserrat.className}`}>Stakeholders</h1>
      <div className="mb-16">
        <Card />
>>>>>>> refs/remotes/origin/main
      </div>
    </div>
  )
}

function Card({ stakeholder }: { stakeholder: StakeholdersType }) {
  return (
    <div className="relative z-1 bg-linear-130 aspect-[5/4] max-w-100 from-foreground via-40% via-background to-120% to-foreground p-px rounded-tl-4xl rounded-br-4xl rounded-tr-2xl rounded-bl-2xl">
      <div className="size-full bg-background rounded-tl-4xl rounded-br-4xl rounded-tr-2xl rounded-bl-2xl text-center flex flex-col gap-8 items-center justify-center p-6">
        <h2 className="font-semibold text-2xl">{stakeholder.heading}</h2>
        <p className="font-extralight text-lg">{stakeholder.description}</p>
      </div>
    </div>
  )
}