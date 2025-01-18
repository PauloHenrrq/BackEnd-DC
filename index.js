import express from 'express' // IMPORTAÇÃO DA BIBLIOTECA EXPRESS
import cors from 'cors'
import sequelizeConnection from './database/database.js'
import User from './models/user-model.js'

const app = express() // DECLARAÇÃO DO EXPRESS PARA UTILIZAR COMO APP
const port = 3000 // DECLARAÇÃO DA PORTA COMO 3000

app.use(cors())
app.use(express.json())

app.post('/', async (request, response) => {
  const { name, birthdate } = request.body
  const users = await User.create({ name, birthdate });
  return response.status(200).json('Dados salvos com sucesso')
})

app.get('/', async (request, response) => {
  const user = request.body
  // const users = await User.sync();
  return response.status(200).json(`Os dados a serem salvos são ${user}`)
})

const initServer = async () => {
  await sequelizeConnection.sync({ force: false })

  app.listen(port, error => {
    console.log('App is running')
  })
}

initServer()
