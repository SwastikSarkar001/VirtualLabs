import { FieldProp, CourseProp as CoursePropData } from "@/data/data";
import { ObjectId } from "mongodb";

export type SubjectProp = {
  _id: ObjectId
} & FieldProp

export type CourseProp = { 
  _id: ObjectId 
} & Omit<CoursePropData, 'courseField' | 'courseFavourite'> & { 
  courseField: SubjectProp 
}