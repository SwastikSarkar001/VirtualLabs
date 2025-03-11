import Footer from "@/ui/basic/Footer"
import Navbar from "@/ui/basic/Navbar"
import { Suspense } from "react"
// import CourseGrid from "./[id]/CourseGrid"

export function generateMetadata() {
  return {
    title: `Get Started | Virtual Labs`,
    description: `Learn with Virtual Labs`,
  }
}

export default function Home() {
  return (
    <main className="flex flex-col items-stretch font-body gap-8 min-h-screen">
      <Navbar />
      <section className="mt-16 flex flex-col gap-4 flex-grow">
        <h1 className="text-4xl font-bold text-center">Learn Virtual labs</h1>
      </section>
      <Suspense fallback={<CourseGridSkeleton />}>
        {/* <CourseGrid id={id} /> */}
      </Suspense>
      <Footer />
    </main>
  )
}

function CourseGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 p-4 md:p-16 pt-8">
      {Array(9)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="relative p-8 text-center flex flex-col items-center justify-center gap-8 bg-gray-800 animate-pulse aspect-[5/6] border-2 border-gray-700 rounded-bl-2xl rounded-tl-4xl rounded-br-4xl"
          >
            <div className="absolute bg-gray-700 top-0 right-0 z-1 border-l-2 border-b-2 border-gray-700 pl-6 pb-6 pt-3 pr-3 rounded-bl-full">
              <div className="w-10 h-10 rounded-full bg-gray-600"></div>
            </div>
            <div className="w-[200px] h-[200px] bg-gray-700 rounded-tr-4xl rounded-bl-4xl"></div>
            <div className="flex flex-col gap-2 mt-auto w-full">
              <div className="h-8 bg-gray-700 rounded w-3/4 mx-auto"></div>
              <div className="h-4 bg-gray-700 rounded w-full mx-auto mt-2"></div>
              <div className="h-4 bg-gray-700 rounded w-1/2 mx-auto mt-2"></div>
            </div>
            <div className="h-10 bg-gray-700 rounded-full w-1/2"></div>
          </div>
        ))}
    </div>
  )
}