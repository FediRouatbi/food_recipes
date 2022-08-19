import mongoose from "mongoose";

const commentsSchema = new mongoose.Schema({
  id: String,
  user: String,
  text: String,
  image: String,
  createdAt: { type: Date, default: () => Date.now() },
});
let Comment;
try {
  if (mongoose.model("Comment")) Comment = mongoose.model("Comment");
} catch (err) {
  Comment = mongoose.model("Comment", commentsSchema);
}

export default Comment;
