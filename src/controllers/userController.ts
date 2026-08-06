import {Request, Response} from "express";
import { handleCreateUser } from "../services/userServices";

const getHomePage = (req: Request, res: Response) => {
  return res.render("home");
}
const getCreateUserPage = (req: Request, res: Response) => {
  return res.render("createUser");
}

const postCreateUser = (req: Request, res: Response) => {
  // console.log("Data from form:", req.body);
  const { name, email, address } = req.body;
  //handle create user logic here
  handleCreateUser(name, email, address);
  return res.redirect("/");
};

export { getHomePage, getCreateUserPage, postCreateUser };
