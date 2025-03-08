"use client"

import type { CourseProp } from "@/data/data"
import { toggleFavorite } from "./course-actions"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function CourseCard({ course }: { course: CourseProp }) {
  const [imgSrc, setImgSrc] = useState(course.courseImage.src)
  const [isFavorite, setIsFavorite] = useState(course.courseFavourite)
  const [isLoading, setIsLoading] = useState(false)

  // const handleFavoriteToggle = async () => {
  //   setIsLoading(true)
  //   try {
  //     const result = await toggleFavorite(course.courseId, isFavorite)
  //     if (result.success) {
  //       setIsFavorite(result.isFavorite)
  //       toast({
  //         title: result.isFavorite ? "Added to favorites" : "Removed from favorites",
  //         description: `${course.courseName} has been ${result.isFavorite ? "added to" : "removed from"} your favorites.`,
  //         variant: result.isFavorite ? "default" : "destructive",
  //       })
  //     } else {
  //       toast({
  //         title: "Action failed",
  //         description: "Could not update favorite status. Please try again.",
  //         variant: "destructive",
  //       })
  //     }
  //   } catch (error) {
  //     toast({
  //       title: "Error",
  //       description: "An unexpected error occurred.",
  //       variant: "destructive",
  //     })
  //   } finally {
  //     setIsLoading(false)
  //   }
  // }

  const handleFavoriteToggle = async () => {
  }

  // Generate stars based on rating
  const renderRating = () => {
    const rating = Math.round(course.courseRating)
    return (
      <div className="flex items-center justify-center gap-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            className={`size-4 ${i < Math.round(rating) ? 'fill-yellow-500' : 'fill-gray-200'}`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
          </svg>
        ))}
        <span className="ml-2 text-sm">{course.courseRating.toFixed(1)}</span>
      </div>
    )
  }

  return (
    <div className="relative p-8 text-center flex flex-col items-center justify-center gap-8 bg-amber-600/5 aspect-[5/6] border-2 border-amber-600 rounded-bl-2xl rounded-tl-4xl rounded-br-4xl transition-all hover:shadow-lg hover:shadow-amber-400/30">
      <div className="absolute bg-amber-600/10 top-0 right-0 z-1 border-l-2 border-b-2 border-amber-600 pl-6 pb-6 pt-3 pr-3 rounded-bl-full">
        <button
          className={`cursor-pointer transition-transform duration-300 hover:scale-110${isLoading ? " animate-pulse pointer-events-none" : ''}`}
          onClick={handleFavoriteToggle}
          disabled={isLoading}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-10 stroke-rose-500 ${course.courseFavourite ? 'fill-rose-500' : 'fill-transparent'}`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
        </button>
      </div>
      <div className="overflow-hidden rounded-tr-4xl rounded-bl-4xl border-2 border-amber-600">
        <Image
          width={200}
          height={200}
          src={imgSrc}
          alt={course.courseImage.alt}
          className="object-cover transition-transform duration-300 hover:scale-110"
          onError={() => setImgSrc("/dummy-course.webp")}
        />
      </div>
      <div className="flex flex-col gap-2 mt-auto w-full">
        <h2 className="text-xl font-bold mb-2 line-clamp-2 h-14">{course.courseName}</h2>
        <p className="text-sm line-clamp-2 h-10 text-gray-600">{course.courseDescription}</p>
        {renderRating()}
        <div className="text-xs text-gray-500 mt-1">
          Updated on {new Date(course.courseUpdationDate).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
      </div>
      <Link
        href={course.courseRouteUrl}
        className="px-6 py-2 border-2 rounded-full border-amber-600 hover:bg-amber-600 hover:text-white transition-colors duration-300"
      >
        Start Learning
      </Link>
    </div>
  )
}

