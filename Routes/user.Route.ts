import { Router } from "express";
import { body } from "express-validator";
import multer from "multer";
//
import {
  authentification,
  findAllUsers,
  findUserById,
  deleteUsersById,
  profileUpdatePic,
} from "../controllers/user.controller";
//
//
let path = require("path");
let appdir = path.dirname(require?.main?.filename);
//
let profilePic = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, appdir + "/Public/userProfilePic");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file?.originalname);
  },
});
let upload = multer({ storage: profilePic });
//
//
const initRouter = (router: Router) => {
  router.route("/users").get(findAllUsers);
  router
    .route("/users")
    .post(
      body("email").isEmail(),
      body("password").isLength({ min: 8 }),
      authentification
    );
  router
    .route("/users/:id")
    .get(findUserById)
    .delete(deleteUsersById)
    .patch(profileUpdatePic);
};
export default initRouter;
