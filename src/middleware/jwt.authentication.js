import jwt from "jsonwebtoken";
import { ApplicatioError } from "../error-handeler/application-error.js";

const jwtAuth = (req,res,next) => {

    //check for Authentication Header
    const token = req.headers["authorization"];

    //if not present throw error
    if(!token){
        throw new ApplicatioError("No auhorization token found",401)
    }
    //if token present verify and call next()
    try{
        const payload = jwt.verify(token,"IVMG2d1SZ4wbpFdcJTOa5U2iXEKrZYDr");
        req.userId = payload.userId;
    }catch(er){
        throw new Error("something wrong with token system")
    }

    next();
}

export default jwtAuth;