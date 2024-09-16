import express from "express";

//swagger for documentation 
import swagger from "swagger-ui-express";
////logger middleware
import {loggerMiddleware,errorMiddleware} from "./src/middleware/logger.middleware.js";
//user router
import userRouter from "./src/features/user/user.routes.js";
//post router
import postRoutes from "./src/features/post/post.routes.js";
//comment route
import commentRoutes from "./src/features/comment/comment.routes.js";
//like rote
import likeRoutes from "./src/features/like/like.route.js";
//api docs json file (swagger)
import apiDocs from "./swagger.json" assert {type:"json"};
//body parser for data parsing
import bodyParser from "body-parser";
//multer config for file uploads
import { fileUpload } from "./src/middleware/fileupload.js";
//jwt authentication middlewar
import jwtAuth from "./src/middleware/jwt.authentication.js";
//Error handeler middleware
import {ApplicatioError} from "./src/error-handeler/application-error.js";
//invalid path handeler
import invalidPath from "./src/error-handeler/invalid-path.js";


//creating server
const app = express();

app.use(bodyParser.json());

//api-documentation using swagger
app.use("/api-docs",swagger.serve,swagger.setup(apiDocs));

//logger middleware
app.use(loggerMiddleware);

//setting users route
app.use("/api/users/",userRouter);
//Post routes
app.use("/api/post/",jwtAuth,postRoutes);
//Comment routes
app.use("/api/comments/",jwtAuth,commentRoutes);
//like route
app.use("/api/likes/",jwtAuth,likeRoutes);

//invalid path
app.use((req,res) => {
    return res.status(404).send("Invalid Path");
});
//error handeler
app.use((err,req,res,next) => {
    //log Error
    errorMiddleware(err,req);
    if(err instanceof ApplicatioError){
        return res.status(err.code).send({
            success:false,
            msg:err.message
        });
    }
    return res.status(500).send("Something went wrong.Please try agin later")
});



//setting port number
app.listen(3000,()=>{
    console.log("Server is listning at 3000");
});