import { DataTypes } from 'sequelize'
import databaseConnection from '../database/database.js'
import Products from './Product.js'

const ProductVariation = databaseConnection.define('product_variation', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
})

ProductVariation.belongsTo(Products, {
  foreignKey: {
    name: 'product_id'
  }
})

export default ProductVariation;
