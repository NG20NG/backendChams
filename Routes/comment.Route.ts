import { Router } from "express";
//
import {
  getComment,
  addComment,
  deleteComment,
  getCommentById,
} from "../controllers/comment.controller";
//
//
const initRouter = (router: Router) => {
  router
    .route("/comment")
    .get(getComment)
    .post(addComment)
    .delete(deleteComment);
  router.route("/comment/:id").get(getCommentById).delete(deleteComment);
};
export default initRouter;
