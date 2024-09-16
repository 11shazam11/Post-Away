import express from "express";
import PostController from "./post.controller.js";
import { fileUpload } from "../../middleware/fileupload.js";

const postRoutes = express.Router();

//get all posts
postRoutes.get("/all",PostController.getAllPosts);
//add post
postRoutes.post("/",fileUpload.single("imageUrl"),PostController.addPost);
//get user post
postRoutes.get("/",PostController.getUserPost);
//get by id 
postRoutes.get("/:id",PostController.getPostById);
//update
postRoutes.put("/:id",fileUpload.single("imageUrl"),PostController.updatePost);
//delete post
postRoutes.delete("/:id",PostController.deletePost);
//get by caption
postRoutes.get("/caption/:caption",PostController.getPostByCaption);

export default postRoutes;