import {Sequelize} from "sequelize"

const sequelizeConnection = new Sequelize ("shop_dc", "root", null, {
    host: "localhost",
    port: 3307,
    dialect: "mariadb",
    logging: false
})

const testConnection = async () => {
    try {
        await sequelizeConnection.authenticate()
        console.log("Database connected sucessfully!")
    } 
    catch(error) {
        console.log("Erro ao conectar ao banco de dados", error)
    }
}

testConnection()

export default sequelizeConnection