import { DataTypes } from "sequelize";
import databaseConnection from "../database/database.js";
import User from "./UserModel.js";

const Order = databaseConnection.define('order', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
})

Order.belongsTo(User, {
    foreignKey: {
        name: "user_id",
    }
})

export default Order