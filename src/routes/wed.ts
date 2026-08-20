import express, { Express } from "express";
import {
  getHomePage,
  getCreateUserPage,
  postCreateUser,
  postDeleteUser,
  getViewUserPage,
  postUpdateUser,
} from "controllers/userController";
import {
  getDashBoardPage,
  getAdminUserPage,
  getAdminOderPage,
  getAdminProductPage,
} from "controllers/admin/dashBoardController";
import { getProductPage } from "controllers/client/productController";
import {
  getAdminCreateProductPage,
  postAdminCreateProduct,
} from "controllers/admin/productController";
import fileUploadMiddleware from "src/middleeware/multer";
const router = express.Router();

const wedRouter = (app: Express) => {
  //client
  router.get("/", getHomePage);
  router.get("/Product/:id", getProductPage);

  //admin
  router.get("/admin", getDashBoardPage);
  router.get("/admin/user", getAdminUserPage);
  router.get("/admin/order", getAdminOderPage);

  router.get("/admin/create-user", getCreateUserPage);
  router.post(
    "/admin/handle-create-user",
    fileUploadMiddleware("avatar"),
    postCreateUser,
  );
  router.post("/admin/delete-user/:id", postDeleteUser);
  router.get("/admin/view-user/:id", getViewUserPage);
  router.post(
    "/admin/update-user/:id",
    fileUploadMiddleware("avatar"),
    postUpdateUser,
  );

  router.get("/admin/product", getAdminProductPage);
  router.get("/admin/create-product", getAdminCreateProductPage);
  router.post(
    "/admin/handle-create-product",
    fileUploadMiddleware("image", "images/product"),
    postAdminCreateProduct,
  );
  app.use("/", router);
};

export default wedRouter;
