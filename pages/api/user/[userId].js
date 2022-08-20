import mongoose from "mongoose";
import User from "../../../store/userSchema";

//   /api/new-recipe
//POST /api/new-recipe

async function handler(req, res) {
  console.log("szdqsd");
  if (req.method === "GET") {
    console.log("connecting to mongo");
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connected to mongo");

    const user = await User.findOne({ _id: req.query.userId });

    mongoose.connection.close();
    console.log("disconnected to mongo");

    res.status(201).json({ message: "user information! ", data: user });
  } else {
    res.status(404).json({ message: "post only api" });
  }
}
export default handler;
