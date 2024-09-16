import express from "express";
import UserController from "./user.controller.js";

const userRouter = express.Router();

//get all Users
userRouter.get('/',UserController.getAlluser);
//add user
userRouter.post('/signup',UserController.addUser);
//login User
userRouter.post('/signin',UserController.loginUser);
//exporting router
export default userRouter;