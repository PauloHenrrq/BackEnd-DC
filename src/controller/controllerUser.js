import serviceUser from "../service/serviceUser.js";

const { getUserAll, postUser, putUserID, deleteUserID } = serviceUser

const controllerGetUser = (req, res) => {
    getUserAll(req, res)
}
const controllerPostUser = (req, res) => {
    postUser(req, res)
}
const controllerPutUser = (req, res) => {
    putUserID(req, res)
}
const controllerDeleteUser = (req, res) => {
    deleteUserID(req, res)
}

export default {
    controllerGetUser,
    controllerPostUser,
    controllerPutUser,
    controllerDeleteUser
}