import { Request, Response } from "express";
import { productSchema, TProductSchema } from "src/validation/productSchema";
const getAdminCreateProductPage = async (req: Request, res: Response) => {
  return res.render("admin/product/create");
};
const postAdminCreateProduct = async(req: Request,res: Response)=>{
  const {name} = req.body as TProductSchema;
  try {
    const result = productSchema.parse(req.body);
    console.log("run ok",result)
  } catch (error) {
    console.log(error)
  }
  return res.redirect("/admin/product")
}


export { getAdminCreateProductPage,postAdminCreateProduct };
