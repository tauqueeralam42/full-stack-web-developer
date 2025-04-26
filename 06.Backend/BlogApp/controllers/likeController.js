const Post = require("../models/postModel");
const Like = require("../models/likeModel");

exports.likePost = async (req,res) => {
    try{
        const {post,user} = req.body;
        const like = new Like({
            post,user,
        });

        const savedLike = await like.save();

        const updatedPost = await Post.findByIdAndUpdate(post, {$push : {likes : savedLike._id}}, {new:true})
                            .populate("likes").populate("comments")
                            .exec();

        res.status(200).json({
            post : updatedPost,
        })

    }
    catch(err){
        res.status(400).json({
            error : "Error while Liking Post",
            mesg : err.message,
        })

    }
}

exports.unlikePost = async (req,res) => {
    try{
        const {post,like} = req.body;
        const deletedLike = await Like.findOneAndDelete({post:post, _id:like});

        const updatedPost = await Post.findByIdAndUpdate(post, {$pull: {likes: like}}, {new:true})
        .populate("likes").exec();

        res.json({
            post : updatedPost,
        })

    }
    catch(err){
        return res.status(400).json({
            Error : "Error while unliking Post",
            msg : err.message,
        })
    }
}