import { Montserrat } from "next/font/google";

type StakeholdersType = {
  heading: string,
  description: string,
}

const stakeholdersData = [
  {
    heading: "Cloud Infrastructure",
    description: 'Designing, implementing, and managing cloud infrastructure.'
  },
  {
    heading: 'Systems Administration & Monitoring',
    description: 'Overseeing system administration, monitoring, and ensuring DevOps practices.'
  },
  {
    heading: 'Common User Interface',
    description: 'Designing and implementing a common user interface.'
  },
  {
    heading: 'Process Control and Pan-institute Coordination',
    description: 'Coordinating processes and ensuring pan-institute coordination.'
  },
  {
    heading: 'Performance & Security Enhancements',
    description: 'Enhancing performance and security measures.'
  },
  {
    heading: 'Content Authoring Tools Development',
    description: 'Developing tools for content authoring.'
  },
  {
    heading: 'Technology Research',
    description: 'Engaging in research activities across various technological domains.'
  },
  {
    heading: 'New Experiment Development Coordination',
    description: 'Coordinating the development of new experiments.'
  },
  {
    heading: 'Outreach',
    description: 'Conducting outreach activities in Andhra Pradesh and Telangana.'
  },
  {
    heading: 'Digital Content Creation',
    description: 'Using state of the art digital classroom to create multimedia content and stream video lectures to complement Virtual Lab experiments.'
  }
]

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat-font",
});
export default function Motivation() {
  return (
    <div>
      <h1 className={`text-4xl mb-8 font-bold text-center py-5 ${montserrat.className}`}>Virtual Labs Engineering Architecture and Design</h1>
      <p className="text-lg mb-16">Virtual Labs, an Ministry of Education project under NMEICT, offers free remote laboratory learning experiences. Workshops and nodal centers support institute partnerships within the Virtual Labs consortium. The project, led by IIT Delhi and involving eleven institutes, provides over 190 Virtual Labs and 1600+ web-enabled experiments across various domains using open-source technologies. These simulations are accessible online without any additional infrastructure or fees.</p>
      <h1 className={`text-4xl mb-8 font-bold text-center py-2 ${montserrat.className}`}>Our Purpose</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-16 justify-items-center mb-16">
        {stakeholdersData.map((stakeholder, index) => (
          <Card key={index} stakeholder={stakeholder} />
        ))}
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