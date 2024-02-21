import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

export default new class UserService {
  UserRepository = AppDataSource.getRepository(User)

  async find(req: Request, res: Response) : Promise<Response> {
    try {
      const users = await this.UserRepository.find()

      return res.status(200).json(users)
    } catch (error) {
      return res.status(500).json(error)
    }
  }
}