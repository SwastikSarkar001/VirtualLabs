import { NextResponse } from "next/server";
import clientPromise, { dbname } from "@/lib/mongodb";
import { FieldProp } from "@/data/data";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(dbname)
    const subjectsCollection = db.collection("Subjects")

    const subjects: FieldProp[] = (await subjectsCollection.find().toArray()).map(subject => ({
      fieldId: subject.fieldId,
      fieldName: subject.fieldName,
      fieldRouteName: subject.fieldRouteName
    }));
    
    return NextResponse.json(
      { subjects },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error inserting documents:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}