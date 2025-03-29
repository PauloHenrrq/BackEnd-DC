import { DataTypes } from 'sequelize'
import databaseConnection from '../database/database.js'

const passwordRecovery = databaseConnection.define('password_recovery', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  code: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  timestamp: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
})

export default passwordRecovery