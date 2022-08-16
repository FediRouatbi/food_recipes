import mongoose from "mongoose";
const newRecipeSchema = new mongoose.Schema({
  _id: String,
  uid: String,
  displayName: String,
  email: String,
  phoneNumber: String,
  photoURL: String,
  createdAt: {
    type: Date,
    default: () => Date.now(),
  },
});
let User;
try {
  if (mongoose.model("User")) User = mongoose.model("User");
} catch (err) {
  User = mongoose.model("User", newRecipeSchema);
}

export default User;
