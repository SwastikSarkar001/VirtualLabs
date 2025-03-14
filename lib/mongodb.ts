import { MongoClient } from "mongodb";

const dburl = process.env.DB_URL || (() => { throw new Error("Please add your MongoDB URL to .env"); })();
export const dbname = process.env.DB_NAME || (() => { throw new Error("Please add your MongoDB database name to .env"); })();

const client = new MongoClient(dburl)
const clientPromise = client.connect()

export default clientPromise;
