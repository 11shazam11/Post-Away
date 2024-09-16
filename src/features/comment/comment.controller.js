import CommentModel from "./comment.model.js";

export default class CommentController{

    //get comments by post id
    static getcomments(req,res){
        let postId = req.params.id;
        let found = CommentModel.getCommentsModel(postId);
        if(found.length==0){
            return res.status(200).send("No comments yet");
        }else{
            return res.status(200).send(found);
        }
    }

    //adding comment for postid
    static addComment(req,res){
        let userId = req.userId;
        let postId = req.params.id;
        let {comment} = req.body;
            let added = CommentModel.addCommentModel(userId,postId,comment);
            console.log(JSON.stringify(added));
            return res.status(200).send({
                success:true,
                comment:added
            });
    }

    //delete comment
    static deleteComment(req,res){
        let userId = req.userId;
        let commentId = req.params.id;
            let deleted=CommentModel.deleteCommentModel(commentId,userId);
            return res.status(200).send({
                success:true,
                deleted_Comment:deleted
            })
    }

    //update a specif comment
    static updateComment(req,res){
        let userId = req.userId;
        let commentId = req.params.id;
        let {comment} = req.body;
            let updated = CommentModel.updateCommentModel(userId,commentId,comment);
            return res.status(200).send({
                success:true,
                updated_comment:updated
            });  
    }
}