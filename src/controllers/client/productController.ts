import { Request, Response } from "express";

const getProductPage = async (req: Request, res: Response) => {
  return res.render("client/product/detail");
};

const getAdminCreateProductPage =async (req: Request, res: Response) => {
  return res.render("client/product/create");
};

export {getProductPage}