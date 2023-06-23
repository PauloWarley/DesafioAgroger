import "reflect-metadata"
import { DataSource } from "typeorm"
import Product from "./entity/Product"

console.log("aqui 2")

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "database.sqlite",
    synchronize: true,
    logging: false,
    entities: [Product],
    migrations: [],
    subscribers: [],
})
