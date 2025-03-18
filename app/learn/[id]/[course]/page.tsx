import Footer from "@/ui/basic/Footer"
import Navbar from "@/ui/basic/Navbar"
import courses from "@/data/data"
import { notFound } from "next/navigation"

export async function generateMetadata({ params }: { params: Promise<{ course: string }> }) {
  const { course } = await params
  const courseData = courses.find((courseData) => courseData.courseRouteUrl.includes(course))

  if (!courseData) {
    return {
      title: "Not Found",
      description: "This page does not exist",
    }
  }

  return {
    title: `${courseData.courseName}`,
    description: `Learn ${courseData.courseName} with Virtual Labs`,
  }
}

export default async function Page({ params }: { params: Promise<{ course: string }>}) {
  const { course } = await params
  const courseData = courses.find((courseData) => courseData.courseRouteUrl.includes(course))
  if (!courseData) {
    return notFound()
  }
  else
  return (
    <main className="flex flex-col items-stretch font-body gap-8 min-h-screen">
      <Navbar />
      <section className="mt-16 px-8 flex flex-col gap-1 flex-grow">
        <h1 className="text-4xl font-bold text-center mb-4">{courseData.courseName}</h1>
        <h2 className="text-xl text-center">Course ID : {courseData.courseId}</h2>
        <h2 className="text-xl text-center">Last updated on : {new Date(courseData.courseUpdationDate).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })}</h2>
        <h2 className="text-center text-xl flex items-center justify-center mb-5">
          <div className="mr-2">Rating :</div>
          {
            [...Array(5)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                className={`size-[1em] ${i < Math.round(courseData.courseRating) ? 'fill-yellow-500' : 'fill-gray-200'}`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>
            ))
          }
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora cumque ad nulla aliquid eligendi totam officia repudiandae ut nisi. Odit esse dolor sunt quidem voluptate cupiditate error, assumenda totam molestiae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta ea veniam quia voluptatibus dolores a vero corporis, ipsa non? Nam harum commodi sint quos ut molestiae temporibus reprehenderit placeat. Reiciendis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quae. Dicta obcaecati molestiae cupiditate iste neque similique fuga consequatur voluptate ad officia repudiandae voluptatibus corporis laudantium eligendi, illo tempora eum!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora cumque ad nulla aliquid eligendi totam officia repudiandae ut nisi. Odit esse dolor sunt quidem voluptate cupiditate error, assumenda totam molestiae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta ea veniam quia voluptatibus dolores a vero corporis, ipsa non? Nam harum commodi sint quos ut molestiae temporibus reprehenderit placeat. Reiciendis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quae. Dicta obcaecati molestiae cupiditate iste neque similique fuga consequatur voluptate ad officia repudiandae voluptatibus corporis laudantium eligendi, illo tempora eum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quia error mollitia placeat velit, debitis neque itaque porro laborum, amet magnam aliquid repellat, blanditiis officiis. Ullam eligendi voluptatem quam nemo!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora cumque ad nulla aliquid eligendi totam officia repudiandae ut nisi. Odit esse dolor sunt quidem voluptate cupiditate error, assumenda totam molestiae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta ea veniam quia voluptatibus dolores a vero corporis, ipsa non? Nam harum commodi sint quos ut molestiae temporibus reprehenderit placeat. Reiciendis? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </section>
      <Footer />
    </main>
  )
}
