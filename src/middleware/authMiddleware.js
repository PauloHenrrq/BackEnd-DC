import jwt from 'jsonwebtoken'

const secretKey =
  'wa1f651sf94awfaw8f1aw81#4281$1f8wfa18wfasf2@$@3Fwafa5sf1w23edszshkb'

const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization
    if (!authHeader) {
      return res.status(403).json({ message: 'Unauthorized' })
    }

    const token = authHeader.split(' ')[1]

    if (!token) {
      return res.status(403).json({ message: 'Unauthorized' })
    }

    jwt.verify(token, secretKey)
    next()  
  } catch (error) {
    return res.status(401).json({ message: error.message === "jwt expired" ? "Session Expired" : `Unauthorized` })
  }
}

export default authMiddleware