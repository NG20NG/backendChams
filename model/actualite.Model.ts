import mongoose from "mongoose";
//
//
//
//
//
const actualiteSchema: any = new mongoose.Schema({
  title: {
    type: String,
    default: "TitleNassim",
  },
  picture: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    default: "DesCNassim",
  },
  createdAt: {
    type: Date,
    require: true,
    default: Date.now(),
  },
});
const actualiteModel = mongoose.model("Actu", actualiteSchema);
export default actualiteModel;
