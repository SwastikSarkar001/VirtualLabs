import { Montserrat } from "next/font/google";

type ResponsibilityType = {
  heading: string,
  description: string,
}

const responsibilities = [
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
    heading: 'Central Analytics',
    description: 'Collecting and reporting analytics data.'
  },
  {
    heading: 'Build Automation',
    description: 'Scripting and hosting for automation of build processes.'
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
      <p className="text-lg mb-8">The Virtual Labs Engineering, Architecture, and Design (VLEAD) Team at IIIT Hyderabad is a dedicated team responsible for overseeing the central platform engineering operations, engineering, and development coordination. The team&apos;s key responsibilities include:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-16 justify-items-center mb-16">
        {responsibilities.map((responsibility, index) => (
          <Card key={index} responsibility={responsibility} />
        ))}
      </div>
    </div>
  )
}

function Card({ responsibility }: { responsibility: ResponsibilityType }) {
  return (
    <div className="relative z-1 bg-linear-130 aspect-[5/4] max-w-100 from-foreground via-40% via-background to-120% to-foreground p-px rounded-tl-4xl rounded-br-4xl rounded-tr-2xl rounded-bl-2xl">
      <div className="size-full bg-background rounded-tl-4xl rounded-br-4xl rounded-tr-2xl rounded-bl-2xl text-center flex flex-col gap-8 items-center justify-center p-6">
        <h2 className="font-semibold text-2xl">{responsibility.heading}</h2>
        <p className="font-extralight text-lg">{responsibility.description}</p>
      </div>
    </div>
  )
}