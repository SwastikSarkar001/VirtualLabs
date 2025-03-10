import Footer from "@/ui/basic/Footer";
import Navbar from "@/ui/basic/Navbar";

export function generateMetadata() {
  return {
    title: "About | Virtual Labs",
    description: "Learn about Virtual Labs"
  }
}

export default function Home() {
  return (
    <main className="flex flex-col items-stretch font-body min-h-screen">
      <Navbar />
      <section className="mt-24 mx-4 sm:mx-8 md:mx-16 xl:mx-16 flex flex-col gap-4 flex-grow">
        <h1 className="text-4xl mb-4 font-bold text-center">Virtual Labs</h1>
        <p className="text-lg text-center text-gray-400">Virtual Labs, an Ministry of Education project under NMEICT, offers free remote laboratory learning experiences. Workshops and nodal centers support institute partnerships within the Virtual Labs consortium. The project, led by IIT Delhi and involving eleven institutes, provides over 190 Virtual Labs and 1600+ web-enabled experiments across various domains using open-source technologies. These simulations are accessible online without any additional infrastructure or fees.</p>
      </section>
      <Footer />
    </main>
  )
}