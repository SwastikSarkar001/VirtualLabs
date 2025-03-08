'use client';

import { CourseProp } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Course({ course }: { course: CourseProp }) {
  const [imgSrc, getImgSrc] = useState(course.courseImage.src)
  return (
    <div className="relative p-8 text-center flex flex-col items-center justify-center gap-8 bg-amber-600/5 aspect-[5/6] border-2 border-amber-600 rounded-bl-2xl rounded-tl-4xl rounded-br-4xl">
      <div className="absolute bg-amber-600/10 top-0 right-0 z-1 border-l-2 border-b-2 border-amber-600 pl-6 pb-6 pt-3 pr-3 rounded-bl-full">
        <button className="cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-10 stroke-rose-500 ${course.courseFavourite ? 'fill-rose-500' : 'fill-transparent'}`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
        </button>
      </div>
      <div className="">
        <Image
          width={200}
          height={200}
          src={imgSrc}
          alt={course.courseImage.alt}
          className="border-2 border-amber-600 rounded-tr-4xl rounded-bl-4xl object-cover"
          onError={() => getImgSrc('/dummy-course.webp')}
        />
      </div>
      <div className="flex flex-col gap-2 mt-auto">
        <h1 className="text-2xl font-bold mb-2">{course.courseName}</h1>
        <p className="text-sm">{course.courseDescription}</p>
        <div>Ratings: {course.courseRating}</div>
      </div>
      <Link href={course.courseRouteUrl} className="px-4 py-2 border-2 rounded-full border-amber-600">
        Start Learning
      </Link>
      {/* <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-10 stroke-yellow-500 ${course.courseFavourite ? 'fill-yellow-500' : 'fill-transparent'}`}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
        </svg>
      </div> */}
    </div>
  )
}
