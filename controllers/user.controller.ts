import userModel from "../model/user.Model";
import { User } from "../interface/user.Interface";
import { Request, Response } from "express";
import { validationResult } from "express-validator";
//
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
//
const mySecret = "que jaime à faire apprendre un nombre utile aux sages";
//===========================================================================reagister
export const register = (req: Request, res: Response) => {
  // ===========================================================
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // ===========================================================
  const { email, password } = req.body; // getting the email and the password from the body #postman
  const body = req.body;
  userModel
    .findOne({ email: email })
    .then((user) => {
      // find if there is a other user with the same email
      if (user) {
        // if the user === true ( message: "user Already exists" )
        res.status(500).json({ message: "user Already exists" });
      } else {
        bcrypt
          .hash(password, 10) // hashing the password
          .then((hash: string) => {
            // create a new user with the email and the hashed password
            const newUser = new userModel({
              ...body,
              email: email,
              password: hash,
            });
            newUser // saving the user in the database with .save()
              .save()
              .then((user: User) => {
                // create a token for the user
                jwt.sign(
                  JSON.stringify(user),
                  mySecret,
                  (err: any, token: any) => {
                    if (err) {
                      // if there is an err then return the err
                      res.status(500).json(err);
                    } else {
                      //if there's no err then return the user and the UserToken
                      res.status(200).json({ user, token });
                    }
                  }
                );
              })
              .catch((err) => res.status(500).json(err));
          })
          .catch((err) => res.status(500).json(err));
      }
    })
    .catch((err) => res.status(500).json(err));
};
//===========================================================================logIn
export const logIn = (req: Request, res: Response) => {
  const { email, password } = req.body;
  userModel.findOne({ email }).then((user: any) => {
    if (!user) {
      res.status(500).json({ message: "User not found" });
    } else {
      bcrypt.compare(password, user.password).then((same) => {
        if (!same) {
          res.status(500).json({ message: "Invalid credentials" });
        } else {
          jwt.sign(JSON.stringify(user), mySecret, (err: any, token: any) => {
            if (err) {
              res.json(err);
            } else {
              res.status(200).json({ user, token });
            }
          });
        }
      });
    }
  });
};
export const authentification = (req: Request, res: Response) => {
  const body = req.body;
  if (body?.nom === undefined) {
    return logIn(req, res);
  } else {
    return register(req, res);
  }
};
//===========================================================================Update User Picture
export const profileUpdatePic = (req: Request, res: Response) => {
  const { profilePic } = req.body;
  const body = req.body;
  const { id } = req.params;
  userModel
    .findByIdAndUpdate(id, { ...body, profilePic })
    .then((pic) =>
      res.status(200).json({
        pic: pic,
        newURL: profilePic,
      })
    )
    .catch((err: Error) => res.status(500).json(err));
};
//===========================================================================findAllUsers
export const findAllUsers = (req: Request, res: Response) => {
  userModel
    .find()
    .then((users) => res.status(200).json(users))
    .catch((err) => res.status(500).json(err));
};
//===========================================================================findUserById
export const findUserById = (req: Request, res: Response) => {
  const { id } = req.params;
  userModel
    .findById(id)
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(500).json(err));
};
//===========================================================================deleteUsersById
export const deleteUsersById = (req: Request, res: Response) => {
  const { id } = req.params;
  userModel
    .findByIdAndDelete(id)
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(500).json(err));
};
