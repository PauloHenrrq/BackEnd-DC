import User from '../models/UserModel.js'
import answers from '../../responses.js'

import bcrypt from 'bcrypt'

// Retorna todos os usuários
async function getUserAll (req, res) {
  try {
    const getUser = await User.findAll()

    if (getUser.length === 0) {
      return answers.noContent(res, 'Não existe Usuários')
    }

    return answers.success(res, 'Usuários encontrados com Sucesso:', getUser)
  } catch (error) {
    return answers.InternalServerError(
      res,
      `Não foi possível encontrar os Usuários | Erro: ${error.message}`
    )
  }
}

// Criação de Usuário
async function postUser (req, res) {
  try {
    const { name, birthdate, email, password } = req.body

    console.log(req)

    if (!name || !birthdate || !email || !password) {
      return answers.unauthorized(res, 'Campos obrigatórios')
    }

    const emailChecking = await User.findOne({ where: { email: email } })
    if (emailChecking) {
      return answers.badRequest(res, 'Email já existente')
    }

    // Precisa conter 8 Caracteres com Minusculas e Maisculas
    // Conter caracteres especiais
    // Conter números
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/gm

    const passwordIsValid = passwordRegex.test(password)
    if (!passwordIsValid) {
      return answers.badRequest(res, 'Senha fraca')
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const userCreate = await User.create({
      name,
      email,
      birthdate,
      password: hashedPassword
    })
    return answers.created(
      res,
      `Usuário cadastrado com sucesso: ${JSON.stringify(userCreate)}`
    )
  } catch (error) {
    return answers.InternalServerError(
      res,
      `Não foi possível cadastrar o Usuário | Erro: ${error.message}`
    )
  }
}

// Atualização dos Usuários por ID
async function putUserID (req, res) {
  try {
    const { id } = req.params
    const { name, email } = req.body

    const idCheck = await User.findByPk(id)

    if (!idCheck) {
      return res.status(404).json({ message: 'Usuário não encontrado.' })
    }

    const userUpdate = await User.update(
      {
        name,
        email
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
