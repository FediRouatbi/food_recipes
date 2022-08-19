import mongoose from "mongoose";
const recipeSchema = new mongoose.Schema({
  id: String,
  image: String,
  name: String,
  about: String,
  ingredients: [{ name: String, quantity: String, id: String }],
  methods: [{ text: String, id: String }],
  timeToCook: String,
  hours: String,
  minutes: String,
  type: String,
  difficulty: String,
  createdAt: {
    type: Date,
    default: () => Date.now(),
  },
  owner: { id: String, name: String },
});
let Recipe;
try {
  if (mongoose.model("Recipe")) Recipe = mongoose.model("Recipe");
} catch (err) {
  Recipe = mongoose.model("Recipe", recipeSchema);
}

export default Recipe;
