import { DataTypes } from 'sequelize'
import databaseConnection from '../database/database'
import Order from './Order'

const ItensOrder = databaseConnection.define('itens-order', {
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
    name: 'product_variation'
  }
})

export default ItensOrder