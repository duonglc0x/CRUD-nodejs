import { Request, Response } from "express";
import { handleCreateUser, getAllUsers, handleDeleteUser, getUserById, handleUpdateUser } from "services/userServices";

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
const postDeleteUser = async (req: Request<{ id: string }>, res: Response) => {
  const userId = req.params.id;
  try {
    await handleDeleteUser(userId);
    return res.redirect("/");
  } catch (e) {
    console.error("Error deleting user:", e);
    return res.status(500).send("Lỗi khi xóa người dùng. Vui lòng thử lại.");
  }
};

const getViewUserPage = async (req: Request<{ id: string }>, res: Response) => {
  const userId = req.params.id;
  //get user detail from database by userId
  const user = await getUserById(userId);
  res.render("viewUser", { userId: userId, user: user });
}

const postUpdateUser = async (req: Request<{ id: string }>, res: Response) => {
  const userId = req.params.id;
  const { name, email, address } = req.body;
  try {
    // Implementation for updating user
    await handleUpdateUser(userId, name, email, address);
    return res.redirect("/");
  } catch (e) {
    console.error("Error updating user:", e);
  }
};

export { getHomePage, getCreateUserPage, postCreateUser, postDeleteUser, getViewUserPage, postUpdateUser };
