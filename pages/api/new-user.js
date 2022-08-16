import mongoose from "mongoose";
import User from "../../store/userSchema";
//   /api/new-user
//POST /api/new-user

async function handler(req, res) {
  try {
    if (req.method === "POST") {
      console.log("connecting to mongo");
      await mongoose.connect(process.env.MONGO_URL);
      console.log("connected to mongo");
      const count = await User.countDocuments({ _id: req.body._id });
      if (count > 0) console.log("user already exist");
      else {
        await User.create(req.body);
      }
      mongoose.connection.close();
      console.log("disconnected from mongo");
      res
        .status(201)
        .json({ message: "new user added successfully", data: req.body });
    } else {
      res.status(404).json({ message: "post only api" });
    }
  } catch (err) {
    res.status(404).json({ message: "post only api" });
    console.log(err);
  }
  console.log("finish add user");
}
export default handler;
