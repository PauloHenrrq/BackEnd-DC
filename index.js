import express from 'express' // IMPORTAÇÃO DA BIBLIOTECA EXPRESS
import cors from "cors"
import sequelizeConnection from './database/database.js'
import User from "./models/user-model.js"

const app = express() // DECLARAÇÃO DO EXPRESS PARA UTILIZAR COMO APP
const port = 3000 // DECLARAÇÃO DA PORTA COMO 3000

app.use(cors())
app.use(express.json())

app.post('/', async (request, response) => {
  const {name} = request.body
  const user = await User.create({ name: name})
  return response.status(200).json(name)
})

const initServer = async () => {
  await sequelizeConnection.sync({force: false})

  app.listen(port, (error) => {
    console.log("App is running")
  })
}

initServer()
