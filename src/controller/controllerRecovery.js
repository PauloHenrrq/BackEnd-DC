import serviceRecovery from "../service/serviceRecovery.js";

const { postCode, postRecovery } = serviceRecovery

const controllerPostCode = (req, res) => {
    postCode (req, res)
}

const controllerPostRecovery = (req, res) => {
    postRecovery (req, res)
}

export default {
    controllerPostCode,
    controllerPostRecovery
}