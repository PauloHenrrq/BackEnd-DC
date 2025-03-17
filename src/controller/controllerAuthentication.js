import getAuthentication from "../service/serviceAuthentication.js";

const controllerGetAuthentication = (req, res) => {
    getAuthentication(req, res)
}

export default controllerGetAuthentication