import express from 'express'

import controllerProducts from "../controller/controllerProducts.js";
const { controllerGetProduct: GetProduct, 
        controllerPostProduct: PostProduct, 
        controllerPutProducts: PutProductsID, 
        controllerDeleteProduct: DeleteProductID } = controllerProducts

const productRoutes = express.Router()

productRoutes.get('/products', GetProduct)

productRoutes.post('/products', PostProduct)

productRoutes.put('/products/:id', PutProductsID)

productRoutes.delete('/products/:id', DeleteProductID)

export default productRoutes