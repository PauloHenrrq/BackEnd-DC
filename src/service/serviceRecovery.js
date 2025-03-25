import answers from '../../responses.js'
import User from '../models/UserModel.js'
import passwordRecovery from '../models/passwordRecovery.js'

import bcrypt, { hashSync } from 'bcrypt'

async function postCode (req, res) {
  try {
    const { email } = req.body

    if (!email) {
      return answers.badRequest(res, 'Email não pode estar vazio')
    }

    const code = Math.floor(100000 + Math.random() * 900000)
    const timestamp = Date.now() + (10 * 60 * 1000)

    const codeCheck = await passwordRecovery.findOne({
      where: { email: email }
    })

    if (codeCheck === null) {
      await passwordRecovery.create({
        email,
        code,
        timestamp
      })

      return answers.created(res, 'Código gerado com sucesso')
    } else {
      await passwordRecovery.update(
        {
          email,
          code,
          timestamp
        },
        {
          where: {
            email: email
          }
        }
      )

      return answers.created(res, 'Código gerado com sucesso', code)
    }
  } catch (error) {
    answers.internalServerError(
      res,
      'Ocorreu um erro ao recuperar a senha',
      error.message
    )
  }
}

async function postRecovery (req, res) {
  try {
    const { email, code, password } = req.body

    if (!email || !code || !password) {
      return answers.badRequest(res, 'Os campos não podem estar vazios')
    }

    const returnCode = await passwordRecovery.findOne({
      where: {
        email: email
      }
    })

    if (!returnCode) {
      return answers.notFound(res, 'o Email inserido não existe')
    }

    if (returnCode.timestamp <= 0) {
      return answers.unauthorized(res, 'Código expirou')
    }

    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&,.])[A-Za-z\d@$!%*#?&\.,]{8,}$/gm
    const passwordIsValid = passwordRegex.test(password)

    if (returnCode.code !== code) {
      console.log(returnCode)
      return answers.badRequest(res, 'Código fornecido está errado')
    } else if (!passwordIsValid) {
      return answers.badRequest(res, 'A senha não é válida')
    } else {
      const encryptedPassword = bcrypt.hashSync(password, 10)
      await User.update(
        {
          password: encryptedPassword
        },
        {
          where: {
            email: email
          }
        }
      )

      return answers.created(res, 'Senha alterada com sucesso!')
    }
  } catch (error) {
    return answers.internalServerError(
      res,
      'Ocorreu um erro ao trocar a senha',
      error.message
    )
  }
}

export default {
  postCode,
  postRecovery
}
