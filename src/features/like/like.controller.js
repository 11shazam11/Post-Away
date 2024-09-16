import LikesModel from "./like.model.js";

export default class LikesController{

    //get likes
    static getLikes(req,res){
        let postId = req.params.postId;
            let alllikes = LikesModel.getLikesModel(postId);
            if(alllikes.total_Likes==0){
                return res.status(200).send({
                    success:true,
                    data:"No likes yet"
                });
            }
            return res.status(200).send({
                success:true,
                data:alllikes
            });
    }

    //toggel i.e  remove from like

    static toggelLike(req,res){
        let postId = req.params.postId;
        let userId = req.userId;
            let liked = LikesModel.toggleLikeModel(userId,postId);
            return res.status(200).send({
                success:true,
                msg:liked
            })
    }
}