import PostModel from "./post.model.js";

export default class PostController{
    
    //get all posts
    static getAllPosts(req,res){
        return res.status(200).send(PostModel.getAllPostsModel());
    }

    //add post
    static addPost(req,res){
        let userId = req.userId;
        let {desc} = req.body;
        let imageUrl = req.file.filename;
        return res.status(200).send(PostModel.addPostModel(userId,desc,imageUrl));
    }

    //get users post
    static getUserPost(req,res){
        let userId = req.userId;
        let userpost = PostModel.getUserPostModel(userId);
        if(userpost.length==0){
            return res.status(400).send("No post");
        }
        return res.status(200).send(userpost);
    }

    //get post by id
    static getPostById(req,res){
        let postId = req.params.id;
        let found = PostModel.getPostByIdModel(postId);
        if(!found){
            return res.status(404).send(`No post at id : ${postId}`);
        }
        return res.status(200).send(found);
    }

    //update post
    static updatePost(req,res){
        let postId = req.params.id;
        let {desc} = req.body;
        let userId = req.userId;
        let imageUrl = req.file ? req.file.filename:null;
        let updated = PostModel.updatePostModel(userId,postId,desc,imageUrl);
        return res.status(200).send(updated);
    }

    //delete post
    static deletePost(req,res){
        let postId = req.params.id;
        let userId = req.userId;
        let deleted = PostModel.deletePostModel(postId,userId);
        return res.status(200).send(deleted);
    }

    //get post by caption
    static getPostByCaption(req,res){
        let caption = req.params.caption;
        let found = PostModel.getPostByCaptionModel(caption);
        let data = {
            success:true,
            post:found
        };
        return res.status(200).send(data);
    }

}