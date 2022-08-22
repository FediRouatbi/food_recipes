import mongoose from "mongoose";
import User from "../../../store/userSchema";
//   /api/new-user
//POST /api/new-user

async function handler(req, res) {
  try {
    if (req.method === "POST") {
      await mongoose.connect(process.env.MONGO_URL);

      const count = await User.countDocuments({ _id: req.body._id });
      if (count > 0)  res.status(202).json({ message: "user already exist" });
      else {
        await User.create(req.body);
      }
      mongoose.connection.close();

      res
        .status(202)
        .json({ message: "new user added successfully", data: req.body });
    } else {
      res.status(404).json({ message: "post only api" });
    }
  } catch (err) {
    res.status(404).json({ message: "post only api" });
    console.log(err);
  }
}
export default handler;
