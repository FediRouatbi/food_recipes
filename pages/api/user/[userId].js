import mongoose from "mongoose";
import User from "../../../store/userSchema";

//   /api/new-recipe
//POST /api/new-recipe

async function handler(req, res) {
  if (req.method === "GET") {
    await mongoose.connect(process.env.MONGO_URL);

    const user = await User.findOne({ _id: req.query.userId });

    mongoose.connection.close();

    res.status(201).json({ message: "user information! ", data: user });
  } else if (req.method === "PATCH") {
    await mongoose.connect(process.env.MONGO_URL);

    const user = await User.findOneAndUpdate(
      { _id: req.query.userId },
      req.body,
      { returnOriginal: false }
    );
    mongoose.connection.close();

    res.status(201).json({ message: "Update Successfully", ...user });
  } else {
    res.status(404).json({ message: "post only api" });
  }
}
export default handler;
