import User from '../models/UserModel.js'

// Retorna todos os usuários
async function getUserAll (req, res) {
  try {
    const getUser = await User.findAll()

    if (getUser.length === 0) {
      return res.status(404).json({ message: 'Não existe Usuários' })
    }

    return res.status(200).json({
      message: 'Usuários encontrados com Sucesso:',
      data: getUser
    })
  } catch (error) {
    return res
      .status(500)
      .json(`Não foi possível encontrar os Usuários | Erro: ${error.message}`)
  }
}

// Criação de Usuário
async function postUser (req, res) {
  try {
    const { name, birthdate } = req.body
    const userCreate = await User.create({
      name,
      birthdate
    })
    return res
      .status(200)
      .json(`Usuário cadastrado com sucesso: ${JSON.stringify(userCreate)}`)
  } catch (error) {
    return res
      .status(500)
      .json(`Não foi possível cadastrar o Usuário | Erro: ${error.message}`)
  }
}

// Atualização dos Usuários por ID
async function putUserID (req, res) {
  try {
    const { id } = req.params
    const { name, birthdate } = req.body

    const idCheck = await User.findByPk(id)

    if (!idCheck) {
      return res.status(404).json({ message: 'Usuário não encontrado.' })
    }

    const userUpdate = await User.update(
      {
        name,
        birthdate
      },
      {
        where: {
          id: id
        }
      }
    )
    return res
      .status(200)
      .json(`Usuário atualizado com sucesso: ${JSON.stringify(userUpdate)}`)
  } catch (error) {
    return res
      .status(500)
      .json(`Não foi possível atualizar o Usuário | Erro: ${error.message}`)
  }
}

// Deleta o Usuário pelo ID
async function deleteUserID (req, res) {
  try {
    const { id } = req.params

    const idCheck = await User.findByPk(id)

    if (!idCheck) {
      return res.status(404).json({ message: 'Usuário não encontrado.' })
    }

    const delUser = await User.destroy({
      where: {
        id: id
      }
    })
    return res
      .status(200)
      .json(`Produto deletado com sucesso: ${JSON.stringify(delUser)}`)
  } catch (error) {
    return res
      .status(500)
      .json(`Não foi possível deletar o Usuário | Erro: ${error.message}`)
  }
}

export default {
    getUserAll,
    postUser,
    putUserID,
    deleteUserID
}