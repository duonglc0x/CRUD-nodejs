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
import fileUploadMiddleware from "src/middleeware/multer";
const router = express.Router();

const wedRouter = (app: Express) => {
  router.get("/", getHomePage);
  router.get("/create-user", getCreateUserPage);

  //admin
  router.get("/admin", getDashBoardPage);
  router.get("/admin/user", getAdminUserPage);
  router.get("/admin/order", getAdminOderPage);
  router.get("/admin/product", getAdminProductPage);
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
  app.use("/", router);
};

export default wedRouter;
