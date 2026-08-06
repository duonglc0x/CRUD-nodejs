import express, { Express } from "express";
import { getHomePage, getCreateUserPage, postCreateUser} from "../controllers/userController";
const router = express.Router();

const wedRouter = (app: Express) => {
  router.get("/", getHomePage);
  router.get("/create-user", getCreateUserPage);
  router.post("/handle-create-user", postCreateUser);

  app.use("/", router);
};

export default wedRouter;
