import { Request, Response } from "express";
import ProductService from "../services/ProductService";

class ProductController{
    private productService: ProductService;
    
    constructor(){
        this.productService = new ProductService();
    }

    async create(req: Request, res: Response){
        // try{
            const {name, price, description, color, size} = req.body;
            
            const product = await this.productService.create({
                name, price, description, color, size
            });

            return res.status(201).json(product);
        // } catch(error){
        //     return res.status(500).json({error: 'Failed to create product.'})
        // }
    }

    async update(req: Request, res: Response){
        try{
            const {id} = req.params;
            const {name, price, description, color, size} = req.body;
            const product = await this.productService.update(id, {name, price, description, color, size});
            
            if(!product){
                return res.status(404).json({error: 'Product found.'})
            }
            return res.status(201).json(product);
        } catch(error){
            return res.status(500).json({error: 'Failed to update product.'})
        }
    }

    async delete(req: Request, res: Response){
        try{
            const {id} = req.body;
            const product = await this.productService.delete(id);
            if(!product){
                return res.status(404).json({error: 'Product found.'})
            }
            return res.sendStatus(204);
        } catch(error){
            return res.status(500).json({error: 'Failed to delete product.'})
        }
    }
    
}


export default ProductController;