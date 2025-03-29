import e from 'express'

import controllerRecovery from '../controller/controllerRecovery.js'
const { controllerPostCode: postCode, 
        controllerPostRecovery: postRecovery 
} = controllerRecovery

const recoveryRoutes = e.Router()

recoveryRoutes.post('/email', postCode)

recoveryRoutes.post('/recovery', postRecovery)

export default recoveryRoutes