import User from '../models/UserModel.js'
import answers from '../../responses.js'

import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const secretKey =
  'wa1f651sf94awfaw8f1aw81#4281$1f8wfa18wfasf2@$@3Fwafa5sf1w23edszshkb'

async function postAuthentication (req, res) {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return answers.badRequest(res, 'Os campos precisam estar preenchidos')
    }

    const findUser = await User.findOne({
      where: {
        email
      }
    })

    if (!findUser) {
      return answers.badRequest(res, 'Usuário não existe')
    }

    try {
      const passwordCheck = await bcrypt.compare(password, findUser.password)

      if (!passwordCheck) {
        return answers.unauthorized(res, 'Senha ou Email incorretos')
      } else {
        const jwtToken = jwt.sign(
          {
            data: { id: findUser.id, email: findUser.email }
          },
          secretKey,
          { expiresIn: '10s' }
        )

        return answers.success(res, jwtToken)
      }
    } catch (error) {
      return answers.internalServerError(res, `Ocorreu um erro: ${error.message}`)
    }
  } catch (error) {
    return answers.internalServerError(res, `Ocorreu um erro: ${error.message}`)
  }
}

export default postAuthentication
