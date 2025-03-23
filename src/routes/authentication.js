import e from "express";

import controllerGetAuthentication from "../controller/controllerAuthentication.js";
const authenticationRoute = e.Router()

authenticationRoute.get('/sign', controllerGetAuthentication)

export default authenticationRoute