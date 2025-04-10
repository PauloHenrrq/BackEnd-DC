import Order from "../models/Order.js";
import User from "../models/UserModel.js";
// import ItensOrder from "../models/ItensOrders.js";
// import ProductVariation from "../models/ProductVariation.js";
import Product from "../models/Product.js";
import passwordRecovery from "../models/passwordRecovery.js";


const syncTableDatabase = async() => {
    await User.sync({ force: false })
    await Order.sync({ force: false })
    await Product.sync({ force: false })
    await passwordRecovery.sync({ force: false })
};

export default syncTableDatabase