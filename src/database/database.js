import {Sequelize} from "sequelize"

const databaseConnection = new Sequelize ("shop_dc", "root", null, {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    logging: false
})

const testConnection = async () => {
    try {
        await databaseConnection.authenticate()
        console.log("Database connected sucessfully!")
    } 
    catch(error) {
        console.log("Erro ao conectar ao banco de dados", error)
    }
}

testConnection()

export default databaseConnection