import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Blog } from "./entity/Blog"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "mirco_app",
    synchronize: true,
    logging: false,
    entities: [User, Blog],
    migrations: [],
    subscribers: [],
})
