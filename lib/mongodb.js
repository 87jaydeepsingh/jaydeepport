import { MongoClient } from "mongodb";

const uri = process.env.JDB_MONGODB_URI;

console.log("Mongo URI:", process.env.JDB_MONGODB_URI);

if (!uri) {
  throw new Error("MongoDB URI not found. Check .env.local file");
}

const client = new MongoClient(uri);

const clientPromise = client.connect();

export default clientPromise;
