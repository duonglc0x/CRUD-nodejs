import { Request, Response } from "express";
import { handleCreateUser, getAllUsers } from "../services/userServices";

const getHomePage = async (req: Request, res: Response) => {
  //get user
  const users = await getAllUsers();
  return res.render("home", { users: users });
};
const getCreateUserPage = (req: Request, res: Response) => {
  return res.render("createUser");
};

const postCreateUser = async (req: Request, res: Response) => {
  const { name, email, address } = req.body;
  try {
    await handleCreateUser(name, email, address);
    return res.redirect("/");
  } catch (e) {
    console.error("postCreateUser error:", e);
    return res.status(500).send("Lỗi khi tạo người dùng. Vui lòng thử lại.");
  }
};

export { getHomePage, getCreateUserPage, postCreateUser };
