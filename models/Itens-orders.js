import { DataTypes } from 'sequelize'
import databaseConnection from '../database/database.js'
import Order from './Order.js'

const ItensOrder = databaseConnection.define('itens_order', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  quantity: {
    type: DataTypes.INTEGER
  }
})

ItensOrder.belongsTo(Order, {
  foreignKey: {
    name: 'order_id'
  }
})

ItensOrder.belongsTo(product_variation, {
  foreignKey: {
    name: 'product_variation_id'
  }
})

export default ItensOrder