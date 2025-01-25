import Order from "../models/Order.js";
import User from "../models/user-model.js";

const syncTableDatabase = async() => {
    await User.sync({ force: false }),
    await Order.sync({ force: false })
}

export default syncTableDatabase