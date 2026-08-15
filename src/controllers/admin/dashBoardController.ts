import { Request, Response } from "express";
import {
  getAllUsers,
} from "services/userServices";

const getDashBoardPage = async (req: Request, res: Response) => {
  return res.render("admin/dashBoard/show");
};
const getAdminUserPage = async (req: Request, res: Response) => {
  const users = await getAllUsers();
  return res.render("admin/user/show",{users: users});
};
const getAdminOderPage = async (req: Request, res: Response) => {
  return res.render("admin/order/show");
};
const getAdminProductPage = async (req: Request, res: Response) => {
  return res.render("admin/product/show");
};
export {
  getDashBoardPage,
  getAdminUserPage,
  getAdminOderPage,
  getAdminProductPage,
};
