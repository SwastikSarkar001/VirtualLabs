import { NextResponse } from "next/server";
import clientPromise, { dbname } from "@/lib/mongodb";
import { SubjectProp, CourseProp } from "../../types";
import { CourseProp as CoursePropData } from "@/data/data";

export async function GET(request: Request, { params }: { params: Promise<{ course: string }> }) {
  const { course } = await params;
  try {
    const client = await clientPromise;
    const db = client.db(dbname)
    const coursesCollection = db.collection('Courses')

    const courseData: CourseProp[] = await coursesCollection.find({
      courseRouteUrl: { $regex: new RegExp(`^${encodeURIComponent(course)}`, 'i') }
    }).toArray()

    const finalData: CoursePropData[] = courses.map(course => ({
      courseId: course.courseId,
      courseName: course.courseName,
      courseRouteUrl: course.courseRouteUrl,
      courseField: {
        fieldId: course.courseField.fieldId,
        fieldName: course.courseField.fieldName,
        fieldRouteName: course.courseField.fieldRouteName
      },
      courseDescription: course.courseDescription,
      courseImage: course.courseImage,
      courseRating: course.courseRating,
      courseUpdationDate: course.courseUpdationDate,
      courseFavourite: false
    }))
    
    return NextResponse.json(
      { finalData },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error inserting documents:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}