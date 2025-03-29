import postAuthentication from "../service/serviceAuthentication.js";

const controllerPostAuthentication = (req, res) => {
    postAuthentication(req, res)
}

export default controllerPostAuthentication