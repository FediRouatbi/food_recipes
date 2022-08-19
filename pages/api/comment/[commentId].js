import mongoose from "mongoose";
import Comment from "../../../store/commentSchema";

async function handler(req, res) {
  await mongoose.connect(process.env.MONGO_URL);

  if (req.method === "GET") {
    const data = await Comment.find({ id: req.query.commentId });
    mongoose.connection.close();
    res.status(201).json({ message: "sucsessfully", comments: data });
  }

  if (req.method === "DELETE") {
    console.log(req.query.commentId);
    await Comment.deleteOne({ _id: req.query.commentId });
    mongoose.connection.close();

    res.status(202).json({ message: "comment delete sucsessfully" });
  }
  if (req.method === "PATCH") {
    await Comment.findOneAndUpdate({ _id: req.query.commentId }, req.body);
    res.status(202).json({ message: "comment updated sucsessfully" });
  }
}
export default handler;
