import { connectToDatabase } from "@/utils/mongodb";
async function run(req, res) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    const db = await connectToDatabase();
    // Send a ping to confirm a successful connection
    const newsCollection = await db.collection("products");

    if (req.method === "GET") {
      const news = await newsCollection.find({}).toArray();
      res.send({ message: "success", status: 200, data: news });
    }

    if (req.method === "POST") {
      const news = req.body;
      const result = await newsCollection.insertOne(news);
      res.json(result);
    }
  } finally {
  }
}

export default run;
