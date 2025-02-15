import Order from "../models/Order.js";
import User from "../models/UserModel.js";
// import ItensOrder from "../models/ItensOrders.js";
// import ProductVariation from "../models/ProductVariation.js";
import Product from "../models/Product.js";


const syncTableDatabase = async() => {
    await User.sync({ force: false }),
    await Order.sync({ force: false })
    await Product.sync({ force: true })
};

export default syncTableDatabase