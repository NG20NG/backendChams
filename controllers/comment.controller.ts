import commentModel from "../model/comment.Model";
import { Request, Response } from "express";
//
//
//
//
export const getComment = (req: Request, res: Response) => {
  commentModel
    .find()
    .then((comment: any) => res.status(200).json(comment))
    .catch((err: Error) => res.status(500).json(err));
};
export const getCommentById = (req: Request, res: Response) => {
  const { id } = req.params;
  commentModel
    .findById(id)
    .then((comment: any) => res.status(200).json(comment))
    .catch((err: Error) => res.status(500).json(err));
};
//
export const addComment = (req: Request, res: Response) => {
  const comment = req.body;
  const newComment = new commentModel(comment);
  newComment
    .save()
    .then((comment: any) => res.status(200).json(comment))
    .catch((err: any) => res.status(500).json(err));
};
//
export const deleteComment = (req: Request, res: Response) => {
  const { id } = req.params;
  commentModel
    .findByIdAndDelete(id)
    .then((comment: any) => res.status(200).json(comment))
    .catch((err: any) => res.status(500).json(err));
};
