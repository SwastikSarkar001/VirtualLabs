import Card from "./Card";

export default function OverviewSection() {
  return (
    <div>
      <h1 className="text-4xl mb-8 font-bold text-center">Virtual Labs</h1>
      <p className="text-lg mb-16">Virtual Labs, an Ministry of Education project under NMEICT, offers free remote laboratory learning experiences. Workshops and nodal centers support institute partnerships within the Virtual Labs consortium. The project, led by IIT Delhi and involving eleven institutes, provides over 190 Virtual Labs and 1600+ web-enabled experiments across various domains using open-source technologies. These simulations are accessible online without any additional infrastructure or fees.</p>
      <h1 className="text-4xl mb-8 font-bold text-center">Stakeholders</h1>
      <div className="mb-16">
        <Card />
      </div>
    </div>
  )
}
