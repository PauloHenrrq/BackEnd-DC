import express from 'express' // IMPORTAÇÃO DA BIBLIOTECA EXPRESS
import cors from 'cors'
import User from './models/user-model.js'
import Order from './models/Order.js'
import syncTableDatabase from './database/sync-table-database.js'

const app = express() // DECLARAÇÃO DO EXPRESS PARA UTILIZAR COMO APP
const port = 3000 // DECLARAÇÃO DA PORTA COMO 3000

app.use(cors())
app.use(express.json())

app.post('/', async (request, response) => {
  const { name, birthdate } = request.body
  const users = await User.create({ name, birthdate });
  const order = await Order.create({ user_id: users.id})
  return response.status(200).json('Dados salvos com sucesso')
})

app.get('/', async (request, response) => {
  const user = request.body
  // const users = await User.sync();
  return response.status(200).json(`Os dados a serem salvos são ${user}`)
})

const initServer = async () => {
  await syncTableDatabase();
  app.listen(port, error => {
    console.log('App is running')
  })
}

initServer()
