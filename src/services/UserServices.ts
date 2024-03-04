// service for logic when app comunication to database

import { AppDataSource } from "../data-source"
import { User } from "../entity/User"

export default new class UserService {
  async create(reqBody: any) : Promise<any> {
    try {
      const repository = AppDataSource.getRepository(User)

      const user = repository.create({
        username: reqBody.username,
        password: reqBody.password
      })

      await AppDataSource
        .getRepository(User)
        .createQueryBuilder()
        .insert()
        .into(User)
        .values(user)
        .execute()

      return user
    } catch (error) {
      throw error
    }
  }

  async find() : Promise<any> {
    try {
      const users = await AppDataSource
        .getRepository(User)
        .createQueryBuilder("user")
        .getMany()
      
      return users
    } catch (error) {
      throw error
    }
  }
}