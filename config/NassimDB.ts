//
import mongoose from "mongoose";
//
let urlDB =
  "mongodb+srv://NG20:MernNg20@mern-fullstack-cham.oikek.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose
  .connect(urlDB)
  .then(() => console.log("Conected to DateBase"))
  .catch(() => console.log("Not Conected to DateBase"));

export default mongoose.connection;
