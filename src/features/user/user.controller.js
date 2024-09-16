import UserModel from "./user.model.js";
import jwt from "jsonwebtoken";
export default class UserController{

    //get all user
    static getAlluser(req,res){
        return res.status(200).send(UserModel.getAllUsersmodel());
    }

    //add User
    static addUser(req,res){
        return res.status(200).send(UserModel.addUserModel(req.body));
    }

    //login User
    static loginUser(req,res){
        let {email,password} = req.body;
        let found = UserModel.loginUserModel(email,password);
        const token = jwt.sign({userId:found.id},"IVMG2d1SZ4wbpFdcJTOa5U2iXEKrZYDr",{expiresIn:"1h"});
        return res.status(200).send(`Logged in successfull.Here iis your token : ${token}`);
    }
}