import PostModel from "../post/post.model.js";
import { ApplicatioError } from "../../error-handeler/application-error.js";
export default class CommentModel{
    constructor(userId,postId,comment,commentId){
        this.commentId = commentId;
        this.userId = userId;
        this.postId = postId;
        this.comment = comment;
    }

    //get all comments for postId

    static getCommentsModel(postId){
        let post = PostModel.getAllPostsModel().find(p => p.postId == postId);
        if(!post){
            throw new ApplicatioError("post does not exists",404);
        }else{
            let allcomments = comments.filter(c=> c.postId == postId);
        return allcomments;
        }
        
    }

    //add comment
    static addCommentModel(userId,postId,comment){
        let post = PostModel.getAllPostsModel().find(p => p.postId == postId);
        if(!post){
            throw new ApplicatioError("post does not exists",404);
        }
        let newComment = new CommentModel(userId,postId,comment);
        newComment.commentId = comments.length+1;
        comments.push(newComment);
        return newComment;
    }

    //delete comment
    static deleteCommentModel(commentId,userId){
        let index = comments.findIndex(c => c.commentId == commentId);
        if(index<0){
            throw new ApplicatioError("No comment exits",404);
        }else{
            if(comments[index].userId != userId){
                throw new ApplicatioError("Cannot delete other's comments",401);
            }
            return comments.splice(index,1);
        }
    }

    //update specific comment
    static updateCommentModel(userId,commentId,comment){
        //check if comment exits
        let index = comments.findIndex(c => c.commentId == commentId);
        if(index<0){
            throw new ApplicatioError("No comment exits",404);
        }else{
            if(comments[index].userId != userId){
                throw new ApplicatioError("Cannot update other's comments",401);
            }
            comments[index].comment = comment;
            return comments[index];
        }
    }
}

var comments = [
    new CommentModel(1,1,"comment 1 ",1),
    new CommentModel(2,1,"comment 2",2),
    new CommentModel(3,1,"comment 3",3),
    new CommentModel(1,2,"comment 4",4),
    new CommentModel(2,2,"comment 5",5),
    new CommentModel(3,2,"comment 6",6),
    new CommentModel(1,3,"comment 7",7),
    new CommentModel(2,3,"comment 8",8),
    new CommentModel(3,3,"comment 9",9)
]