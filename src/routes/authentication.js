import e from "express";

import controllerPostAuthentication from "../controller/controllerAuthentication.js";
const authenticationRoute = e.Router()

authenticationRoute.post('/sign', controllerPostAuthentication)

export default authenticationRoute