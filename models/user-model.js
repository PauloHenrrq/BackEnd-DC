import { DataTypes } from "sequelize";
import sequelizeConnection from "../database/database.js"

const User = sequelizeConnection.define('User', {
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
