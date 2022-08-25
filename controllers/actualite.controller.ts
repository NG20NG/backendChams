//
//
//
//
import actualiteModel from "../model/actualite.Model";
import { Request, Response } from "express";
//
//
//
//
export const getActualite = (req: Request, res: Response) => {
  actualiteModel
    .find()
    .then((atelier: any) => res.status(200).json(atelier))
    .catch((err: Error) => res.status(500).json(err));
};
//
//
export const deleteActualite = (req: Request, res: Response) => {
  const { id } = req.params;
  actualiteModel
    .findByIdAndDelete(id)
    .then((atelier: any) => res.status(200).json(atelier))
    .catch((err: Error) => res.status(500).json(err));
};
//
//
export const postActualite = (req: Request, res: Response) => {
  const body = req.body;
  const newPost = new actualiteModel(body);
  newPost
    .save()
    .then((post: any) =>
      res.status(200).json({ actualBodu: body, afterPost: post })
    )
    .catch((err: Error) => res.status(500).json(err));
};
//
//
// export const editActualite = (req: Request, res: Response) => {
//   const photo = req.file;
//   const { title } = req.body;
//   actualiteModel
//     .findOneAndUpdate({ title })
//     .then((atelier: any) => ({ ...atelier, image: photo?.filename }))
//     .catch((err: Error) => res.status(500).json(err));
// };
//
//
// export const editActualite2: any = (req: Request, res: Response) => {
//   const { id } = req.params;
//   const { title, description } = req.body;
//   let newBody: any;
//   actualiteModel.findByIdAndUpdate(
//     id,
//     (newBody = { title, description }),
//     () => {
//       return res.json(newBody);
//     }
//   );
// };
//
//
export const findById: any = (req: Request, res: Response) => {
  const { id } = req.params;
  actualiteModel
    .findById(id)
    .then((actu: any) => res.status(200).json(actu))
    .catch((err: Error) => res.status(500).json(err));
};
