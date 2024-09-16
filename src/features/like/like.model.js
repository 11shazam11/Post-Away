import PostModel from "../post/post.model.js";
import { ApplicatioError } from "../../error-handeler/application-error.js";
export default class LikesModel{
    constructor(userId,postId,likestatus){
        this.userId = userId;
        this.postId = postId;
        this.likestatus = likestatus;
    }

    //get likes for a post
    static getLikesModel(postId){
        let post = PostModel.getAllPostsModel().find(p => p.postId == postId);
        if(!post){
            throw new ApplicatioError("Post does not exists",404);
        }
        let alllikes = likes.filter(l => l.postId == postId && l.likestatus == true);
        let data = {
            total_Likes:alllikes.length,
            liked_users: alllikes
        }
        return data;
    }

    //toggel likes
    static toggleLikeModel(userId,postId){
        //check if post exsits
        let post = PostModel.getAllPostsModel().find(p => p.postId == postId);
        if(!post){
            throw new ApplicatioError("Post does not exists",404);
        }
        //if like exsists or not
        let likeExists = likes.find( l => l.userId==userId && l.postId == postId);
        if(!likeExists){
            let newLike = new LikesModel(userId,postId,true);
            likes.push(newLike);
            return "Post liked";
        }else{
            //if exists check status true or false
            if(likeExists.likestatus==true){
                likeExists.likestatus=false;
                return "removed from likes";
            }else{
                likeExists.likestatus = true;
                return "Post liked";
            }
        }
    }

}

var likes = [
    new LikesModel(1,1,true),
    new LikesModel(2,1,true),
    new LikesModel(3,1,true),
    new LikesModel(1,2,true),
    new LikesModel(2,2,true),
    new LikesModel(3,2,true),
    new LikesModel(1,3,true),
    new LikesModel(2,3,true),
    new LikesModel(3,3,true)
]