import express from 'express'
import cors from 'cors'
import syncTableDatabase from './src/database/sync-table-database.js'

import User from './src/models/UserModel.js'
import Order from './src/models/Order.js'
import ItensOrder from './src/models/ItensOrders.js'
import ProductVariation from './src/models/ProductVariation.js'
import Product from './src/models/Product.js'

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.get('/product', async (request, response) => {
  try {
    const getProduct = await Product.findAll()

    if (getProduct.length === 0) {
      return response.status(404).json({message: "Não existe Produtos"})
    }

    return response.status(200).json({
      message: 'Produtos encontrados com Sucesso:',
      data: getProduct
    })

  } catch (error) {
    return response
      .status(500)
      .json(`Não foi possível encontrar os Produtos | Erro: ${error.message}`)
  }
})

app.post('/product', async (request, response) => {
  try {
    const { name, brand, description } = request.body
    const productCreate = await Product.create({
      name,
      brand,
      description
    })
    return response
      .status(200)
      .json(`Produto cadastrado com sucesso: ${JSON.stringify(productCreate)}`)
  } catch (error) {
    return response
      .status(500)
      .json(`Não foi possível cadastrar o Produto | Erro: ${error.message}`)
  }
})

app.put('/product/:id', async (request, response) => {
  try {
    const { id } = request.params
    const { name, brand, description } = request.body

    const idCheck = await Product.findByPk(id)

    if (!idCheck) {
      return response.status(404).json({ message: 'Produto não encontrado.' })
    }

    const productUpdate = await Product.update(
      {
        name,
        brand,
        description
      },
      {
        where: {
          id: id
        }
      }
    )
    return response
      .status(200)
      .json(`Produto atualizado com sucesso: ${JSON.stringify(productUpdate)}`)
  } catch (error) {
    return response
      .status(500)
      .json(`Não foi possível atualizar o Produto | Erro: ${error.message}`)
  }
})

app.delete('/product/:id', async (request, response) => {
  try {
    const { id } = request.params

    const idCheck = await Product.findByPk(id)

    if (!idCheck) {
      return response.status(404).json({ message: 'Produto não encontrado.' })
    }

    const delProduct = await Product.destroy({
      where: {
        id: id
      }
    }) 
    return response
      .status(200)
      .json(`Produto deletado com sucesso: ${JSON.stringify(delProduct)}`)

  } catch (error) {
    return response
      .status(500)
      .json(`Não foi possível deletar o Produto | Erro: ${error.message}`)
  }
})

const initServer = async () => {
  await syncTableDatabase()
  app.listen(port, error => {
    console.log('App is running')
  })
}

initServer()