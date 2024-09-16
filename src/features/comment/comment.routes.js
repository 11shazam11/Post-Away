import express from "express";
import CommentController from "./comment.controller.js";

const commentRoutes = express.Router();

//get comments by post id
commentRoutes.get("/:id",CommentController.getcomments);
//add commetn
commentRoutes.post("/:id",CommentController.addComment);
//delete comment
commentRoutes.delete("/:id",CommentController.deleteComment);
//update comment
commentRoutes.put("/:id",CommentController.updateComment);

export default commentRoutes;