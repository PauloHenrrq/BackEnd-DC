import serviceProducts from '../service/serviceProducts.js'

const { getProductAll, postProduct, putProductsID, deleteProductID } = serviceProducts

const controllerGetProduct = (req, res) => {
  getProductAll(req, res)
};
const controllerPostProduct = (req, res) => {
  postProduct(req, res)
};
const controllerPutProducts = (req, res) => {
  putProductsID(req, res)
};
const controllerDeleteProduct = (req, res) => {
  deleteProductID(req, res)
};

export default {
  controllerGetProduct,
  controllerPostProduct,
  controllerPutProducts,
  controllerDeleteProduct
};
