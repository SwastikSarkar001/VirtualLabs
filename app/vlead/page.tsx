import Footer from "@/ui/basic/Footer";
import Navbar from "@/ui/basic/Navbar";

export function generateMetadata() {
  return {
    title: "Virtual Labs Engineering Architecture and Design | Virtual Labs",
    description: "Learn about the architecture and design of Virtual Labs"
  }
}

export default function Home() {
  return (
    <main className="flex flex-col items-stretch font-body min-h-screen">
      <Navbar />
      <section className="mt-24 mx-4 sm:mx-8 md:mx-16 xl:mx-16 flex flex-col gap-4 flex-grow">
        <h1 className="text-4xl mb-4 font-bold text-center">Virtual Labs Engineering Architecture and Design</h1>
      </section>
      <Footer />
    </main>
  )
}
