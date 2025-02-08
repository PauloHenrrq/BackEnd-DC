import { DataTypes } from "sequelize";
import databaseConnection from "../database/database.js"

const Products = databaseConnection.define('product', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    brand: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
})

export default Products;