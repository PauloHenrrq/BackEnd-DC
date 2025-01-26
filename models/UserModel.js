import { DataTypes } from "sequelize";
import databaseConnection from "../database/database.js"

const User = databaseConnection.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    birthdate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
});

export default User
