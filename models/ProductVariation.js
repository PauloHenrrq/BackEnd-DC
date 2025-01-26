import { DataTypes } from 'sequelize'
import databaseConnection from '../database/database.js'

const ProductVariation = databaseConnection.define('product_variation', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  sale_price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false
  },
  size: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

ProductVariation.belongsTo(products, {
  foreignKey: {
    name: 'product_id'
  }
})

export default ProductVariation;
