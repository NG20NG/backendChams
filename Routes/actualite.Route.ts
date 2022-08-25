import { Router } from "express";
import {
  postActualite,
  getActualite,
  deleteActualite,
  findById,
} from "../controllers/actualite.controller";
import multer from "multer";
//
let path = require("path");
let appdir = path.dirname(require?.main?.filename);
let picture = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, appdir + "/Public/Uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now().toLocaleString() + file.originalname);
  },
});
let upload = multer({ storage: picture });
//
const initRouter = (router: Router) => {
  router.route("/Actualite").get(getActualite).post(postActualite);
  router.route("/Actualite/:id").delete(deleteActualite).get(findById);
};
//
export default initRouter;
