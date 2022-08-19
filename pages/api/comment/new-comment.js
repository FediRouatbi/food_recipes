import mongoose from "mongoose";
import Comment from "../../../store/commentSchema";

async function handler(req, res) {
  await mongoose.connect(process.env.MONGO_URL);
  await Comment.create(req.body);
  mongoose.connection.close();
  res.status(201).json({ message: "sucsess", comment: req.body.text });
}
export default handler;
