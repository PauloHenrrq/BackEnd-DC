import answers from '../../responses.js'
import User from '../models/UserModel.js'

import bcrypt from 'bcrypt'

// Retorna todos os usuários
async function getUserAll (req, res) {
  try {
    const getUser = await User.findAll()

    if (getUser.length === 0) {
      return answers.notFound(res, 'Não existe Usuários')
    }

    return answers.success(res, 'Usuários encontrados com Sucesso:', getUser)
  } catch (error) {
    return answers.internalServerError(
      res,
      'Não foi possível encontrar os Usuários', error
    )
  }
}

// Criação de Usuário
async function postUser (req, res) {
  try {
    const { name, birthdate, email, password } = req.body

    if(!name || !birthdate || !email || !password) {
      return answers.badRequest(res, 'Os campos precisam estar preenchidos')
    }

    const userAlreadyExists = await User.findOne({
      where: {
        email
      }
    })

    if (userAlreadyExists) {
      return answers.badRequest(res, 'Usuário já existe')
    }

    /**
     * Contains 8 characters
     * Contains special character @$!%*#?&
     * Contains uppercase and lowercase characters
     * Contains number
     */
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/gm
    const passwordIsValid = passwordRegex.test(password)

    if (!passwordIsValid) {
      return answers.badRequest(res, 'Senha não é válida')
    }

    const encryptedPassword = bcrypt.hashSync(password, 10)
    const createdUser = await User.create({
      name,
      birthdate,
      email,
      password: encryptedPassword
    })

    return answers.success(res, 'Usuário cadastrado com sucesso', createdUser)
  } catch (error) {
    return answers.internalServerError(res, 'Não foi possível cadastrar o Usuário', error)
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
