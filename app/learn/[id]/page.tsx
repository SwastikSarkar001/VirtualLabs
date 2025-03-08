import Footer from "@/app/ui/Footer"
import Navbar from "@/app/ui/Navbar"
import { subjects } from "@/data/data"
import { notFound } from "next/navigation"
import { IoCaretDown } from "react-icons/io5"
import { IoMdHeart } from "react-icons/io"
import { FaArrowRotateLeft } from "react-icons/fa6"
import { Suspense } from "react"
import CourseGrid from "./CourseGrid"

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const subject = subjects.find((subject) => subject.fieldRouteName === id)

  if (!subject) {
    return notFound()
  }

  return (
    <main className="flex flex-col items-stretch font-body gap-8 min-h-screen">
      <Navbar />
      <section className="mt-16 flex flex-col gap-4 flex-grow">
        <h1 className="text-4xl font-bold text-center">Learn {subject.fieldName}</h1>
        <div className="flex flex-wrap items-center justify-between px-4 md:px-16 pt-8">
          <div className="flex flex-wrap items-center gap-4 mb-4 md:mb-0">
            <div className="px-4 py-2 border-2 border-foreground rounded-full flex items-center gap-3 cursor-pointer hover:bg-foreground hover:border-background hover:text-background transition-colors">
              <div>Sort By</div>
              <IoCaretDown />
            </div>
            <div className="px-4 py-2 border-2 border-foreground rounded-full flex items-center gap-3 cursor-pointer hover:bg-foreground hover:border-background hover:text-background transition-colors">
              <div>Favorites</div>
              <IoMdHeart />
            </div>
            <div className="px-4 py-2 border-2 border-foreground rounded-full flex items-center gap-3 cursor-pointer hover:bg-foreground hover:border-background hover:text-background transition-colors">
              <div>Recent</div>
              <FaArrowRotateLeft />
            </div>
          </div>
        </div>

        <Suspense fallback={<CourseGridSkeleton />}>
          <CourseGrid id={id} />
        </Suspense>
      </section>
      <Footer />
    </main>
  )
}

function CourseGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 p-4 md:p-16 pt-8">
      {Array(9)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="relative p-8 text-center flex flex-col items-center justify-center gap-8 bg-gray-100 animate-pulse aspect-[5/6] border-2 border-gray-200 rounded-bl-2xl rounded-tl-4xl rounded-br-4xl"
          >
            <div className="absolute bg-gray-200 top-0 right-0 z-1 border-l-2 border-b-2 border-gray-200 pl-6 pb-6 pt-3 pr-3 rounded-bl-full">
              <div className="w-10 h-10 rounded-full bg-gray-300"></div>
            </div>
            <div className="w-[200px] h-[200px] bg-gray-200 rounded-tr-4xl rounded-bl-4xl"></div>
            <div className="flex flex-col gap-2 mt-auto w-full">
              <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto"></div>
              <div className="h-4 bg-gray-200 rounded w-full mx-auto mt-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mt-2"></div>
            </div>
            <div className="h-10 bg-gray-200 rounded-full w-1/2"></div>
          </div>
        ))}
    </div>
  )
}

