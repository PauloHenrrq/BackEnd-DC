import { DataTypes } from "sequelize";
import databaseConnection from "../database/database.js"

const Product = databaseConnection.define('product', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    brand: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
})

export default Product;