//
import express, { Application, Router } from "express";
import path from "path";
import cors from "cors";
import "./config/NassimDB";
//
import userRouter from "./Routes/user.Route";
import ActualiteRouter from "./Routes/actualite.Route";
import commentRouter from "./Routes/comment.Route";
//

const app: Application = express();
const router: Router = Router();
//

// testing comiting
app.use(express.json());
app.use(
  // cors({
  //   origin: "https://nassimproject.netlify.app",
  //   optionsSuccessStatus: 200,
  // })
  cors()
);
app.use(router);
//
//
userRouter(router);
ActualiteRouter(router);
commentRouter(router);
//
require("dotenv").config();
let port = process.env.PORT || 5000;

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
//   app.get("*"),
//     (req: any, res: any) => {
//       res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//     };
// }
//
app.listen(port, () => console.log("localhost : " + port));
