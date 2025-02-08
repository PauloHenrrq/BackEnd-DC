import express from 'express'
import cors from 'cors'
import syncTableDatabase from './database/sync-table-database.js'

import User from './models/UserModel.js'
import Order from './models/Order.js'
import ItensOrder from './models/ItensOrders.js'
import ProductVariation from './models/ProductVariation.js'
import Product from './models/Product.js'

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.post('/product', async (request, response) => {
  try {
    const { name, brand, description } = request.body
    const product = await Product.create({
      name,
      brand,
      description
    })
    return response
      .status(200)
      .json(`Produto cadastrado com sucesso: ${JSON.stringify(product)}`)
  } catch (error) {
    return response
      .status(500)
      .json(`Não foi possível cadastrar o produto | Erro: ${error.message}`)
  }
})

const initServer = async () => {
  await syncTableDatabase()
  app.listen(port, error => {
    console.log('App is running')
  })
}

initServer()
