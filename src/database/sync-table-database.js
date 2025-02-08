import Order from "../models/Order.js";
import User from "../models/UserModel.js";
// import ItensOrder from "../models/ItensOrders.js";
// import ProductVariation from "../models/ProductVariation.js";
// import Products from "../models/Products.js";


const syncTableDatabase = async() => {
    await User.sync({ force: false }),
    await Order.sync({ force: false })
    // await ItensOrder.sync({ force: false })
    // await ProductVariation.sync({ force: false })
    // await Products.sync({ force: false })
};

export default syncTableDatabase