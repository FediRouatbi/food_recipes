import mongoose from "mongoose";
import Recipe from "../../../store/recipeSchema";
//   /api/new-recipe
//POST /api/new-recipe

async function handler(req, res) {
  if (req.method === "POST") {
    await mongoose.connect(process.env.MONGO_URL);
    await Recipe.create(req.body);

    mongoose.connection.close();

    res.status(201).json({ message: "recipe inserted! ", data: req.body });
  } else {
    res.status(404).json({ message: "post only api" });
  }
}
export default handler;
