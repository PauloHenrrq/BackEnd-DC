import jwt from 'jsonwebtoken'

const secretKey =
  'wa1f651sf94awfaw8f1aw81#4281$1f8wfa18wfasf2@$@3Fwafa5sf1w23edszshkb'

async function getAuthentication (req, res) {
  const verify = req.params.data

  try {
    if (verify === 'paulohenrique@gmail.com') {
      const jwtToken = jwt.sign(
        {
          data: 'paulohenrique@gmail.com'
        },
        secretKey,
        { expiresIn: '1h' }
      )

      return res.status(200).json(jwtToken)
    } else {
      return res.status(403).json({ message: 'Unauthorized' })
    }
  } catch (error) {
    return res.status(400).json({ message: `Erro: ${error.message}` })
  }
}

export default getAuthentication
