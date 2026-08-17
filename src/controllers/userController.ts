import { Request, Response } from "express";
import {
  handleCreateUser,
  getAllUsers,
  handleDeleteUser,
  getUserById,
  handleUpdateUser,
  getAllRole,
} from "services/userServices";

const getHomePage = async (req: Request, res: Response) => {
  //get user
  const users = await getAllUsers();
  return res.render("home", { users: users });
};
const getCreateUserPage = async (req: Request, res: Response) => {
  const roles = await getAllRole();
  return res.render("admin/user/create", { roles });
};

const postCreateUser = async (req: Request, res: Response) => {
  const { fullName, userName, phone, role, address } = req.body;
  const file = req.file;
  const avatar = file?.filename ?? "default-avatar.jpg";
  await handleCreateUser(fullName, userName, address, phone, avatar, role);
  return res.redirect("/admin/user");
};
const postDeleteUser = async (req: Request<{ id: string }>, res: Response) => {
  const userId = Number(req.params.id);
  try {
    await handleDeleteUser(userId);
    return res.redirect("/admin/user");
  } catch (e) {
    console.error("Error deleting user:", e);
    return res.status(500).send("Lỗi khi xóa người dùng. Vui lòng thử lại.");
  }
};

const getViewUserPage = async (req: Request<{ id: String }>, res: Response) => {
  const userId = Number(req.params.id);
  const user = await getUserById(userId);
  const roles = await getAllRole();
  return res.render("admin/user/detail", { userId, user, roles });
};

const postUpdateUser = async (req: Request<{ id: string }>, res: Response) => {
  const userId = Number(req.params.id);
  const { fullName, phone, role, address } = req.body;
  const file = req.file;
  const avatar = file?.filename?? "default-avatar.jpg";
  try {
    // Implementation for updating user
    const user = await handleUpdateUser(userId, fullName,role, address,phone, avatar);
    return res.redirect("/admin/user");
  } catch (e) {
    console.error("Error updating user:", e);
  }
};

export {
  getHomePage,
  getCreateUserPage,
  postCreateUser,
  postDeleteUser,
  getViewUserPage,
  postUpdateUser,
};
