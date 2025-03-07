import express from "express";

import controllerUser from "../controller/controllerUser.js";
const { controllerGetUser: getUserAll,
        controllerPostUser: postUser,
        controllerPutUser: putUserID,
        controllerDeleteUser: deleteUserID
} = controllerUser

const userRoutes = express.Router()

userRoutes.get('/user', getUserAll)

userRoutes.post('/user', postUser)

userRoutes.put('/user/:id', putUserID)

userRoutes.delete('/user/:id', deleteUserID)

export default userRoutes