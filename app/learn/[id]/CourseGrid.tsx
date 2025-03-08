import courses from "@/data/data"
import CourseCard from "./CourseCard"

// Simulate a delay to show the loading state
async function getCourses(id: string) {
  // This artificial delay helps demonstrate the loading state
  await new Promise((resolve) => setTimeout(resolve, 1500))
  return courses.filter((course) => course.courseField.fieldRouteName === id)
}

export default async function CourseGrid({ id }: { id: string }) {
  const filteredCourses = await getCourses(id)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 p-4 md:p-16 pt-8">
      {filteredCourses.length > 0 ? (
        filteredCourses.map((course) => <CourseCard key={course.courseId} course={course} />)
      ) : (
        <div className="col-span-full text-center py-16">
          <h3 className="text-2xl font-semibold">No courses found</h3>
          <p className="text-gray-500 mt-2">Try selecting a different category or check back later.</p>
        </div>
      )}
    </div>
  )
}

