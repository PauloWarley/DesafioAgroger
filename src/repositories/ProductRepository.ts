import Product from "../entity/Product";
import { AppDataSource } from "../data-source";

export const ProductRepository = AppDataSource.getRepository(Product)