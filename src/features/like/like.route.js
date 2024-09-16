import express from "express";
import LikesController from "./like.controller.js";

const likeRoutes = express.Router();

//get likes
likeRoutes.get("/:postId",LikesController.getLikes);
//toggel likes
likeRoutes.get("/toggle/:postId",LikesController.toggelLike);
export default likeRoutes;