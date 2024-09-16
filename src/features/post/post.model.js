import { ApplicatioError } from "../../error-handeler/application-error.js";
export default class PostModel{
    constructor(userId,desc,imageUrl,postId){
        this.userId =userId;
        this.desc = desc;
        this.imageUrl = imageUrl;
        this.postId = postId;
    }

    //get all post
    static getAllPostsModel(){
        return posts;
    }

    //add post
    static addPostModel(userId,desc,imageUrl){
        let newPost = new PostModel(userId,desc,imageUrl);
        newPost.postId = posts.length+1;
        posts.push(newPost);
        return newPost;
    }

    //user post
    static getUserPostModel(userId){
        return posts.filter(p => p.userId == userId);
    }

    //get post by id
    static getPostByIdModel(postId){
        return posts.find(p => p.postId==postId);
    }

    //update post 
    static updatePostModel(userId,postId,desc,imageUrl){
        //check if its the user post or not 
        let post = posts.find(p => p.postId == postId);
        if(!post){
            throw new ApplicatioError("Post does not exists",404)
        }
        if(post.userId != userId){
            throw new ApplicatioError("Not your post to Update",401)
        }

        if(desc){
            post.desc = desc;
        }
        if(imageUrl){
            post.imageUrl = imageUrl;
        }
        return post;
    }

    //delete post
    static deletePostModel(postId,userId){
        let index = posts.findIndex(p => p.postId == postId);
        if(index<0){
            throw new ApplicatioError("Post not found",404)
        }
        if(posts[index].userId != userId){
            throw new ApplicatioError("not ypur post to delete",401)
        }
        return posts.splice(index,1);
    }
    //get post by caption
    static getPostByCaptionModel(caption){
        let captionPosts = posts.filter(p => p.desc.includes(caption));
        if(captionPosts.length == 0){
            throw new ApplicatioError(`No post with caption ${caption}`,404);
        }
        return captionPosts;
    }

}

var posts = [
    new PostModel(1,"post1","img1",1),
    new PostModel(2,"post2","img2",2),
    new PostModel(3,"post3","img3",3)
];