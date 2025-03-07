import Product from '../models/Product.js'

// Retorna todos os produtos
async function getProductAll (req, res) {
  try {
    const getProduct = await Product.findAll()

    if (getProduct.length === 0) {
      return res.status(404).json({ message: 'Não existe Produtos' })
    }

    return res.status(200).json({
      message: 'Produtos encontrados com Sucesso:',
      data: getProduct
    })
  } catch (error) {
    return res
      .status(500)
      .json(`Não foi possível encontrar os Produtos | Erro: ${error.message}`)
  }
}

// Criação de Produto
async function postProduct (req, res) {
  try {
    const { name, brand, description } = req.body
    const productCreate = await Product.create({
      name,
      brand,
      description
    })
    return res
      .status(200)
      .json(`Produto cadastrado com sucesso: ${JSON.stringify(productCreate)}`)
  } catch (error) {
    return res
      .status(500)
      .json(`Não foi possível cadastrar o Produto | Erro: ${error.message}`)
  }
}

// Atualização dos Produtos por ID
async function putProductsID (req, res) {
  try {
    const { id } = req.params
    const { name, brand, description } = req.body

    const idCheck = await Product.findByPk(id)

    if (!idCheck) {
      return res.status(404).json({ message: 'Produto não encontrado.' })
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
    return res
      .status(200)
      .json(`Produto atualizado com sucesso: ${JSON.stringify(productUpdate)}`)
  } catch (error) {
    return res
      .status(500)
      .json(`Não foi possível atualizar o Produto | Erro: ${error.message}`)
  }
}

// Deleta o Produto pelo ID
async function deleteProductID (req, res) {
  try {
    const { id } = req.params

    const idCheck = await Product.findByPk(id)

    if (!idCheck) {
      return res.status(404).json({ message: 'Produto não encontrado.' })
    }

    const delProduct = await Product.destroy({
      where: {
        id: id
      }
    })
    return res
      .status(200)
      .json(`Produto deletado com sucesso: ${JSON.stringify(delProduct)}`)
  } catch (error) {
    return res
      .status(500)
      .json(`Não foi possível deletar o Produto | Erro: ${error.message}`)
  }
}

export default {
  getProductAll,
  postProduct,
  putProductsID,
  deleteProductID
}
