import Card from "./Card";
import { Montserrat } from "next/font/google";

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
      <h1 className={`text-4xl mb-8 font-bold text-center py-2 ${montserrat.className}`}>Stakeholders</h1>
      <div className="mb-16">
        <Card />
      </div>
    </div>
  )
}
