import { MongoClient } from "mongodb";

const uri = process.env.DB_URL; // Replace this with your actual MongoDB connection string
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let client;
let cachedDb;

if (!client) {
  client = new MongoClient(uri, options);
}

export async function connectToDatabase() {
  if (!cachedDb) {
    await client.connect();
    cachedDb = client.db("pc-builder");
  }
  return cachedDb;
}
