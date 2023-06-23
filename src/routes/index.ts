import { Router } from "express";
import ProductController from '../controllers/ProductController';
var bodyParser = require('body-parser')

const routes = Router();

const productController = new ProductController();

routes.post('/api/products/', productController.create.bind(productController));
routes.put('/api/products/:id', productController.update.bind(productController));
routes.delete('/api/products/', productController.delete.bind(productController));


export default routes;