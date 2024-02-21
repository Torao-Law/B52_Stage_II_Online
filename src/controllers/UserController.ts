import { Request, Response } from "express";
import UserService from "../services/UserService";

export default new class UserController {
  find(req: Request, res: Response) {
    UserService.find(req, res)
  }
}