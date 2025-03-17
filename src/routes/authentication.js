import e from "express";

import controllerGetAuthentication from "../controller/controllerAutentication.js";
const authenticationRoute = e.Router()

authenticationRoute.get('/sign/:data', controllerGetAuthentication)

export default authenticationRoute