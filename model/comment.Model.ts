import mongoose from "mongoose";
//
const commentSchema: mongoose.Schema = new mongoose.Schema({
  comment: String,
  nom: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  createdAt: {
    type: Date,
    require: true,
    default: Date.now(),
  },
});
const commentModel = mongoose.model("comment", commentSchema);
export default commentModel;
