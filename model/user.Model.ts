import mongoose from "mongoose";
import { User } from "../interface/user.Interface";
//
const userSchema: mongoose.Schema<User> = new mongoose.Schema({
  nom: String,
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePic: {
    type: String,
    required: false,
  },
  comment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "comment",
  },
  createdAt: {
    type: Date,
    require: true,
    default: Date.now(),
  },
});
const userModel = mongoose.model<User>("users", userSchema);
export default userModel;
