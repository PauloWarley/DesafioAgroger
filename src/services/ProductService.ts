import {ProductRepository} from "../repositories/ProductRepository";
import Product from "../entity/Product";

interface ProductType {
    name: string;
    price: number;
    description: string;
    color: string;
    size: string;
}

class ProductService {
    private productRepository;

    constructor (){
        this.productRepository = ProductRepository;
    }

    async create(data: ProductType): Promise<Product> {

        const product = this.productRepository.create(data);
        await this.productRepository.save(product);
        return product;
    }

    async update(id: string, data: ProductType): Promise<Product> {

        await this.productRepository.update(id, data);
        
        const product = await this.productRepository.findOne({
            where: {id}
        });

        return product;
    }

    async delete(id: string){
        const product = await this.productRepository.findOne({
            where: {id}
        });
        await this.productRepository.delete(id);
        return product;
    }
}


export default ProductService;
