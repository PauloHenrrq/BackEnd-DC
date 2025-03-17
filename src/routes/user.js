import e from "express";

import authMiddleware from "../middleware/authMiddleware.js";

import controllerUser from "../controller/controllerUser.js";
const { controllerGetUser: getUserAll,
        controllerPostUser: postUser,
        controllerPutUser: putUserID,
        controllerDeleteUser: deleteUserID
} = controllerUser

const userRoutes = e.Router()

userRoutes.get('/user', authMiddleware, getUserAll)

userRoutes.post('/user', authMiddleware, postUser)

userRoutes.put('/user/:id', authMiddleware, putUserID)

userRoutes.delete('/user/:id', authMiddleware, deleteUserID)

export default userRoutes