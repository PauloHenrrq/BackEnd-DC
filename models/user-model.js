import { DataTypes } from "sequelize";
import sequelizeConnection from "../database/database.js"

const User = sequelizeConnection.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default User
