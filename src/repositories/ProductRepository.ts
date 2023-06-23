import Product from "../entity/Product";
import { AppDataSource } from "../data-source";

console.log("aqui 1")

export const ProductRepository = AppDataSource.getRepository(Product)