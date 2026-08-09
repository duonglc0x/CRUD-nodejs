import express, { Express } from "express";
import { getHomePage, getCreateUserPage, postCreateUser, postDeleteUser, getViewUserPage, postUpdateUser} from "controllers/userController";
const router = express.Router();

const wedRouter = (app: Express) => {
  router.get("/", getHomePage);
  router.get("/create-user", getCreateUserPage);
  router.post("/handle-create-user", postCreateUser);
  router.post("/handle-delete-user/:id", postDeleteUser);
  router.get("/handle-view-user/:id", getViewUserPage);
  router.post("/handle-update-user/:id", postUpdateUser);
  app.use("/", router);
};

export default wedRouter;
