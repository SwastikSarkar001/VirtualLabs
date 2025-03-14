import { NextResponse } from "next/server";
import clientPromise, { dbname } from "@/lib/mongodb";
import { SubjectProp, CourseProp } from "../types";
import { CourseProp as CoursePropData } from "@/data/data";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(dbname)
    const subjectsCollection = db.collection("Subjects")
    const coursesCollection = db.collection('Courses')

    const subjects: SubjectProp[] = (await subjectsCollection.find().toArray()).map(subject => ({
      _id: subject._id,
      fieldId: subject.fieldId,
      fieldName: subject.fieldName,
      fieldRouteName: subject.fieldRouteName
    }));

    const courses: CourseProp[] = (await coursesCollection.find().toArray())
      .map(course => ({
        _id: course._id,
        courseId: course.courseId,
        courseName: course.courseName,
        courseRouteUrl: course.courseRouteUrl,
        courseField: subjects.find(subject => subject._id.equals(course.courseField))!,
        courseDescription: course.courseDescription,
        courseImage: course.courseImage,
        courseRating: course.courseRating,
        courseUpdationDate: course.courseUpdationDate
      }))

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