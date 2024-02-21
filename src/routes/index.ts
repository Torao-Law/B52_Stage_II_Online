import * as express from "express";
import UserController from "../controllers/UserController";

const routes = express.Router();

routes.get("/users", UserController.find)

export default routes;