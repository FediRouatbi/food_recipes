import mongoose from "mongoose";
const newRecipeSchema = new mongoose.Schema({
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
  creator: {
    uid: String,
    displayName: String,
    email: String,
    phoneNumber: String,
    photoURL: String,
  },
});
let Recipe;
try {
  if (mongoose.model("Recipe")) Recipe = mongoose.model("Recipe");
} catch (err) {
  Recipe = mongoose.model("Recipe", newRecipeSchema);
}

export default Recipe;
