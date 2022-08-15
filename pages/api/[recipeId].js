import mongoose from "mongoose";
import Recipe from "../../store/newRecipeSchema";

//   /api/new-recipe
//POST /api/new-recipe

async function handler(req, res) {
  if (req.method === "GET") {
    console.log("connecting to mongo");
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connected to mongo");

    const recipe = await Recipe.findOne({ id: req.query.recipeId });

    mongoose.connection.close();
    res.status(201).json({ message: "recipe inserted! ", data: recipe });
  } else {
    res.status(404).json({ message: "post only api" });
  }
}
export default handler;
