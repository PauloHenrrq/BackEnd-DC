import e from 'express'

import authMiddleware from '../middleware/authMiddleware.js';

import controllerProducts from "../controller/controllerProducts.js";
const { controllerGetProduct: GetProduct, 
        controllerPostProduct: PostProduct, 
        controllerPutProducts: PutProductsID, 
        controllerDeleteProduct: DeleteProductID } = controllerProducts

const productRoutes = e.Router()

productRoutes.get('/products', authMiddleware, GetProduct)

productRoutes.post('/products', authMiddleware, PostProduct)

productRoutes.put('/products/:id', authMiddleware, PutProductsID)

productRoutes.delete('/products/:id', authMiddleware, DeleteProductID)

export default productRoutes