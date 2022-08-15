// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import mongoose from "mongoose";
const Recipe = mongoose.model("Recipe");

async function handler(req, res) {
  if (req.method === "GET") {
    await mongoose.connect(process.env.MONGO_URL);
    const recipes = await Recipe.find();
    mongoose.connection.close();
    res.status(201).json(recipes);
  } else res.status(201).json({ name: "John Doe" });
}
export default handler;
