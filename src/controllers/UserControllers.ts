// Controllers for logical system application

import { Request, Response } from "express";
import UserServices from "../services/UserServices";

export default new class UserControllers {
  async create(req: Request, res: Response) : Promise<Response> {
    try {
      const data = req.body

      const user = await UserServices.create(data)

      return res.status(201).json(user)
    } catch (error) {
      return res.status(500).json({ message: error })
    }
  }

  async find(req: Request, res: Response) : Promise<Response> {
    try {
      const users = await UserServices.find()

      return res.status(200).json(users)
    } catch (error) {
      return res.status(500).json({ message: error })
    }
  }
}